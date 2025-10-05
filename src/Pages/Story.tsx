import SliderComponent from "../Component/SliderComponent";

function Story() {
  return (
    <div
      id="story"
      className="w-[100%] flex flex-col lg:flex-row-reverse justify-evenly items-center"
    >
      <div className=" sm-block px-4 gap-y-5 text-left flex flex-col justify-center   ">
        <div className=" lg:block  lg:px-0 gap-y-5 text-left flex flex-col justify-center ">
          {" "}
          <span className="text-[2rem] font-bold lg:w-[500px]">
            Lorem ipsum dolor sit amet <br />
            consectetur .
          </span>
          <p className="tracking-wide w-full lg:w-[500px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium labore possimus consequatur deleniti necessitatibus?
            Assumenda sed temporibus totam possimus dolorem! Tempore, placeat?
            Eaque corrupti perferendis sed iusto laudantium aliquam numquam.
            Iusto dignissimos recusandae aut alias reiciendis accusantium non
            nobis saepe hic possimus modi ea, qui quisquam, maiores eos
            voluptates! Consequuntur voluptates cum reiciendis ullam, molestias
            excepturi tenetur consectetur modi iste!
          </p>
        </div>
      </div>
      <div className="  md:px-4 mb-10 rounded-4xl lg:mt-10 w-full lg:w-[500px]">
        <SliderComponent />
      </div>
    </div>
  );
}

export default Story;
