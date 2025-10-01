import plate from "../../../plate.json";

function VideoSlider() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-12">
      {/* Left: Text */}
      <div>
        <h2 className="text-[oklch(0.6_0.15_250)] text-4xl font-bold mb-4">
          VIDEOS
        </h2>
        <p className="text-[oklch(0.22_0.01_270)] text-base leading-relaxed">
          My cooking style is expressive, flavorful, and visually rich.
          <br />
          From plating techniques to behind-the-scenes prep, I create videos
          that feel authentic and scroll-stopping.
          <br />
          Whether for tutorials or storytelling—I bring rhythm and soul to every
          frame.
        </p>
      </div>

      {/* Right: Video Grid */}
      <div className="grid grid-cols-2 gap-4">
        {plate.map((video) => (
          <div
            key={video.id}
            className="aspect-video rounded-md overflow-hidden shadow-md"
          >
            <video
              controls
              className="w-full rounded-md aspect-video object-cover"
            >
              <source
                src={video.src}
                type="video/mp4"
              />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoSlider;
