import HomeLayout from "../components/HomeLayout";
import aboutImage from "../assets/img/Screenshot (790).png"; 
import biryani from "../assets/img/Screenshot (794).png";
import tea from "../assets/img/Screenshot (796).png";
import coffee from "../assets/img/Screenshot (797).png";
import rasmalai from "../assets/img/Screenshot (795).png";
import gulabjamun from "../assets/img/Screenshot (792).png";
import pavbhaji from "../assets/img/Screenshot (793).png";
import burger from "../assets/img/Screenshot (791).png";
import CarouselSlide from "../components/CarouselSlide";

const About = () => {

    const items = [
        {
            title: 'Biryani',
            image:  biryani,
            slideNumber: 1
        },
        {
            title: 'Pav-Bhaji',
            image:  pavbhaji,
            slideNumber: 2
        },
        {
            title: 'Burger',
            image:  burger,
            slideNumber: 3
        },
        {
            title: 'Gulab-jamun',
            image:  gulabjamun,
            slideNumber: 4
        },
        {
            title: 'Ras-Malai',
            image:  rasmalai,
            slideNumber: 5
        },
        {
            title: 'Tea',
            image:  tea,
            slideNumber: 6
        },
        {
            title: 'Coffee',
            image:  coffee,
            slideNumber: 7
        },
    ]

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
                        alt=""
                        className="drop-shadow-2xl"
                        src={aboutImage}
                        />
                    </div>

                    
                </div>


                <div className="carousel w-1/2 my-16 m-auto"> 
                        {items && items.map(item => (<CarouselSlide {...item} key={item.slideNumber} totalSlides={items.length} />))}

                {/* <CarouselSlide /> */}




 </div>
 </div>
</HomeLayout>
    )
};
export default About;