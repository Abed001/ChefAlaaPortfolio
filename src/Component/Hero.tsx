//import alaaPhotoroom from "../assets/alaaPhotoroom.png";
import newhero from "../assets/newhero.png";

function Hero() {
  return (
    <div className=" w-[100%]  flex flex-col justify-around lg:flex-row items-center">
      <div className="px-4 sm:block text-left flex flex-col justify-center w-[100%]  ">
        <div className=" ml-10 mt-[-50px] lg:block text-left flex flex-col justify-center lg:w-[600px] ">
          {" "}
          <span className="text-[2rem] font-bold lg:w-[500px]">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <p className="tracking-wide w-full lg:max-w-[600px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium labore possimus consequatur deleniti necessitatibus?
          </p>
        </div>
      </div>

      <img
        src={newhero}
        className="  lg:mr-10  mb-10 rounded-4xl lg:w-[700px] lg:mt-10 w-full object-cover object-center"
      />
    </div>
  );
}

export default Hero;
