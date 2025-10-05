import PlatesSlider from "@/Component/PlatesSlider";

function Experience() {
  return (
    <div
      id="resume"
      className=" flex flex-col"
    >
      <span className=" font-extrabold text-center lg:mr-auto lg:ml-20 text-[2rem]">
        A glimpse of my work
      </span>
      <PlatesSlider />
    </div>
  );
}

export default Experience;
