import Image from "next/image";
import NotFound404 from "../static/img/404 bg-none.png";

const NotFound = () => {
  return (
    <div className="w-full h-full">
      <Image src={NotFound404} alt="" className="" />
    </div>
  );
};

export default NotFound;
