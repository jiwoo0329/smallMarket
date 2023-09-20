import GeneralWrap from '../../components/GeneralWrap';

export default function PayList() {
    return (
        <section>
            <GeneralWrap>
                <div className="mt-32 ">
                    <h2 className="text-2xl text-center font-bold">
                        Payment History📄
                    </h2>
                    <div className="w-full overflow-auto mt-10">
                        <table className="whitespace-nowrap w-full min-w-[400px] break-words h-auto">
                            <thead className="border-b-2">
                                <tr>
                                    <th className="w-[10%] py-1 px-2">No.</th>
                                    <th className="w-[40%] py-1 px-2">Memo</th>
                                    <th className="w-[20%] py-1 px-2">Date/Time</th>
                                    <th className="w-[30%] py-1 px-2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5].map((item, idx) => (
                                    <tr
                                        key={item}
                                        className="hover:bg-gray-200"
                                    >
                                        <td className="text-center py-1 px-2">
                                            {idx + 1}
                                        </td>
                                        <td className=" py-1 px-2">구매한거 메모 내용</td>
                                        <td className="text-center py-1 px-2">
                                            2023.02.12 / 21:34:23
                                        </td>
                                        <td className="text-right py-1 px-2">132000</td>
                                    </tr>
                                ))}
                                <tr className="border-t-2">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="py-1 px-2 font-semibold text-right text-red-500">132000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </GeneralWrap>
        </section>
    );
}
