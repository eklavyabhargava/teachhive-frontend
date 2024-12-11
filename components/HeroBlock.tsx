import Image from "next/image";
import logo from "/static/img/education.jpg";

const HeroBlock = () => {
  return (
    <div className="relative w-full h-[100vh] flex flex-col tablet:justify-center items-center bg-cover bg-center">
      <Image
        src={logo}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute -z-10"
      />
      <div className="z-10 text-center tablet:mt-0 mt-[200px]">
        <p className="text-3xl font-semibold tablet:leading-none">
          Empowering Students and Educators to Connect and Grow.
        </p>
        <p className="text-lg tablet:leading-none">
          Access a wide range of courses, find the best tutors, or join top
          institutes.
        </p>
        <div className="flex flex-row justify-center gap-x-3">
          <button className="bg-prime hover:bg-prime-hover text-white px-3 py-2 rounded-full">
            Explore Courses
          </button>
          <button className="bg-secondaryColor hover:bg-secondary-hover text-white px-3 py-2 rounded-full">
            Find a Tutor
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
