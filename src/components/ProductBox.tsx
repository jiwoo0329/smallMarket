import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface PropsType {
    data: foodDataType;
    pickFoodList: foodDataType[];
    setPickFoodList: Dispatch<SetStateAction<foodDataType[]>>;
}
export default function ProductBox({
    data,
    pickFoodList,
    setPickFoodList,
}: PropsType) {
    const [isLike, setIsLike] = useState(false);
    const [isPick, setIsPick] = useState(false);
    const { id, productName, price, likeItTotal, description, productUrl } =
        data;

    useEffect(() => {
        if (isPick) {
            setPickFoodList([...pickFoodList, data]);
        } else {
            // 선택 아닐 때
            if (pickFoodList.length > 0) {
                if (pickFoodList.some((item) => item.id === data.id)) {
                    // 같은게 있을 떄
                    pickFoodList.forEach((item, idx) => {
                        if (item.id === data.id) {
                            setPickFoodList(
                                pickFoodList.filter(
                                    (food) => food.id !== data.id
                                )
                            );
                        }
                    });
                }
            }
        }
    }, [isPick]);

    return (
        <div
            className="relative flex md:flex-col flex-wrap gap-4 rounded p-4 bg-white cursor-pointer drop-shadow-md hover:drop-shadow-xl"
            onClick={() => setIsPick(!isPick)}
        >
            <label htmlFor={`pickBtn${id}`} className="w-6 h-6">
                {isPick ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 cursor-pointer"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )}
                <input
                    id={`pickBtn${id}`}
                    type="checkbox"
                    className="hidden"
                    checked={isPick}
                    onChange={(e) => {
                        console.log(!e.target.checked);
                        setIsPick(!e.target.checked);
                    }}
                ></input>
            </label>
            <img
                src={productUrl}
                alt={productName}
                className="md:w-full w-40 h-40"
            />
            <div className="flex-1 pt-4 flex flex-col justify-between">
                <div className="mb-5">
                    <h4 className="font-semibold">{productName}</h4>
                    <p className="text-sm font-light text-slate-400">
                        {description}
                    </p>
                </div>
                <div className="flex justify-between">
                    <span className="text-lg">{price}원</span>
                    <button
                        type="button"
                        className="whitespace-nowrap"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsLike(!isLike);
                        }}
                    >
                        <span className="text-sm mr-1">
                            {isLike ? likeItTotal + 1 : likeItTotal}
                        </span>
                        {isLike ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 inline-block"
                            >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 inline-block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
