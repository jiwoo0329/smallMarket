import { fireStore } from '../../lib/Firebase';
import { collection, addDoc } from 'firebase/firestore';

import { NowTime } from '../Time';
import { TodayDate } from '../Date';

declare const window: typeof globalThis & {
    IMP: any;
};

export default function Payment(totalPrice: number, navigate: any) {
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

        const data = {
            // pg: 'kakaopay.'+process.env.REACT_APP_IMPORT_KAKAOPAY_PG_ID,
            pg: 'kicc.'+process.env.REACT_APP_IMPORT_KICC_PG_ID,
            pay_method: 'card',
            merchant_uid: 'merchant_'+NowTime(),
            name: 'kakaopay 테스트 결제',
            amount: totalPrice,
            buyer_tel: '010-0000-0000',
        };

        IMP.request_pay(data, paymentCallback);
    };

    const paymentCallback = (response: any) => {
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
