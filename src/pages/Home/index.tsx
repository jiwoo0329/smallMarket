import React, { useState, useEffect } from 'react';

import foodList from '../../databases/foodList.json';
import ProductBox from '../../components/ProductBox';
import PriceBar from '../../components/PriceBar';
import GeneralWrap from '../../components/GeneralWrap';

import { fireStore } from '../../lib/Firebase';

export default function Home() {
    const [foodArr, setFoodArr] = useState<Array<foodDataType>>(foodList);
    const [pickFoodList, setPickFoodList] = useState<Array<foodDataType>>([]);

      useEffect(()=>{
        console.log("fireStore", fireStore)
    },[pickFoodList])

    return (
        <section>
            <GeneralWrap>
                <div className="flex md:grid flex-col md:flex-row md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-6 mt-5 mb-32">
                    {foodArr?.map((item: foodDataType, idx) => (
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
