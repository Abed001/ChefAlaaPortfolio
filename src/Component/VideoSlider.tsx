//import videos from "../../plate.json";
import video1 from "../../public/VideoAlbum/video1.mp4";
import video2 from "../../public/VideoAlbum/video2.mp4";
import video3 from "../../public/VideoAlbum/video3.mp4";
import video4 from "../../public/VideoAlbum/video4.mp4";
import video5 from "../../public/VideoAlbum/video5.mp4";
import video6 from "../../public/VideoAlbum/video6.mp4";

import Video from "./Video";

function VideoSlider() {
  return (
    <section className="w-[100%] mx-auto  flex flex-col lg:flex-row justify-between items-center lg:mt-10">
      {/* Left: Text */}
      <div className="sm:block px-4 mb-5  tracking-wide  text-left flex flex-col">
        <div className="lg:block mb-5 ml-20 tracking-wide lg:mb-0 lg:mt-[-100px]  text-left flex flex-col lg:w-[350px]">
          <p className="text-[oklch(0.22_0.01_270)] text-base leading-relaxed">
            <span className="font-bold text-[2rem]">My cooking style</span>{" "}
            <br />
            is expressive, flavorful, and visually rich.
            <br />
            From plating techniques to behind-the-scenes prep, I create videos
            that feel authentic and scroll-stopping.
            <br />
            Whether for tutorials or storytelling—I bring rhythm and soul to
            every frame.
          </p>
        </div>
      </div>

      {/* //////////////*/}

      <section className=" lg:mr-20 lg:max-w-[50%] flex">
        {/* //////////////*/}

        <div className="m-[2px] w-full  flex flex-col ">
          <div className="mt-20 rounded-4xl overflow-hidden shadow-md h-[300px]">
            <Video url={video1} />
          </div>
          <div className="mt-[2px] rounded-4xl overflow-hidden shadow-md h-[300px]">
            <Video url={video2} />
          </div>
        </div>

        {/* //////////////*/}

        <div className="m-[2px] w-full  flex flex-col ">
          <div className=" rounded-4xl overflow-hidden shadow-md ">
            <Video url={video3} />
          </div>
          <div className="mt-[2px] rounded-4xl overflow-hidden shadow-md aspect-ratio">
            <Video url={video4} />
          </div>
        </div>

        {/* //////////////*/}

        <div className=" m-[2px]  w-full  flex flex-col ">
          <div className="mt-20 rounded-4xl overflow-hidden shadow-md h-[300px]">
            <Video url={video5} />
          </div>
          <div className=" mt-[2px] rounded-4xl overflow-hidden shadow-md h-[300px]">
            <Video url={video6} />
          </div>
        </div>
      </section>

      {/* Right: Video Grid
      <div className=" sm:block  mb-10 w-full lg:max-w-[50%] grid grid-cols-1 md:grid-cols-2  gap-2 ">
        {videos.map((video, index) => (
          <div
            key={index}
            className=" rounded-4xl overflow-hidden shadow-md aspect-ratio"
          >
            <video
              controls
              autoPlay
              className="w-full h-full object-cover object-center rounded-4xl"
            >
              <source
                src={video.src}
                type="video/mp4"
              />
            </video>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default VideoSlider;
