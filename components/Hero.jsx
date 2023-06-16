import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className=" absolute bottom-20 left-7 text-secondary text-9xl z-30 ">
        New <br /> Collection
      </div>
      <div className=" absolute bottom-20 left-7 text-secondary text-9xl z-30 ">
        New <br /> Collection
      </div>
      <div className=" w-[1280px] bg-light-500 h-[940px] top-[50%] left-[50%]  absolute -translate-x-1/2 -translate-y-1/2 ">
        <Image
          src="https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Hero;
