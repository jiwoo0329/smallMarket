import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="App bg-slate-50 w-screen h-screen relative border-1">
        <button
          type="button"
          className="top-1/2 left-1/2 bg-white font-bold py-2 px-3 rounded-md absolute -translate-x-1/2 -translate-y-1/2"
          onClick={() => navigate('/payment')}
        >
          결제하기
        </button>
      </div>
    </>
  );
}
