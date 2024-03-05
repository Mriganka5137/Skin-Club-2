import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { IoMicOutline } from "react-icons/io5";
const Summary = () => {
  return (
    <div className="flex justify-between ">
      {/* Add Notes/Terms */}
      <div className="flex flex-col">
        <div>
          <Label className="text-black opacity-50 max-sm:text-[8px]">
            Add Notes/ Terms
          </Label>
          <div className=" w-[340px]  max-md:w-[250px] flex justify-center items-center border border-color--4C4D4F rounded-[7px] px-3 border-opacity-20 bg-white max-sm:w-[190px]">
            <IoMicOutline className="size-6 max-tablet:size-4 text-color--4C4D4F opacity-50" />
            <Input
              type="text"
              className="bg-transparent border-none focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 max-sm:text-[8px] max-sm:h-6"
            ></Input>
          </div>
        </div>
        <div className=" lg:hidden">
          <Label className="text-black opacity-50 max-sm:text-[8px]">
            Signature
          </Label>
          <div className="h-24 bg-white max-sm:h-[58px]"></div>
        </div>
      </div>

      {/* Subtotal */}
      <div className=" flex flex-col gap-2 w-1/3  max-sm:w-1/3 ">
        <div className="flex justify-between  text-black font-medium gap-10 w-full max-sm:text-[8px] max-sm:gap-2">
          <h5 className="w-52 text-right max-sm:w-24">Subtotal</h5>
          <h5 className=" w-52 text-right max-sm:w-24">$540.00</h5>
        </div>
        <div className="flex justify-between items-center text-color--4C4D4F gap-10  max-sm:text-[8px] max-sm:gap-2">
          <h5 className=" w-52 text-right max-sm:w-24">Transaction Fee 5%</h5>
          <h5 className=" w-52 border text-right p-2 rounded-lg  border-color--4C4D4F border-opacity-50 max-sm:w-24 max-sm:p-1">
            $00.00
          </h5>
        </div>
        <div className="flex justify-between text-color--4C4D4F items-center gap-10 max-sm:text-[8px] max-sm:gap-2">
          <h5 className=" w-52 text-right max-sm:w-24">Discount 10%</h5>
          <h5 className=" w-52 border text-right p-2 rounded-lg border-color--4C4D4F border-opacity-50 max-sm:w-24 max-sm:p-1">
            $00.00
          </h5>
        </div>
        <div className="flex justify-between mt-5 font-bold items-center gap-10 max-sm:text-[8px] max-sm:mt-2 max-sm:gap-2 ">
          <h5 className="w-52 text-right max-sm:w-24">Total</h5>
          <h5 className="w-52 text-right max-sm:w-24">$540.00</h5>
        </div>
      </div>
    </div>
  );
};

export default Summary;
