import GeneralWrap from '../../components/GeneralWrap';

export default function CreateProduct() {
    return (
        <section>
            <GeneralWrap>
                <div className="mt-32">
                    <h2 className="text-2xl text-center font-bold">
                        Create Product🧷
                    </h2>
                    <form className="w-full mt-10 grid gap-4">
                        <div className="w-full md:w-1/2 my-0 mx-auto">
                            <label htmlFor="productName" className="hidden">
                                productName
                            </label>
                            <input
                                type="text"
                                id="productName"
                                placeholder="productName"
                                className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                            ></input>
                        </div>
                        <div className="w-full md:w-1/2  my-0 mx-auto">
                            <label htmlFor="description" className="hidden">
                                description
                            </label>
                            <input
                                type="text"
                                id="description"
                                placeholder="description"
                                className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                            ></input>
                        </div>
                        <div className="w-full md:w-1/2  my-0 mx-auto">
                            <label htmlFor="price" className="hidden">
                                price
                            </label>
                            <input
                                type="text"
                                id="price"
                                placeholder="price"
                                className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                            ></input>
                        </div>
                        <div className="w-full md:w-1/2  my-0 mx-auto">
                            <label htmlFor="productUrl" className="hidden">
                                file
                            </label>
                            <input
                                type="file"
                                id="productUrl"
                                placeholder="productUrl"
                                className="w-full"
                            ></input>
                        </div>

                        <button
                            type="submit"
                            className="my-0 mx-auto sm:max-w-[20%] py-2 px-4 mt-10 border bg-blue-200 rounded break-all"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </GeneralWrap>
        </section>
    );
}
