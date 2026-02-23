import { memo } from "react";

interface Props {
    subTitle: string;

    callMyAPI: () => void;
}

export const MySubTitle = memo(({ subTitle, callMyAPI }: Props) => {
    console.log("My SubTitle re-render");
    return (
        <>
            <h1 className="text-2xl font-bold">{subTitle}</h1>

            <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={callMyAPI}
            >
                Llamar a función
            </button>
        </>
    )
})
