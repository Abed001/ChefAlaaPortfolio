//import nuclearalaa from "../assets/nuclearalaa.jpg";
//import Button from "react-bootstrap/Button";
import SliderComponent from "./SliderComponent";

function StorySection() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className=" lg:ml-15 px-15 gap-y-5 text-left flex flex-col justify-center w-[100%]  ">
        {" "}
        <span className="text-[2rem] font-bold lg:w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        </span>
        <p className="w-full lg:w-[600px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          labore possimus consequatur deleniti necessitatibus? Assumenda sed
          temporibus totam possimus dolorem! Tempore, placeat? Eaque corrupti
          perferendis sed iusto laudantium aliquam numquam. Iusto dignissimos
          recusandae aut alias reiciendis accusantium non nobis saepe hic
          possimus modi ea, qui quisquam, maiores eos voluptates! Consequuntur
          voluptates cum reiciendis ullam, molestias excepturi tenetur
          consectetur modi iste!
        </p>
      </div>
      <div className=" lg:mr-15 mb-10 rounded-4xl lg:px-5 lg:mt-10 w-full lg:w-[500px]">
        <SliderComponent />
      </div>
    </div>
  );
}

export default StorySection;
