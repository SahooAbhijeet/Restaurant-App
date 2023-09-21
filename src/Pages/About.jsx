import HomeLayout from "../components/HomeLayout";
import aboutImage from "../assets/img/Screenshot (790).png"; 
import { items } from "../config";
import CarouselSlide from "../components/CarouselSlide";

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


                    <div className="w-1/2">
                        <img 
                        id="test1"
                        style={{
                            filter: "drop-shadow(0px 0px 10px rgb(0,0,0);"
                        }}
                        alt="aboutImage"
                        className="drop-shadow-2xl"
                        src={aboutImage}
                        />
                    </div>
                </div>


                <div className="carousel w-1/2 my-16 m-auto"> 
                        {items && items.map(item => (<CarouselSlide {...item} key={item.slideNumber} totalSlides={items.length} 
                        />))}
 </div>
 </div>
</HomeLayout>
    );
}
export default About;