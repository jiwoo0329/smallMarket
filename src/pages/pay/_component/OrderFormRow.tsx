interface PropsType {
    children: React.ReactNode;
    otherClassNames: string;
}

export default function OrderFormRow({ children, otherClassNames }: PropsType) {
    return (
        <div className={`sm:flex gap-2 space-y-1 w-full md:w-4/5 lg:w-2/3 my-0 mx-auto ${otherClassNames}`}>
            {children}
        </div>
    );
}
