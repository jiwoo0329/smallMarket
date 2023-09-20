import { useState } from 'react';
import GeneralWrap from '../../components/GeneralWrap';

export default function CreateProduct() {

    const [imgUrl, setImgUrl] = useState<any>('');

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = (e.currentTarget.files as FileList)[0];
        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
        }
        reader.onload = () => {
            setImgUrl(reader.result);
        }
    }

    const handleCreateData = (e: any) => {
        e.preventDefault();

        let uuid = crypto.randomUUID();
        const data = {
            id:             uuid,
            productName:    e.target['productName'].value,
            price:          Number(e.target['price'].value),
            likeItTotal:    0,
            description:    e.target['description'].value,
            productUrl:     imgUrl
        }

        console.log("data", data)
    };

    return (
        <section>
            <GeneralWrap>
                <div className="mt-32">
                    <h2 className="text-2xl text-center font-bold">
                        Create Product🧷
                    </h2>
                    <form
                        className="w-full mt-10 grid gap-4"
                        onSubmit={(e) => {
                            handleCreateData(e);
                        }}
                    >
                        <div className="w-full md:w-1/2 my-0 mx-auto">
                            <label htmlFor="productName" className="hidden">
                                productName
                            </label>
                            <input
                                type="text"
                                id="productName"
                                name="productName"
                                placeholder="productName"
                                className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                            ></input>
                        </div>
                        <div className="w-full md:w-1/2  my-0 mx-auto">
                            <label htmlFor="description" className="hidden">
                                description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="description"
                                rows={5}
                                className="w-full py-2 px-4 border rounded-lg focus:shadow-sm focus:shadow-blue-200 focus:outline-none focus:border-blue-400 placeholder:italic placeholder:text-slate-400"
                            ></textarea>
                        </div>
                        <div className="w-full md:w-1/2  my-0 mx-auto">
                            <label htmlFor="price" className="hidden">
                                price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
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
                                accept=".jpg,.jpeg,.png,.gif"
                                id="productUrl"
                                name="productUrl"
                                placeholder="productUrl"
                                className="w-full"
                                onChange={(e)=>onChangeFile(e)}
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
