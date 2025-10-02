import videos from "../../../plate.json";

function VideoSlider() {
  return (
    <section className="w-[100%] mx-auto border flex flex-col lg:flex-row justify-between items-center lg:mt-10">
      {/* Left: Text */}
      <div className="px-4 mb-5 tracking-wide lg:mb-0 lg:ml-12 lg:mt-[-100px] border text-left flex flex-col lg:w-[350px]">
        <p className="text-[oklch(0.22_0.01_270)] text-base leading-relaxed">
          <span className="font-bold text-[2rem]">My cooking style</span> <br />
          is expressive, flavorful, and visually rich.
          <br />
          From plating techniques to behind-the-scenes prep, I create videos
          that feel authentic and scroll-stopping.
          <br />
          Whether for tutorials or storytelling—I bring rhythm and soul to every
          frame.
        </p>
      </div>

      {/* Right: Video Grid */}
      <div className="  mb-10 w-full lg:max-w-[50%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className=" rounded-4xl overflow-hidden shadow-md aspect-video"
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
      </div>
    </section>
  );
}

export default VideoSlider;
