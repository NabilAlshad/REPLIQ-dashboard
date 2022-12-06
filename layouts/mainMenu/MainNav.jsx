import React from "react";
import { BsSearch, BsBellFill } from "react-icons/bs";
import { Input } from "../../src/components/Root/Form/Input";
import { BiMessageRounded } from "react-icons/bi";
import{ CgProfile} from 'react-icons/cg';

export const MainNav = ({ NavClass }) => {
  const search = <BsSearch />;
  // eslint-disable-next-line react/jsx-key
  const icons = [<BiMessageRounded />, <BsBellFill />];
  return (
    <div className={NavClass}>
      <ul className="flex mb-20 items-center justify-evenly gap-[50%]">
        <Input
          inputClass="w-[60%] bg-gray-300 me-10 border border-rounded-gray-200 text-gray-800 text-sm rounded-lg focus:w-full focus:ring-blue-500 focus:border-rounded-blue-500   block transition duration-700  p-3"
          type="text"
          placeholder="search results..."
        ></Input>
        <div className="flex gap-10 ">
          {/* icons  */}
          <div className="flex gap-5">
            {icons.map((i) => (
              <span className="text-[#6495ED] cursor-pointer text-3xl" key={i}>
                {i}
              </span>
            ))}
          </div>

          {/* profile picture  */}
        <span className="flex gap-2 cursor-pointer">
          <CgProfile className="text-gray-600 text-3xl"/>         
        </span>
        </div>
      </ul>
    </div>
  );
};
