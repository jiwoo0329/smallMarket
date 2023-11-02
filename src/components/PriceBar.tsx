import React, { useState, useEffect } from 'react';
import Payment from '../utils/Payment';
import { useNavigate } from 'react-router-dom';
interface PropsType {
    pickFoodList: foodDataType[];
}

export default function PriceBar({ pickFoodList }: PropsType) {
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        let addPrice = 0;
        for (let i in pickFoodList) {
            addPrice += pickFoodList[i].price;
        }
        setTotalPrice(addPrice);
    }, [pickFoodList]);

    return (
        <div className="fixed bottom-0 flex justify-between items-center bg-sky-100 w-full px-8 py-5">
            <h2 className="text-xl">
                Total:
                <span>
                    {totalPrice}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 inline-block ms-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                    </svg>
                </span>
            </h2>

            <button
                type="button"
                className="py-2 px-12 text-white bg-blue-400 hover:bg-blue-300 rounded transition duration-300"
                onClick={() => {
                    navigate('/pay/order', {state: {cartList: pickFoodList}})
                    
                }}
            >
                Pay Now
            </button>
        </div>
    );
}
