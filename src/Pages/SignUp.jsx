import HomeLayout from "../components/HomeLayout";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../Redux/Slices/authSlice";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState("");

    const [signupData, setSignUpData] = useState({
        fullname: "",
        email: "",
        password: "",
        avatar: ""
    });

     function HandleUserInput(e) {
        const {name, value} = e.target;
        setSignUpData({
            ...signupData,
            [name]: value
        })
    }

    function getImage(event) {
        event.preventDefault();
            // getting the image
            const uploadedImage = event.target.files[0];

            if(uploadedImage) {
                setSignUpData({
                    ...signupData,
                    avatar: uploadedImage
                });
                const fileReader = new FileReader();
                fileReader.readAsDataURL(uploadedImage);
                fileReader.addEventListener("load", function() {
                    console.log(this.result);
                    setPreviewImage(this.result);
                    
                })
            }
        }
    
        
    async function createNewAccount(event) {
        event.preventDefault();
        if(!signupData.email || !signupData.password || !signupData.fullname || !signupData.avatar) {
        toast.error("Please fill all the details");
        return;
    }

    //checking name field length
    if(!signupData.fullname.length > 5) {
        toast.error("Name should be atleast of 5 characters");
        return;
    }

    //checking valid email
    if(!signupData.email.match( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    toast.error("Invalid email id");
    return;
    }

    //checking password validation
    if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&+])[a-zA-Z0-9!@#$%^&+]{6,16}$/)) {
        toast.error("Password should be 6-16 characters long with atleast 8 number and special character");
        return;
    }

    const formData = new FormData();
    formData.append("fullName", signupData.fullname);
    formData.append("email", signupData.email);
    formData.append("password", signupData.password);
    formData.append("avatar", signupData.avatar);
    
    // dispatch create account action
    const response =  dispatch(createAccount(formData));
    console.log(response);

    if(response?.payload?.success)
    navigate("/");

    setSignUpData({
        fullname: "",
        email: "",
        password: "",
        avatar: ""
    });
    setPreviewImage(" ");

    }

    return (
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3  rounded-3xl p-4 text-white shadow-lg w-96">
                    <h1 className="text-center text-2xl font-bold"> Registration Page </h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                    onChange={getImage}
                    className="hidden"
                    type="file"
                    name="image_uploads"
                    id="image_uploads"
                    accept=".png, .jpg, .jpeg, .svg"
                    />

                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="font-semibold">Name</label>
                        <input 
                        type="fullname"
                        required
                        name="fullname"
                        id="fullname"
                        placeholder="Full Name"
                        className="bg-transparent px-2 py-2 border"
                        onChange={HandleUserInput}
                        value={signupData.fullname}
                        />
                    </div>

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
                        value={signupData.email}
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
                        value={signupData.password}
                        />
                    </div>

                    <button type="Submit" className="mt-2 bg-orange-500 hover:bg-orange-700 transition-all ease-in-out duration-100 rounded-sm py-3 font-semibold text-lg cursor-pointer">Create Account</button>

                    <p className="text-center">Already have an account ? <Link to="/login" className="link text-accent-focus cursor-pointer"> Login
                        </Link>
                        </p>
                </form>
            </div>
        </HomeLayout>

    );
}


export default SignUp;