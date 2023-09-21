import HomeLayout from "../components/HomeLayout";
import aboutImage from "../assets/img/Screenshot (790).png"; 
import biryani from "../assets/img/Screenshot (794).png";
import tea from "../assets/img/Screenshot (796).png";
import coffee from "../assets/img/Screenshot (797).png";
import rasmalai from "../assets/img/Screenshot (795).png";
import gulabjamun from "../assets/img/Screenshot (792).png";
import pavbhaji from "../assets/img/Screenshot (793).png";
import burger from "../assets/img/Screenshot (791).png";

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
                        alt=""
                        className="drop-shadow-2xl"
                        src={aboutImage}
                        />
                    </div>

                    
                </div>


                <div className="carousel w-1/2 my-16 m-auto">                    
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={biryani} className="w-50 rounded-full border-2 border-gray-950" />
                           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                               <a href="#slide7" className="btn btn-circle">❮</a> 
                               <a href="#slide2" className="btn btn-circle">❯</a>
                          </div>
                        </div> 
                    </div>


                    <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                    <img src={pavbhaji} className="w-50 rounded-full border-2 border-gray-950" />
                       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                           <a href="#slide1" className="btn btn-circle">❮</a> 
                           <a href="#slide3" className="btn btn-circle">❯</a>
                       </div>
                  </div>
              </div> 



             <div id="slide3" className="carousel-item relative w-full">
             <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
            <img src={burger} className="w-50 rounded-full border-2 border-gray-950" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
         </div>
    </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={gulabjamun} className="w-50 rounded-full border-2 border-gray-950" />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       <a href="#slide3" className="btn btn-circle">❮</a> 
       <a href="#slide5" className="btn btn-circle">❯</a>
       </div>
    </div>
   </div>


  <div id="slide5" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={rasmalai} className="w-50 rounded-full border-2 border-gray-950" />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       <a href="#slide4" className="btn btn-circle">❮</a> 
       <a href="#slide6" className="btn btn-circle">❯</a>
       </div>
    </div>
   </div>


  <div id="slide6" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={tea} className="w-50 rounded-full border-2 border-gray-950" />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       <a href="#slide5" className="btn btn-circle">❮</a> 
       <a href="#slide7" className="btn btn-circle">❯</a>
       </div>
    </div>
   </div>


  <div id="slide7" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={coffee} className="w-50 rounded-full border-2 border-gray-950" />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       <a href="#slide6" className="btn btn-circle">❮</a> 
       <a href="#slide1" className="btn btn-circle">❯</a>
       </div>
    </div>
   </div>


 </div>
 </div>
</HomeLayout>
    )
};
export default About;