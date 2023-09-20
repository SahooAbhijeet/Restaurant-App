import { Link } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";

const HomePage = () => {

    return (
        <HomeLayout>
        <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
            <h1 className="text-5xl font font-semibold">
                Find Out Best
                <span className="text-yellow-500 font-bold">
                    Restaurants
                </span>
            </h1>
            <p className="text-xl text-orange-700 font-bold">
            Swiggy Karo, Phir Jo Chahe Karo!
            </p>

            <div className="space-x-8">
                <Link to="/restaurants">
                    <button className="bg-orange-700 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-orange-900 transition-all ease-in-out duration-300">
                        Explore Restaurants
                    </button>
                </Link>
            </div>
        </div>
    </HomeLayout>
    )
}
export default HomePage;