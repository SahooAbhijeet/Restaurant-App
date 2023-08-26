import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> !!! OOPS !!!
            Something went wrong !!!
            </h1>
            <h1 className="error"> <img src="https://i.pinimg.com/564x/43/19/12/4319122c963c73974fdc71cd0276089d.jpg" alt="Error" /> </h1>
            <h2>{err.status + " : " + err.statusText}</h2>
            <h2>{err.error + " : " + err.statusText}</h2>
        </div>
    )
}

export default Error;