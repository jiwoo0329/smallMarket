import React, { useState, useEffect } from 'react';

import foodList from '../../databases/foodList.json';
import ProductBox from '../../components/ProductBox';
import PriceBar from '../../components/PriceBar';

export default function Home() {
    const [foodArr, setFoodArr] = useState<Array<foodDataType>>(foodList);
    const [pickFoodList, setPickFoodList] = useState<Array<foodDataType>>([]);


  //   useEffect(()=>{
  //     console.log("pickFoodList", pickFoodList)
  // },[pickFoodList])

    return (
        <>
            <main className="flex md:grid flex-col md:flex-row md:w-9/12 lg:grid-cols-4 md:grid-cols-3 flex-wrap gap-4 px-4 py-8 my-0 mx-auto mb-20">
                {/* 박스 */}
                {foodArr?.map((item: foodDataType, idx) => (
                    <React.Fragment key={idx}>
                        <ProductBox data={item} pickFoodList={pickFoodList} setPickFoodList={setPickFoodList} />
                    </React.Fragment>
                ))}
            </main>
            <PriceBar pickFoodList={pickFoodList}/>
        </>
    );
}
