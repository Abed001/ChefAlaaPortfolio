import chefAlaa from "../assets/chefAlaa.png";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center ">
      <div className=" p-5 gap-y-5 text-left flex flex-col justify-center w-[100%] lg:w-[50%] lg:mt-[150px] lg:px-30 ">
        {" "}
        <span className="text-[2rem] font-bold lg:w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        </span>
        <p>
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

      <img
        src={chefAlaa}
        className="lg:mt-10 w-full lg:max-w-[500px] object-cover object-center"
      />
    </div>
  );
}

export default Hero;
