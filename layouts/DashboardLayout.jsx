import React from 'react'
import { MainNav } from './mainMenu/MainNav'
import { SideMenu } from './sidemenu/SideMenu'

export const DashboardLayout = ({children}) => {
  return (
    <div className="w-full flex">
    <div className="w-2/12 bg-white-800 p-8 m-1 h-auto shadow-2xl shadow-gray-600">
   <SideMenu/>
    </div>
    <div className="w-10/12 p-8">
     <MainNav NavClass="flex flex-col"/>
      <div>
       {children}
      </div>
    </div>
  </div>
  )
}
