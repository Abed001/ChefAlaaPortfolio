//import nuclearalaa from "../assets/nuclearalaa.jpg";
import Button from "react-bootstrap/Button";
import SliderComponent from "./SliderComponent";

function StorySection() {
  return (
    <div>
      <div className=" mb-10 flex flex-col lg:flex-row justify-center ">
        <div className=" px-5 gap-y-5 text-left flex flex-col justify-center w-[100%] lg:w-[50%] lg:px-30 ">
          {" "}
          <span className=" font-bold lg:w-[500px]">
            <span className="text-[2rem]">Alaa Zeidan</span> <br />{" "}
            <span className="text-[2rem]">Story</span>
          </span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium labore possimus consequatur deleniti necessitatibus?
            Assumenda sed temporibus totam possimus dolorem! Tempore, placeat?
            Eaque corrupti perferendis sed iusto laudantium aliquam numquam.
            Iusto dignissimos recusandae aut alias reiciendis accusantium non
            nobis saepe hic possimus modi ea, qui quisquam, maiores eos
            voluptates! Consequuntur voluptates cum reiciendis ullam, molestias
            excepturi tenetur consectetur modi iste!
          </p>
          <Button
            className="w-[100px]"
            variant="dark"
          >
            Story
          </Button>
        </div>
        <SliderComponent />
        {/*<img
          src={nuclearalaa}
          className="mb-10 rounded-full lg:mt-10 w-full lg:w-[600px] object-cover object-center"
        />*/}
      </div>
    </div>
  );
}

export default StorySection;
