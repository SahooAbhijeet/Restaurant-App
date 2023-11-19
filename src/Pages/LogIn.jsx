import HomeLayout from "../components/HomeLayout";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/Slices/authSlice";

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [loginData, setLogInData] = useState({
        email: "",
        password: ""
    });

     function HandleUserInput(e) {
        const {name, value} = e.target;
        setLogInData({
            ...loginData,
            [name]: value
        })
    }


    
        
    async function onlogin(event) {
        event.preventDefault();
        if(!loginData.email || !loginData.password ) {
        toast.error("Please fill all the details");
        return;
    }



    
    // dispatch create account action
    const response =  dispatch(login(loginData));
    

    if(response?.payload?.success)
    navigate("/");

    setLogInData({
        email: "",
        password: ""
    });
}

    return (
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form noValidate onSubmit={onlogin} className="flex flex-col justify-center gap-3  rounded-3xl p-4 text-white shadow-lg w-96">
                    <h1 className="text-center text-2xl font-bold"> LogIN Page </h1>


                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input 
                        type="email"
                        required
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        className="bg-transparent px-2 py-2 border"
                        onChange={HandleUserInput}
                        value={loginData.email}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input 
                        type="password"
                        required
                        name="password"
                        id="password"
                        placeholder="Enter Your password"
                        className="bg-transparent px-2 py-2 border"
                        onChange={HandleUserInput}
                        value={loginData.password}
                        />
                    </div>

                    <button type="Submit" className="mt-2 bg-orange-500 hover:bg-orange-700 transition-all ease-in-out duration-100 rounded-sm py-3 font-semibold text-lg cursor-pointer"> Login </button>

                    <p className="text-center"> Donot have an account <Link to="/signup" className="link text-accent-focus cursor-pointer"> SignUp
                        </Link>
                        </p>
                </form>
            </div>
        </HomeLayout>

    );
}


export default LogIn;