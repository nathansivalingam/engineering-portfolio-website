import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-6 xl:px-60">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-1">
            <span className="text-sm xl:text-base text-black/70">
              Mechanical Engineering and Computer Science Student
            </span>

            <h1 className="font-bold leading-tight mt-2 mb-6
                           text-3xl sm:text-4xl xl:text-5xl">
              Hello I'm{" "}
              <br className="hidden xl:block" />
              <span>Nathan Sivalingam</span>
            </h1>

            <p className="max-w-full xl:max-w-[500px] mb-6
                          text-base sm:text-lg text-black/80">
              I am in my final year of university. I am studying Mechanical Engineering and Computer Science at UNSW. I am also working as an Academic Demonstrator and Research Assistant at UNSW. I really like simple sentences.
            </p>
            
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4">
              <Button variant="outline" asChild>
                <a
                  href="/assets/nathan_sivalingam_cv.pdf"
                  download
                  className="uppercase flex items-center gap-2
                            border-black/40
                            transition-colors duration-300
                            hover:bg-black hover:text-white"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <Social 
                containerStyles="flex gap-4"
                iconStyles="w-9 h-9 border border-black/40 rounded-md
                            flex justify-center items-center text-black text-xl
                            transition-colors duration-300
                            hover:bg-black hover:text-white"
              />
            </div>
          </div>
          
          {/* photo */}
          <div className="w-full max-w-[280px] xl:max-w-[400px]
                          mt-8 mb-8 xl:mt-0 xl:mb-0
                          order-1 xl:order-2
                          flex justify-center items-center">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
