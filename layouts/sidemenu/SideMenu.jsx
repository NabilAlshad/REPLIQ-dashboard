import React from "react";
import { menuList } from "./menuConfig";
import Link from "next/link";
import { Image } from 'next/image';
// import logoPic from '../../src/assets/repliq-logo';

export const SideMenu = () => {
  return (
    <>
      <ul className="my-10">
        {/* <Image src={logoPic} width={100} height={100} alt="logo" /> */}
        {menuList.map((menuListItem) => (
          <Link key={menuListItem.title} href={menuListItem.route}>
            <li className="text-[#2A4178] text-lg flex gap-3 mb-[3.50rem] cursor-pointer">
              <span className="text-2xl text-slate-700">
                {menuListItem.icon}
              </span>
              {menuListItem.title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
