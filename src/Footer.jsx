import React from "react";
import { ArrowLeftRight, Users, Wallet } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#202020] flex justify-around items-center z-50 text-xs py-2 w-full">
      <div className="text-center text-[#85827d] w-1/3 bg-[#d6d6d6] py-2 rounded-2xl">
        <ArrowLeftRight size={20} className="mx-auto mb-1" />
        <p>Exchange</p>
      </div>
      <div className="text-center text-[#85827d] w-1/3 hover:bg-[#d6d6d6] py-2 rounded-2xl">
        <Users size={20} className="mx-auto mb-1" />
        <p>Friends</p>
      </div>
      <div className="text-center text-[#85827d] w-1/3 hover:bg-[#d6d6d6] py-2 rounded-2xl">
        <Wallet size={20} className="mx-auto mb-1" />
        <p>Wallet</p>
      </div>
    </div>
  );
}

export default Footer;
