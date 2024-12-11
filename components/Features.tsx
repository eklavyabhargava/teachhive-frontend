import Slider from "react-slick";
import bookMagnifying from "../static/img/features/book-magnifying.png";
import clipboardCalender from "../static/img/features/clipboard-calendar.png";
import progress from "../static/img/features/progress.png";
import secureClassroom from "../static/img/features/secure-classroom.png";
import uploading from "../static/img/features/Uploading.png";
import Image, { StaticImageData } from "next/image";

interface Feature {
  img: StaticImageData;
  title: string | React.JSX.Element;
  description: string | React.JSX.Element;
}

const Features = () => {
  const settings = {
    dots: true,
    className: "variable-width",
    infinite: true,
    slidesToShow: 3,
    autoPlay: true,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToScroll: 3,
    swipeToSlide: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const featuresList: Feature[] = [
    {
      img: uploading,
      title: "Content Sharing",
      description: "Easily upload and access learning materials.",
    },
    {
      img: bookMagnifying,
      title: "Tutor Discovery",
      description:
        "Easily search for tutors by subject, location, or expertise.",
    },
    {
      img: clipboardCalender,
      title: "Institute Management",
      description:
        "Tools for coaching centers to manage schedules, track enrollments, and share updates.",
    },
    {
      img: progress,
      title: "Interactive Course Content",
      description:
        "Engage students with multimedia content, quizzes, and real-time progress tracking.",
    },
    {
      img: secureClassroom,
      title: "Secure Online Classrooms",
      description:
        "Conduct live sessions with secure video conferencing, chat, and file sharing.",
    },
  ];

  return (
    <div className="pt-4 w-full">
      <p className="text-3xl font-medium text-center">Why Choose Us</p>
      <div className="slider-container">
        <Slider {...settings}>
          {featuresList.map((feature, i) => (
            <div
              key={i}
              className="w-[580px] h-[280px] flex items-center rounded-xl overflow-hidden "
            >
              <div className="bg-[rgb(241,234,255)] h-full w-[98%] rounded-xl mx-auto flex flex-row items-center gap-x-2 px-2">
                <div className="flex items-center my-auto">
                  <Image
                    src={feature.img}
                    alt=""
                    className="bg-cover"
                    quality={100}
                  />
                </div>
                <div className="flex flex-col h-full items-center justify-center w-full">
                  <p className="font-semibold text-xl italic">
                    {feature.title}
                  </p>
                  <p className="font-medium overflow-y-hidden">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Features;
