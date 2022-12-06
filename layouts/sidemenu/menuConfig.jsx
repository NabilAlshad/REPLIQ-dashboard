import {BsCartDashFill,BsPeopleFill,BsCash} from "react-icons/bs";
import {BiShoppingBag}  from "react-icons/bi"
import {RxDashboard} from "react-icons/rx"
export const menuList=[
    {
        title:"Dashboard",
        icon: <RxDashboard/>,
        route:"/"
     },
    {
       title:"Customers",
       icon: <BsPeopleFill/>,
       route:"/customers/"
    },
    {
        title:"Products",
        icon:<BiShoppingBag/>,
        route:"/products/",
    
    },
    {
        title:"Orders",
        icon:<BsCartDashFill/>,
        route:"/orders/",
    },
    {
        title:"Payments",
        icon:<BsCash/>,
        route:"/payments/",
    
    },
   
    ];