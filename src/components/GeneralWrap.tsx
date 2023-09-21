import { ReactNode } from 'react';

interface PropsType {
    children: ReactNode;
}

export default function GeneralWrap({ children }: PropsType) {
    return (
        <div className="max-w-[1200px] my-0 mx-auto px-4">
            {children}
        </div>
    );
}
