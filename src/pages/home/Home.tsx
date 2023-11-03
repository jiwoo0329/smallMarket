import { Link } from 'react-router-dom';
import GeneralWrap from '../../components/GeneralWrap';

export default function Home() {
    return (
        <>
            <section className="relative">
                <div
                    className="h-screen w-full bg-cover before:content-[''] before:opacity-40 before:bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0"
                    style={{
                        backgroundImage: `url(/assets/images/market.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="relative text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/4 text-white">
                        <h1 className="px-4 text-6xl sm:text-8xl font-bold font-HappinessSansTitle">
                            Small Market
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 mt-10 inline-block animate-bounce"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </div>
            </section>
            <section>
                <GeneralWrap>
                    <div className="text-center py-10 sm:py-14">
                        <h2 className="hidden">소개</h2>
                        <div className="sm:text-xl z-50">
                            환영합니다 고객님,
                            <br />
                            <span className="font-semibold text-blue-500">
                                믿고 구매할 수 있는 제품
                            </span>
                            <br />
                            찾고 계신가요?
                        </div>
                        <img
                            src="/assets/images/check_market.png"
                            alt="이미지"
                            className="w-48 md:w-auto md:max-w-[50%] my-0 mx-auto"
                        />
                    </div>
                </GeneralWrap>
            </section>
            <section className="relative pt-10 sm:pt-14 after:content-[''] after:block after:bg-amber-600/50 after:w-full after:h-6 after:md:h-14 after:lg:h-16 after:bottom-5">
                <GeneralWrap>
                    <p className="font-semibold text-3xl md:text-6xl mb-4">
                        찾.았.다
                        <br />
                        Small Market
                    </p>
                    <Link
                        to="/product/list"
                        className="mb-4 sm:mb-14 px-3 py-1 bg-blue-500 text-white rounded"
                    >
                        상품 리스트
                    </Link>
                    <img
                        src="/assets/images/shoppingGirl.png"
                        alt="쇼핑하는여자"
                        className="-mb-4 md:-mb-10 w-48 md:w-auto md:max-w-[50%] my-0 mx-auto md:mr-0 z-20"
                    />
                </GeneralWrap>
            </section>
        </>
    );
}
