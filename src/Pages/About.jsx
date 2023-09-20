import HomeLayout from "../components/HomeLayout";

const About = () => {
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-400 font-semibold">
                            Affordable And Healthy Food
                        </h1>
                          <p className="text-xl text-gray-300 ">
                          Besides food delivery, the platform also provides on-demand grocery deliveries under the name Instamart, and same-day package delivery service called Swiggy Genie.
                            </p>  
                    </section>

                    
                </div>
            </div>
        </HomeLayout>
    )
};
export default About;