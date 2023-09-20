import { Link } from "react-router-dom";
import GeneralWrap from "../../components/GeneralWrap";

export default function PaySuccess() {
    return (
        <section>
            <GeneralWrap>
                <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
                    <p className="text-5xl">결제완료🎉</p>
                    <div className="flex justify-around mt-10 text-gray-400">
                        <Link to="/" className="underline decoration-solid hover:text-gray-300">결제내역 확인</Link>
                        <Link to="/" className="underline decoration-solid hover:text-gray-300">홈으로</Link>
                    </div>
                </div>
            </GeneralWrap>
        </section>
    );
}
