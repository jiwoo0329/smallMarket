import React, { useState, useEffect } from 'react';

import GeneralWrap from '../../components/GeneralWrap';

import { fireStore } from '../../lib/Firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { DocumentData } from '@google-cloud/firestore';
import AddCommaToNum from '../../utils/Payment';

interface extendPayHistoryType extends payHistoryType {
    docId: string;
}

export default function PayList() {
    const [payHistoryList, setPayHistoryList] = useState<
        Array<extendPayHistoryType>
    >([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [pickItem, setPickItem] = useState('');

    const getPayHistoryOfFireBase = async () => {
        // 'payHistory' 컬렉션의 모든 문서들을 가져옴
        const querySnapshot = await getDocs(
            collection(fireStore, 'payHistory')
        );

        const payHistoryArr: extendPayHistoryType[] = [];
        querySnapshot.forEach((doc: DocumentData) => {
            // 가져온 모든 문서들을 확인
            // console.log(doc.id, ' => ', doc.data());

            let addObj = {
                docId: doc.id,
            };
            return payHistoryArr.push(Object.assign({}, doc.data(), addObj));
        });
        setPayHistoryList(payHistoryArr);
    };

    useEffect(() => {
        getPayHistoryOfFireBase();
    }, []);

    useEffect(() => {
        if (payHistoryList.length > 0) {
            let _totalPrice = 0;
            payHistoryList.forEach((item) => (_totalPrice += item.totalPrice));
            setTotalPrice(_totalPrice);
        }
    }, [payHistoryList]);

    const clickDelete = async () => {
        
        var delConfirm = window.confirm('삭제하시겠습니까?');
        if (delConfirm) {
            // payHistory 콜렉션의 pickPayHistoryRef.current.value 문서 삭제
            await deleteDoc(doc(fireStore, 'payHistory', pickItem))
            .then((res) => {
                getPayHistoryOfFireBase();
                setPickItem('');
                console.log('삭제 성공', res);
            })
            .catch((err) => {
                console.log('삭제실패', err);
            });
        }
        
    };

    return (
        <section>
            <GeneralWrap>
                <div className="mt-32 ">
                    <h2 className="text-2xl text-center font-bold">
                        Payment History📄
                    </h2>
                    <div className="w-full overflow-auto mt-10">
                        <button
                            type="button"
                            className="float-right py-2 px-4 border rounded text-white bg-red-600 hover:bg-red-700"
                            onClick={clickDelete}
                        >
                            Delete
                        </button>
                        <table className="whitespace-nowrap w-full min-w-[400px] break-words h-auto">
                            <thead className="border-b-2">
                                <tr>
                                    <th className="w-[5%] py-1 px-2"></th>
                                    <th className="w-[5%] py-1 px-2">No.</th>
                                    <th className="w-[40%] py-1 px-2">Memo</th>
                                    <th className="w-[20%] py-1 px-2">
                                        Date/Time
                                    </th>
                                    <th className="w-[30%] py-1 px-2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payHistoryList?.map(
                                    (item: extendPayHistoryType, idx) => (
                                        <tr
                                            key={item.uuid}
                                            className="hover:bg-gray-200"
                                        >
                                            <td className="text-center py-1 px-2">
                                                <input
                                                    type="radio"
                                                    name="payHistoryItem"
                                                    value={item.docId}
                                                    onChange={() => {
                                                        setPickItem(item.docId);
                                                    }}
                                                />
                                            </td>
                                            <td className="text-center py-1 px-2">
                                                {idx + 1}
                                            </td>
                                            <td className="py-1 px-2">
                                                {item.payMemo}
                                            </td>
                                            <td className="text-center py-1 px-2">
                                                {item.date} / {item.time}
                                            </td>
                                            <td className="text-right py-1 px-2">
                                                {AddCommaToNum(item.totalPrice, 'show')}
                                            </td>
                                        </tr>
                                    )
                                )}
                                <tr className="border-t-2">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="py-1 px-2 font-semibold text-right text-red-500">
                                        {AddCommaToNum(totalPrice, 'show')}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </GeneralWrap>
        </section>
    );
}
