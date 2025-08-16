import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MdPeople } from "react-icons/md";
import { TbMilitaryRankFilled } from "react-icons/tb";

const CaroselPage = () => {
  return (
    <div className="w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent className="ml-0 gap-2 md:-ml-4 md:gap-4 ">
          <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/4 p-4 add-contained">
            <h3 className="w-full text-left font-bold font-Ruska text-[16px]">Connector PRO</h3>
            <TbMilitaryRankFilled className="text-[#5849EF] text-9xl" />
            <p className="w-full text-shared text-[13px]">You earn 10% more Nectar on referrals</p>
          </CarouselItem>
          <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/4 p-4 add-contained">
            <h3 className="w-full text-left font-bold font-Ruska text-[16px] text-shared flex items-center gap-2">
              <MdPeople /> 18/20
            </h3>
            <TbMilitaryRankFilled className="text-[#CC1C43] text-9xl rotate-180" />
            <p className="w-full text-shared text-[13px]">You earn 10% more Nectar on referrals</p>
          </CarouselItem>
          <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/4 p-4 add-contained">
            <h3 className="w-full text-left font-bold font-Ruska text-[16px] text-shared flex items-center gap-2">
              <MdPeople /> 18/20
            </h3>
            <TbMilitaryRankFilled className="text-[#333394] text-9xl rotate-90" />
            <p className="w-full text-shared text-[13px]">You earn 10% more Nectar on referrals</p>
          </CarouselItem>
          <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/4 p-4 add-contained">
            <h3 className="w-full text-left font-bold font-Ruska text-[16px]">Connector PRO</h3>
            <TbMilitaryRankFilled className="text-[#5849EF] text-9xl" />
            <p className="w-full text-shared text-[13px]">You earn 10% more Nectar on referrals</p>
          </CarouselItem>
          <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/4 p-4 add-contained">
            <h3 className="w-full text-left font-bold font-Ruska text-[16px] text-shared flex items-center gap-2">
              <MdPeople /> 18/20
            </h3>
            <TbMilitaryRankFilled className="text-[#CFEE49] text-9xl rotate-[270deg]" />
            <p className="w-full text-shared text-[13px]">You earn 10% more Nectar on referrals</p>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CaroselPage;
