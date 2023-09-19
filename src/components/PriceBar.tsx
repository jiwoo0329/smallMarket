import React, { useState, useEffect } from 'react';
import Payment from '../utils/Payment';
import { useNavigate } from "react-router-dom";
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
                Total: <span>{totalPrice} 원</span>
            </h2>

            <button
                type="button"
                className="py-2 px-12 text-white bg-blue-400 hover:bg-blue-300 rounded transition duration-300"
                onClick={() => {
                    Payment(totalPrice, navigate);
                }}
            >
                Pay
            </button>
        </div>
    );
}
