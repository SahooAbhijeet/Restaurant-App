import { useState } from "react";

const Section = ({title, description}) => {
const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="border border-black p-3 m-3">
        <h2 className="font-bold text-2xl">{title}</h2>
        {
            isVisible ? (
                <button 
                onClick={() => setIsVisible(false)}
                className="cursor-pointer underline-offset-2"> 
                Hide 
                </button>
            ) : (
                <button 
                onClick={() => setIsVisible(true)}
                className="cursor-pointer underline-offset-2"> 
                Show 
                </button>
            )  
        }
        {isVisible && <p>{description}</p>}
        </div>
    )
};


const Instamart = () => {
    return (
        <div>
           <h1 className="text-3xl p-3 m-3 font-bold"> INSTAMART </h1>
           <Section 
           title = {"About Instamart"}
           description = {
            "Discover the ultimate convenience with Swiggy Instamart! Say goodbye to long queues and tedious grocery shopping trips. With Swiggy Instamart, you can order your favorite groceries and essentials with just a few taps on your smartphone. Enjoy lightning-fast delivery, a wide selection of products, and the freshest ingredients, all delivered to your doorstep in no timeIntroducing Swiggy Instamart, your one-stop solution for all your grocery needs. Experience the future of grocery shopping with Swiggy's super-fast delivery service. Whether it's fresh produce, pantry staples, or household essentials, Swiggy Instamart has you covered. Shop hassle-free and enjoy the convenience of same-day delivery right at your doorstep.Shop smart with Swiggy Instamart! Explore a world of groceries and daily essentials at your fingertips. Our instant delivery service ensures you get what you need, when you need it. Choose from a wide range of products and enjoy the ease of online grocery shopping like never before. Try Swiggy Instamart today for a seamless and convenient experience.Swiggy Instamart is your one-stop destination for quick and hassle-free grocery shopping. Say goodbye to long queues and enjoy the convenience of having fresh produce, pantry staples, and daily essentials delivered straight to your doorstep. With Swiggy Instamart, you can shop instantly and effortlessly, making your life easier, one delivery at a time. Discover the future of grocery shopping with Swiggy Instamart. Our platform offers an extensive range of products, lightning-fast delivery, and a user-friendly experience, all designed to meet your daily needs. Experience the convenience of instant grocery delivery and make your life simpler with Swiggy Instamart.Swiggy Instamart: Your Instant Grocery Shopping Companion. Whether it's groceries, household essentials, or fresh produce, we've got you covered. With Swiggy Instamart, you can order anytime, anywhere, and enjoy prompt deliveries that fit seamlessly into your busy lifestyle. Experience the ultimate convenience today!"
        }
        />

           <Section 
           title = {"Team Instamart"}
           description = {
            "At Swiggy Instamart, we take pride in our passionate and hardworking team. Our dedicated squad works tirelessly to ensure that your grocery and essential needs are met with precision and care. From the folks who source the freshest ingredients to the delivery heroes who bring them to your doorstep, every member of our team is committed to providing you with a seamless and convenient shopping experience.The heart and soul of Swiggy Instamart is our incredible team. From product selection to packing and delivering your orders, our team members are the unsung heroes who make it all happen. We are a diverse group of individuals united by a common goal – to make your grocery shopping experience as effortless and enjoyable as possible. Meet the faces behind Swiggy Instamart and discover the people who work tirelessly to serve you.Swiggy Instamart is more than just a delivery service; it's a team of dedicated professionals working together to bring you the freshest groceries and essentials. Our team is comprised of experts in sourcing, logistics, and customer service, all striving to provide you with the best shopping experience. Get to know the faces behind Swiggy Instamart and experience the commitment and passion that drives us to serve you better every day.At Swiggy Instamart, we take pride in our talented and dedicated team of professionals who work tirelessly to bring you the best grocery delivery experience. Our team is made up of passionate individuals who are committed to ensuring that you receive fresh, high-quality groceries and essentials right at your doorstep. From our tech-savvy developers to our efficient delivery partners, every member of the Swiggy Instamart team plays a crucial role in making your shopping experience seamless and convenient.The heart and soul of Swiggy Instamart lie in our incredible team. From our expert buyers who carefully select the finest products to our efficient warehouse staff who ensure everything is in order, our team is dedicated to delivering excellence with every order. Our delivery partners are the backbone of our service, making sure your groceries reach you quickly and safely. Meet the people who work tirelessly behind the scenes to make Swiggy Instamart your go-to grocery delivery service. Swiggy Instamart is powered by a dynamic and diverse team of individuals who are passionate about redefining the grocery shopping experience. From our customer support representatives who are ready to assist you 24/7 to our data scientists who optimize the user experience, each member of our team is committed to making your life easier. Get to know the faces and stories behind Swiggy Instamart, and discover the people who make it all possible."
        }
        />


           <Section 
           title = {"Careers"}
           description = {
            "Are you passionate about revolutionizing the way people shop for groceries and essentials? Join the Swiggy Instamart team and be a part of our mission to make grocery shopping convenient, quick, and hassle-free. We're constantly on the lookout for talented individuals who are eager to innovate and drive change in the industry. Explore our career opportunities and embark on an exciting journey with Swiggy Instamart. At Swiggy Instamart, we believe that great people drive great success. Join our dynamic team and become a part of the force behind one of the fastest-growing online grocery delivery platforms. We offer a range of career opportunities in areas such as technology, logistics, operations, and more. If you're looking for a challenging and rewarding career, explore what Swiggy Instamart has to offer.Swiggy Instamart is not just a place to work; it's a place to grow and thrive. Our team is filled with passionate and driven individuals who are dedicated to making a difference in the world of online grocery delivery. Whether you're an experienced professional or just starting your career, we have opportunities that can help you reach your full potential. Discover a world of possibilities with Swiggy Instamart careers and be a part of our exciting journey.At Swiggy Instamart, we take pride in our passionate and hardworking team. Our dedicated squad works tirelessly to ensure that your grocery and essential needs are met with precision and care. From the folks who source the freshest ingredients to the delivery heroes who bring them to your doorstep, every member of our team is committed to providing you with a seamless and convenient shopping experience.The heart and soul of Swiggy Instamart is our incredible team. From product selection to packing and delivering your orders, our team members are the unsung heroes who make it all happen. We are a diverse group of individuals united by a common goal – to make your grocery shopping experience as effortless and enjoyable as possible. Meet the faces behind Swiggy Instamart and discover the people who work tirelessly to serve you. Are you ready to be part of a dynamic team that's changing the way people shop for groceries? Swiggy Instamart is on the lookout for talented individuals who are passionate about innovation and dedicated to delivering excellence. Explore our range of career opportunities and embark on a rewarding journey with us. Join Swiggy Instamart and be a part of the future of grocery shopping.Swiggy Instamart is not just a service; it's a thriving community of professionals who are reshaping the grocery industry. If you're looking for a career that combines innovation, customer satisfaction, and growth, then look no further. Explore the exciting career opportunities at Swiggy Instamart and be a part of a team that's making a difference in people's lives every day.At Swiggy Instamart, we believe in the power of talent and dedication. Join our team and be a part of an organization that values innovation, teamwork, and customer satisfaction. We offer diverse career paths in various fields, from operations and technology to marketing and customer service. Take the next step in your career and discover the exciting opportunities waiting for you at Swiggy Instamart."
        }
        />


        </div>
    );
};

export default Instamart;