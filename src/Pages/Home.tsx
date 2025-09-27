import Hero from "@/Component/Hero";
import StorySection from "@/Component/StorySection";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StorySection />
    </div>
  );
}

export default Home;
