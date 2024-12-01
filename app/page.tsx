import Image from "next/legacy/image";
import logo from "/static/img/TeachHive logo transparent.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Image src={logo} alt="TeachHive logo" />
      <p className="text-center text-3xl font-semibold">
        This website is under development.
      </p>
    </div>
  );
}
