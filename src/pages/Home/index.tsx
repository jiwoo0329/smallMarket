import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import foodList from '../../databases/foodList.json';
import ProductBox from '../../components/ProductBox';

export default function Home() {
    const navigate = useNavigate();
    const [foodArr, setFoodArr] = useState<Array<foodDataType>>(foodList);

    
    return (
        <>
            <main className="flex md:grid flex-col md:flex-row md:w-9/12 lg:grid-cols-4 md:grid-cols-3 flex-wrap gap-4 px-4 py-8 my-0 mx-auto">
                {/* 박스 */}
                {foodArr?.map((item:foodDataType,idx)=>(
                  <React.Fragment key={idx}>
                    <ProductBox data={item}/>
                  </React.Fragment>
                ))}
            </main>
            {/* <div className="App bg-slate-50 w-full h-screen relative border-1">
        <button
          type="button"
          className="top-1/2 left-1/2 bg-white font-bold py-2 px-3 rounded-md absolute -translate-x-1/2 -translate-y-1/2"
          onClick={() => navigate('/payment')}
        >
          결제하기
        </button>
      </div> */}
        </>
    );
}
