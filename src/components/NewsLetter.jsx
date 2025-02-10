import { Player } from "@lottiefiles/react-lottie-player";

import newsAnim from "../assets/Animation - news.json";
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
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-6 max-w-5xl mx-auto"></section>
    </div>
  );
};

export default NewsLetter;
