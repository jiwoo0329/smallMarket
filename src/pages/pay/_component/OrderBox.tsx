interface PropsType {
    children: React.ReactNode;
    boxTitle: string;
}

export default function OrderBox({ children, boxTitle }: PropsType) {
    return (
        <div className="grid gap-6 bg-white py-10 px-8 rounded-xl shadow-lg">
            <h3 className="w-full lg:w-4/5 my-0 mx-auto text-lg font-semibold">
                {boxTitle}
            </h3>
            {children}
        </div>
    );
}
