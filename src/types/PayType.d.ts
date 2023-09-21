interface payHistoryType{
    uuid: string;
    payMemo: string;
    date: string;
    time: string;
    totalPrice: number;
}

interface orderType{
    recipient: string;
    address_postNum: string;
    address_basic: string;
    address_detail: string;
    mobile: string;
    email: string;
    payMemo: string;
    totalPrice: number;
    paymentType: string;
};