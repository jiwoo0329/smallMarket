import React, { useState, useEffect } from 'react';

import ProductBox from '../../components/ProductBox';
import PriceBar from '../../components/PriceBar';
import GeneralWrap from '../../components/GeneralWrap';

import { fireStore } from '../../lib/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DocumentData } from '@google-cloud/firestore';

export default function Home() {
    const [foodList, setFoodList] = useState<Array<foodDataType>>([]);
    const [pickFoodList, setPickFoodList] = useState<Array<foodDataType>>([]);

    const getProductOfFireBase = async () => {
        // 'product' 컬렉션의 모든 문서들을 가져옴
        const querySnapshot = await getDocs(collection(fireStore, 'product'));

        const foodArr: foodDataType[] = [];
        querySnapshot.forEach((doc: DocumentData) => {
            // 가져온 모든 문서들을 확인
            // console.log(doc.id, ' => ', doc.data());
            return foodArr.push(doc.data());
        });
        setFoodList(foodArr);
    };

    useEffect(() => {
        getProductOfFireBase();
    }, []);

    return (
        <section>
            <GeneralWrap>
                <div className="flex md:grid flex-col md:flex-row md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-6 mt-5 mb-32">
                    {foodList?.map((item: foodDataType, idx) => (
                        <React.Fragment key={idx}>
                            <ProductBox
                                data={item}
                                pickFoodList={pickFoodList}
                                setPickFoodList={setPickFoodList}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </GeneralWrap>
            <PriceBar pickFoodList={pickFoodList} />
        </section>
    );
}
