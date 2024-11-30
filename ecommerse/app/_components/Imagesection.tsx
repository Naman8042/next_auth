import Banner from "@/public/Bannar Big.png";
import Up from "@/public/Bannar (1).png";
import Down from "@/public/Bannar.png";
import Image from "next/image";
import Feature from '@/public/Featured.png'

const Imagesection = () => {
  return (
    <>
    <div className="grid grid-cols-[65%_35%] gap-4 px-40 h-[380px] ">
      <div className="row-span-2 h-[380px] ">
        <Image src={Banner} alt="" className="w-full h-full object-fill" />
      </div>
      <div className="flex flex-col  h-[380px] px-2 gap-5  justify-center ">
        <Image src={Up} alt="" className="w-full rounded-xl h-[180px]" />
        <Image src={Down} alt="" className="w-full h-[180px]" />
      </div>
    </div>
    <div className="px-40 ">
        <Image src={Feature} alt="" className="w-full" />
    </div>
    </>
  );
};

export default Imagesection;
