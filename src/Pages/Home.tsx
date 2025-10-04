import Hero from "@/Component/Hero";
import StorySection from "@/Component/StorySection";
import MediaSection from "./MediaSection";
import Experience from "./Experience";

function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <StorySection />
      <MediaSection />
      <Experience />
    </div>
  );
}

export default Home;
