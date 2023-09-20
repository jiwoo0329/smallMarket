import { Link } from 'react-router-dom';
import GeneralWrap from '../../components/GeneralWrap';

export default function PaySuccess() {
    return (
        <section>
            <GeneralWrap>
                <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
                    <p className="text-5xl">Success🎉</p>
                    <div className="flex justify-around mt-10 text-gray-400">
                        <Link
                            to="/pay/list"
                            className="underline decoration-solid hover:text-gray-300"
                        >
                            Pay History
                        </Link>
                        <Link
                            to="/"
                            className="underline decoration-solid hover:text-gray-300"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </GeneralWrap>
        </section>
    );
}
