declare const window: typeof globalThis & {
    IMP: any;
};

export default function Payment(totalPrice: number) {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    document.head.removeChild(jquery);
    document.head.removeChild(iamport);

    const onClickPayment = () => {
        const userCode = 'imp14397622';
        const { IMP } = window;
        IMP.init(userCode);

        const data = {
            pg: 'html5_inicis',
            pay_method: 'card',
            merchant_uid: 'test_lmq1p51p',
            name: '테스트 결제',
            amount: totalPrice,
            buyer_tel: '010-0000-0000',
        };

        IMP.request_pay(data, callback);
    };

    const callback = (response: any) => {
        const { success, error_msg } = response;

        if (success) {
            alert('결제 성공');
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    };

    onClickPayment();
}
