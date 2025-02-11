import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import chatAnim from "../assets/Animation - chat.json"
const Reviews = () => {
  const stories = [
    {
      id: 1,
      name: "Tom Jerry",
      service: "Premium Plan User",
      image: "https://i.ibb.co.com/y8rxJHK/pr1-01.png",
      story:
        "The Premium Plan has exceeded my expectations. The service is fast, the support team is responsive, and the features are top-notch. Worth every penny!",
    },
    {
      id: 2,
      name: "John Cena",
      service: "Basic Plan User",
      image: "https://i.ibb.co.com/rHcsrQg/pr2-01.png",
      story:
        "The Basic Plan is good for individuals starting out, it’s a solid value for the price.Love the unlimited product recommendation",
    },
    {
      id: 3,
      name: "Johnson",
      service: "Premium Plan User",
      image: "https://i.ibb.co.com/jV9zMJZ/pr3-01.png",
      story:
        "I switched to the Premium Plan for my business and it’s been amazing. The added features help streamline operations, and the customer support has been excellent.",
    },
  ];
  return (
    <div className="mt-16 mb-10">
      <Player
        autoplay
        loop
        src={chatAnim}
        style={{ height: "230px", width: "230px" }}
      ></Player>
      <h1 className="text-center text-primary text-4xl font-bold">
        What Our Users Say
      </h1>
      <p className="md:w-3/4 mx-auto text-center my-2">
        Discover why users love our service plans and how they've benefited from
        them.
      </p>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-6 max-w-5xl mx-auto">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-base-200 rounded-xl clip-path-sharp-corner  shadow-lg  overflow-hidden mx-auto hover:shadow-xl transition-shadow duration-300 max-w-[304px]"
          >
            <div className="flex items-center gap-3 bg-primary-2 p-4">
              <img
                src={story.image}
                alt={story.name}
                className="rounded-full w-[60px] h-[60px] object-cover"
              />
              <div>
                <h3 className="text-xl text-black font-semibold ">{story.name}</h3>
                <p className="text-sm font-bold text-primary ">
                  {story.service}
                </p>
              </div>
            </div>

            <p className=" p-4 text-lg ">
              <FaQuoteLeft className="text-primary" />
              {story.story}
              <FaQuoteRight className="ml-auto text-primary" />
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reviews;
