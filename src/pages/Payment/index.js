import React, { useEffect } from "react";

export default function Payment() {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const userCode = "imp14397622";
    const { IMP } = window;
    IMP.init(userCode);

    const data = {
      pg: "kakaopay",
      pay_method: "card",
      merchant_uid: "test_lmof46ih",
      name: "테스트 결제",
      amount: 100,
      buyer_tel: "010-0000-0000",
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const {
      success,
      error_msg,
    } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return <>{onClickPayment()};</>;
}
