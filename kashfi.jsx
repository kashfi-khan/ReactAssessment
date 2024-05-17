import React from "react";
import leaf from "../src/assets/leaf.png";
import mobTree from "../src/assets/mobTree.png";
import { FaApple, FaFacebook, FaGoogle, FaRegUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiDoorLockLine } from "react-icons/ri";

const FormApp = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col">
        <div className="w-full sm:flex hidden bg-[#e3faf9] p-40">
          <img src={mobTree} alt="tree" className="w-full" />
        </div>
        <div className="w-full p-10 rounded-2xl shadow-lg flex flex-col gap-2 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={leaf} alt="" />
            <div className="w-full sm:hidden flex">
              <img src={mobTree} alt="tree" className="w-full" />
            </div>
            <p className="font-black text-2xl">Create Account</p>
          </div>
          <form className="flex flex-col gap-5 w-full">
            <div className="flex flex-col">
              <label className="text-sm pl-1">Full Name</label>
              <FaRegUser
                color="lightgray"
                className="w-5 h-5 absolute ml-3 mt-7"
              />
              <input
                type="text"
                className="border border-gray-300 py-1.5 px-10 border-2 rounded-full md:rounded-lg"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm pl-1">Email</label>
              <CiMail
                color="lightgray"
                className="w-5 h-5 absolute ml-3 mt-7"
              />
              <input
                type="email"
                className="border border-gray-300 py-1.5 px-10 border-2 rounded-full md:rounded-lg"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm pl-1">Password</label>
              <RiDoorLockLine
                color="lightgray"
                className="w-5 h-5 absolute ml-3 mt-7"
              />
              <input
                type="password"
                className="border border-gray-300 py-1.5 px-10 border-2 rounded-full md:rounded-lg"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="btn">
              <button className="text-lg w-full font-bold text-white rounded-lg bg-green-700 py-1.5">
                Sign-Up
              </button>
            </div>
          </form>
          <div>
            <p className="text-gray-400 py-6">-OR-</p>
          </div>
          <div className="icons flex gap-4 items-center justify-center">
            <div className="rounded-full border border-black p-1">
              <FaGoogle />
            </div>
            <div className="rounded-full border border-black p-1">
              <FaFacebook />
            </div>
            <div className="rounded-full border border-black p-1">
              <FaApple />
            </div>
          </div>
          <p className="text-gray-400 flex gap-1">
            Already Have a Account? <p className="font-bold">Login Here</p>.
          </p>
        </div>
      </div>
    </>
  );
};

export default FormApp;
