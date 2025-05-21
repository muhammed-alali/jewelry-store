"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  MobileNav,
} from "@material-tailwind/react";
import { SlArrowDown } from "react-icons/sl";

import Image from "next/image";
import Link from "next/link";
import HeroBtn from "@/components/btn";
import ButtonCom from "@/components/btn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

//////// Menue
// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-semibold text-[1rem] text-Title hover:bg-white "
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Resources
//               <SlArrowDown
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <SlArrowDown
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>

//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <MenuListComponent />
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <MenuListComponent isMenuOpen={isMenuOpen} />
//       </div>
//     </React.Fragment>
//   );
// }

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:gap-[2.5rem] xs:gap-4 md:gap-4">
      <Typography
        as="a"
        href="/"
        className="font-semibold text-[1rem] text-Title w-fit navLi"
      >
        <ListItem className="active:bg-white hover:active:bg-white focus:bg-white  flex items-center gap-2 my-2 xs:py-0 py-1 pr-4 hover:bg-white   px-0   ">
          الصفحة الرئيسية
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/about"
        className="font-semibold text-[1rem] text-Title navLi"
      >
        <ListItem className="active:bg-white hover:active:bg-white focus:bg-white  flex items-center gap-2 my-2 xs:py-0 py-1 pr-4 hover:bg-white   px-0   ">
          من نحن
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/properties"
        className="font-semibold text-[1rem] text-Title navLi"
      >
        <ListItem className="active:bg-white hover:active:bg-white focus:bg-white  flex items-center gap-2 my-2 xs:py-0 py-1 pr-4 hover:bg-white   px-0   ">
          مجوهرات عصرية
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/properties"
        className="font-semibold text-[1rem] text-Title navLi"
      >
        <ListItem className="active:bg-white hover:active:bg-white focus:bg-white  flex items-center gap-2 my-2 xs:py-0 py-1 pr-4 hover:bg-white   px-0   ">
          هدايا ومناسبات
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/contact"
        className="font-semibold text-[1rem] text-Title navLi"
      >
        <ListItem className="active:bg-white hover:active:bg-white focus:bg-white  flex items-center gap-2 my-2 xs:py-0 py-1 pr-4 hover:bg-white   px-0   ">
          تواصل معنا
        </ListItem>
      </Typography>

      {/* <NavListMenu /> */}
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className=" max-w-full rounded-none  px-4 py-0 border-b border-[#EAEBED]">
      <div className="flex items-center justify-center  md:container mx-auto">
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="lg:hidden active:!bg-white hover:!bg-white disabled:bg-white"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <h1>
              <IoMdClose className="w-[25px] h-[25px] text-SiteColor" />
            </h1>
          ) : (
            <h1>
              <GiHamburgerMenu className="w-[25px] h-[25px] text-SiteColor" />
            </h1>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="mx-4 lg:mx-auto md:container ">
          <NavList />
        </div>
      </MobileNav>
    </Navbar>
  );
}
