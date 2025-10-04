type VideoCardProps = {
  url: string;
};

function Video({ url }: VideoCardProps) {
  return (
    <div>
      <video
        controls
        autoPlay={false}
        className="w-full h-full object-cover object-center rounded-4xl"
      >
        <source
          src={url}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Video;
