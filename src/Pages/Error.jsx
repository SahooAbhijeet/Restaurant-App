import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
<div className="h-screen w-full flkex flex-col justify-center items-center bg-violet-950">
            <h1 className="flex flex-col text-9xl font-extrabold text-white justify-items-center">
                404
            </h1>
            <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
                PageNotFound ...
            </div>
        </div>
    )
}

export default Error;