import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <div className="my-[26px] flex h-[2rem] items-center justify-center gap-[0.75rem]">
      <div className="flex h-[2.15rem] items-center gap-2 rounded-md border border-solid  px-[12px] py-[6px]">
        <IoIosArrowBack />
        <span className="h-[1.5rem]">Previous</span>
      </div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">1</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">...</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md bg-sky-700 text-white">10</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">11</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">12</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">13</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">14</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">15</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">16</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">17</div>
      <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md">18</div>
      <div className="flex h-[2.15rem] items-center gap-2 rounded-md border border-solid  px-[12px] py-[6px]">
        <span className="h-[1.5rem]">Next</span>
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default Footer;

