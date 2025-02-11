import { Player } from "@lottiefiles/react-lottie-player";
import newsAnim from "../assets/Animation - news.json";
import { FaUserCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import n1 from "../assets/n1-01.png";
import n2 from "../assets/n2-01.png";
import n3 from "../assets/n3-01.png";
import { toast } from "react-toastify";
const NewsLetter = () => {
  return (
    <div className="my-10">
      <Player
        autoplay
        loop
        src={newsAnim}
        style={{ height: "250px", width: "250px" }}
      ></Player>
      <h1 className="text-center text-primary text-4xl font-bold">
        Insights, News & More
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Stay informed with trends, tips, and exclusive content.
      </p>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-6 max-w-5xl mx-auto">
        <div className="card mx-auto card-compact bg-white w-[300px] shadow-xl flex flex-col justify-between">
          <figure>
            <img src={n1} className="w-[300px] h-[200px] object-cover" alt="" />
          </figure>
          <div className="p-4 space-y-2   ">
            <div className="flex justify-between items-center w-full text-primary-2 text-sm">
              <p className="flex items-center gap-1 ">
                <FaUserCircle /> Karl
              </p>
              <p className="flex items-center gap-1 ">
                <IoIosTime /> 04-02-25
              </p>
            </div>
            <h2 className="text-2xl font-bold">Exclusive Product Updates</h2>

            <p className=" text-secondary-2 ">
              Stay ahead of the curve with the latest product releases,
              upgrades, and innovations. Explore new features and enhancements!
            </p>

            <div className="flex justify-between items-center w-full">
              <button
                onClick={() => {
                  toast("Feature under development!");
                }}
                className="btn-outline btn btn-sm border-primary text-primary border-2"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="card mx-auto card-compact bg-white w-[300px] shadow-xl flex flex-col justify-between">
          <figure>
            <img src={n2} className="w-[300px] h-[200px] object-cover" alt="" />
          </figure>
          <div className="p-4 space-y-2   ">
            <div className="flex justify-between items-center w-full text-primary-2 text-sm">
              <p className="flex items-center gap-1 ">
                <FaUserCircle /> Smith
              </p>
              <p className="flex items-center gap-1 ">
                <IoIosTime /> 05-02-25
              </p>
            </div>
            <h2 className="text-2xl font-bold">Special Offers & Discounts</h2>

            <p className=" text-secondary-2 ">
              Get access to exclusive deals, limited-time promotions, and
              subscriber-only discounts on our products. Don't miss out on great
              savings!
            </p>

            <div className="flex justify-between items-center w-full">
              <button
                onClick={() => {
                  toast("Feature under development!");
                }}
                className="btn-outline btn btn-sm border-primary text-primary border-2"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="card mx-auto card-compact bg-white w-[300px] shadow-xl flex flex-col justify-between">
          <figure>
            <img src={n3} className="w-[300px] h-[200px] object-cover" alt="" />
          </figure>
          <div className="p-4 space-y-2   ">
            <div className="flex justify-between items-center w-full text-primary-2 text-sm">
              <p className="flex items-center gap-1 ">
                <FaUserCircle /> John
              </p>
              <p className="flex items-center gap-1 ">
                <IoIosTime /> 02-02-25
              </p>
            </div>
            <h2 className="text-2xl font-bold">Expert Tips & Insights</h2>

            <p className=" text-secondary-2 ">
              Learn how to make the most of our products with expert
              guides,knowledge, best practices, and insider knowledge tailored
              just for you.
            </p>

            <div className="flex justify-between items-center w-full">
              <button
                onClick={() => {
                  toast("Feature under development!");
                }}
                className="btn-outline btn btn-sm border-primary text-primary border-2"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
