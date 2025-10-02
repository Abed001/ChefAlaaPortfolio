import Hero from "@/Component/Hero";
import StorySection from "@/Component/StorySection";
import MediaSection from "./MediaSection";

function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <StorySection />
      <MediaSection />
    </div>
  );
}

export default Home;
