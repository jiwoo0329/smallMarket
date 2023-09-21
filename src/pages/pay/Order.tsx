import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import GeneralWrap from '../../components/GeneralWrap';
import Payment from '../../utils/Payment';
import Box from './_component/OrderBox';
import Row from './_component/OrderFormRow';
import DaumPostCodeBtn from '../../utils/Address/DaumPostCodeBtn';

export default function Order() {
    const navigate = useNavigate();
    const location = useLocation();
    const cartList = location.state.cartList;
    const [searchAddress, setSearchAddress] = useState<getPostCodeAddressType>();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let addPrice = 0;
        for (let i in cartList) {
            addPrice += cartList[i].price;
        }
        setTotalPrice(addPrice);
    }, [cartList]);

    const onClickPayBtn = async (e: any) => {
        e.preventDefault();

        const target = e.target

        const formData = {
            recipient: target['recipient'].value,
            address_postNum: target['postNum'].value,
            address_basic: target['address'].value,
            address_detail: target['addressDetail'].value,
            mobile: target['mobileNum'].value,
            email: target['email'].value,
            payMemo: target['payMemo'].value,
            totalPrice: totalPrice + 3000,
            paymentType: target['paymentType'].value
        };

        console.log("formData", formData)

        Payment(formData, navigate);
    };

    return (
        <section className="bg-gray-300/50">
            <GeneralWrap>
                <div className="pt-32 pb-20 md:px-10">
                    <h2 className="text-2xl text-center font-bold">Order✍️</h2>
                    <form
                        className="w-full mt-10 grid gap-10 border"
                        onSubmit={(e) => onClickPayBtn(e)}
                    >
                        <Box boxTitle="1. Delivery Info 💡">
                            {/* 받는 사람 */}
                            <Row otherClassNames="items-center">
                                <label
                                    htmlFor="recipient"
                                    className="w-2/12 font-semibold"
                                >
                                    Recipient
                                </label>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        id="recipient"
                                        name="recipient"
                                        placeholder="recipient"
                                        className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                                    />
                                </div>
                            </Row>

                            {/* 주소 */}
                            <Row otherClassNames="">
                                <label
                                    htmlFor="address"
                                    className="w-2/12 mt-2 font-semibold"
                                >
                                    Address
                                </label>
                                <div className="flex-1 grid gap-2">
                                    <div className="flex md:w-1/2 gap-2">
                                        <input
                                            type="text"
                                            id="postNum"
                                            name="postNum"
                                            value={searchAddress?.postNumber}
                                            readOnly={true}
                                            placeholder="post number"
                                            className="w-full py-2 px-4 border rounded-lg bg-gray-100/80 focus:outline-none placeholder:italic placeholder:text-slate-400"
                                        />
                                        <DaumPostCodeBtn
                                            setSearchAddress={setSearchAddress}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={
                                            searchAddress?.address
                                                ? `${searchAddress?.address+searchAddress?.extraAddress}`
                                                : ''
                                        }
                                        readOnly={true}
                                        placeholder="address"
                                        className="w-full py-2 px-4 border rounded-lg bg-gray-100/80 focus:outline-none placeholder:italic placeholder:text-slate-400"
                                    />
                                    <input
                                        type="text"
                                        id="addressDetail"
                                        name="addressDetail"
                                        placeholder="address detail"
                                        className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                                    />
                                </div>
                            </Row>

                            {/* 휴대전화 */}
                            <Row otherClassNames="items-center">
                                <label
                                    htmlFor="mobileNum"
                                    className="w-2/12 font-semibold"
                                >
                                    Mobile
                                </label>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        id="mobileNum"
                                        name="mobileNum"
                                        placeholder="mobile"
                                        className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                                    />
                                </div>
                            </Row>
                            {/* 이메일 */}
                            <Row otherClassNames="items-center">
                                <label
                                    htmlFor="email"
                                    className="w-2/12 font-semibold"
                                >
                                    Email
                                </label>
                                <div className="flex-1">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                                    />
                                </div>
                            </Row>

                            {/* 메모내용 */}
                            <Row otherClassNames="">
                                <label
                                    htmlFor="payMemo"
                                    className="w-2/12 mt-2 font-semibold"
                                >
                                    Memo
                                </label>
                                <div className="flex-1">
                                    <textarea
                                        id="payMemo"
                                        name="payMemo"
                                        placeholder="memo"
                                        rows={2}
                                        className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400 resize-none"
                                    />
                                </div>
                            </Row>
                        </Box>
                        <Box boxTitle="2. Cart List 🛒">
                            {cartList.length > 0 &&
                                cartList.map(
                                    (item: foodDataType, idx: string) => (
                                        <Row
                                            key={idx}
                                            otherClassNames="items-center border-b flex"
                                        >
                                            <img
                                                src={item.productUrl}
                                                alt={item.productName}
                                                className="w-20 h-20 border bg-gray-400"
                                            />
                                            <div className="flex-1 pt-4 flex flex-col justify-between">
                                                <div className="mb-5">
                                                    <h4 className="font-semibold">
                                                        {item.productName}
                                                    </h4>
                                                    {/* <p className="text-sm">
                                                        수량:{' '}
                                                        <input
                                                            type="number"
                                                            className="pl-2 border rounded-lg"
                                                            min={1}
                                                            max={100}
                                                            defaultValue={1}
                                                        ></input>
                                                    </p> */}
                                                    <p className="text-right text-lg whitespace-nowrap">
                                                        {item.price}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6 inline-block ms-1"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                                            ></path>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </div>
                                        </Row>
                                    )
                                )}
                        </Box>
                        <Box boxTitle="3. Payment 💸">
                            {/* 결제정보: 주문상품, 배송비, 최종결제 금액 */}
                            <table className="w-full md:w-4/5 lg:w-2/3 my-0 mx-auto">
                                <tbody>
                                    <tr>
                                        <td className="py-2">Products Price</td>
                                        <td className="py-2 text-right">
                                            {totalPrice}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2">Delivery fee</td>
                                        <td className="py-2 text-right">
                                            3000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">
                                            Total
                                        </td>
                                        <td className="py-2 text-right text-2xl text-blue-600">
                                            {totalPrice + 3000}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Row otherClassNames="items-center">
                                <h4 className="font-semibold">Type</h4>
                                <select name="paymentType" defaultValue="kicc" className="flex-1 border rounded-lg py-1 px-2">
                                    <option value="kakaopay">KakaoPay</option>
                                    <option value="kicc">Card</option>
                                </select>
                            </Row>
                        </Box>
                        <button
                            type="submit"
                            className="py-2 px-12 sm:w-1/3 my-0 mx-auto text-white bg-blue-400 hover:bg-blue-300 rounded transition duration-300"
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            </GeneralWrap>
        </section>
    );
}
