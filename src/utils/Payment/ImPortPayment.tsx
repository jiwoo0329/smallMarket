import { fireStore } from '../../lib/Firebase';
import { collection, addDoc } from 'firebase/firestore';

import { NowTime } from '../Time';
import { TodayDate } from '../Date';

declare const window: typeof globalThis & {
    IMP: any;
};

export default function ImPortPayment(formData: orderType, navigate: any) {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    document.head.removeChild(jquery);
    document.head.removeChild(iamport);

    const onClickPayment = () => {
        const userCode = process.env.REACT_APP_IMPORT_STORE_CODE;
        const { IMP } = window;
        IMP.init(userCode);

        let PG_env =
            formData.paymentType === 'kicc'
                ? process.env.REACT_APP_IMPORT_KICC_PG_ID
                : process.env.REACT_APP_IMPORT_KAKAOPAY_PG_ID;

        const data = {
            pg: formData.paymentType + '.' + PG_env,
            pay_method: 'card',
            merchant_uid: 'merchant_' + NowTime(),
            name: formData.paymentType + ' 테스트 결제',
            amount: formData.totalPrice,
            buyer_tel: '010-0000-0000',
        };

        console.log('아임포트데이터', data)

        IMP.request_pay(data, paymentCallback);
    };

    const paymentCallback = (response: any) => {


        console.log("결과까지 옴", response)
        if (response.success) {
            // firebase 데이터 추가 (id는 자동 생성됨)
            let uuid = crypto.randomUUID();
            let todayArr = TodayDate();
            const data = {
                uuid: uuid,
                payMemo: response.name,
                date: todayArr[0] + '.' + todayArr[1] + '.' + todayArr[2],
                time: NowTime(),
                totalPrice: response.paid_amount,
            };

            addDoc(collection(fireStore, 'payHistory'), data)
                .then((res) => {
                    console.log('res', res);
                    navigate('/pay/success');
                })
                .catch((err) => {
                    console.log('err', err);
                });
        } else {
            alert(`결제 실패: ${response.error_msg}`);
        }
    };

    onClickPayment();
}
