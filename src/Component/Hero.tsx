//import alaaPhotoroom from "../assets/alaaPhotoroom.png";
import newhero from "../assets/newhero.png";

function Hero() {
  return (
    <div
      id="home"
      className=" w-[100%] mt-5 md:mt-5 lg:mt-0  flex flex-col justify-evenly lg:flex-row items-center"
    >
      <div className="px-4 sm:block text-left flex flex-col justify-center w-[100%]  ">
        <div className=" lg:ml-20 lg:mt-[-50px] lg:block text-left flex flex-col justify-center lg:w-[500px] ">
          {" "}
          <span className="text-[2rem] font-bold lg:w-[500px]">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <p className=" tracking-wide w-full lg:w-[500px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium labore possimus consequatur deleniti necessitatibus?
          </p>
        </div>
      </div>

      <img
        src={newhero}
        className=" lg:mr-20 mb-10 rounded-4xl lg:w-[500px] lg:mt-10 w-full object-cover object-center"
      />
    </div>
  );
}

export default Hero;
