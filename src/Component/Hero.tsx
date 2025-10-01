import alaaPhotoroom from "../assets/alaaPhotoroom.png";

function Hero() {
  return (
    <div className="w-[100%] px-15 flex flex-col lg:flex-row items-center">
      <div className=" sm:block text-left flex flex-col justify-center w-[100%]  ">
        <div className=" ml-15 lg:block text-left flex flex-col justify-center lg:w-[600px] ">
          {" "}
          <span className="text-[2rem] font-bold lg:w-[500px]">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <p className="w-full lg:max-w-[600px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium labore possimus consequatur deleniti necessitatibus?
          </p>
        </div>
      </div>

      <img
        src={alaaPhotoroom}
        className=" lg:mr-15 lg:px-5 mb-10 rounded-4xl lg:mt-10 w-full lg:w-[600px] object-cover object-center"
      />
    </div>
  );
}

export default Hero;
