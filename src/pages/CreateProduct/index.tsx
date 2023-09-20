import { useState } from 'react';
import GeneralWrap from '../../components/GeneralWrap';

import { fireStore, fireStorage } from '../../lib/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

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
        };
    };

    const handleCreateData = async (e: any) => {
        e.preventDefault();

        // firebase 이미지 저장
        const file = e.target['productUrl'].files[0];
        const storageRef = ref(fireStorage, 'productImg/' + file.name);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // 업로드 중
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (err) => {
                // 에러 발생
                console.log('err', err);
            },
            () => {
                // 성공
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        console.log('업로드된 경로는', downloadURL);

                        // firebase 데이터 추가 (id는 자동 생성됨)
                        let uuid = crypto.randomUUID();
                        const data = {
                            id: uuid,
                            productName: e.target['productName'].value,
                            price: Number(e.target['price'].value),
                            likeItTotal: 0,
                            description: e.target['description'].value,
                            productUrl: downloadURL,
                        };
                        addDoc(collection(fireStore, 'product'), data)
                            .then((res) => {
                                console.log('res', res);
                            })
                            .catch((err) => {
                                console.log('err', err);
                            });
                    })
            }
        );

        // await uploadBytes(storageRef, file)
        //     .then((snapshot) => {
        //         console.log('snapshot', snapshot);
        //     })
        //     .catch((err) => {
        //         console.log('err', err);
        //     });
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
                                onChange={(e) => onChangeFile(e)}
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
