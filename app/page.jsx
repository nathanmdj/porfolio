import EmailSection from "@components/EmailSection";
import HeroSection from "@components/HeroSection";
import Navbar from "@components/Navbar";
import ProjectSection from "@components/ProjectSection";
import TechStack from "@components/TechStack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto py-4 px-7">
        <Navbar/>
        <div className=" h-dvh max-h-[1100px] min-h-[1100px] md:min-h-[900px]">
          <HeroSection/>
          <TechStack/>
        </div>
        <ProjectSection/>
        <EmailSection/>
      </div>
    </main>
  );
}
