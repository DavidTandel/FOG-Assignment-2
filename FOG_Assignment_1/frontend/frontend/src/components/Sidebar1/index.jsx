import { Img } from "./..";
import React from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function SidebarComponent({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  // use this function to collapse/expand the sidebar
  // function collapseSidebar() {
  //   setCollapsed(!collapsed);
  // }

  return (
    <Sidebar
      width="122px !important"
      {...props}
      collapsedWidth="88px !important"
      collapsed={collapsed}
      className={`${props.className || ""} flex flex-col self-stretch h-screen top-0 sticky overflow-auto md:hidden`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: 0, // Corrected padding value
            justifyContent: "flex-start", // Corrected typo
          },
          label: { display: "none" },
        }}
        rootStyles={{
          [`.${sidebarClasses.container}`]: { gap: "1.38px" }, // Corrected syntax for rootStyles
        }}
        className="flex w-full flex-col self-stretch"
      >
        <MenuItem
          icon={
            <img
              src="images/img_side_menu_game.png"
              alt="Sidemenu game" // Corrected alt text
              className="h-[30px] w-[32px] object-cover opacity-58"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_side_menu_game_38x32.png"
              alt="Sidemenu game" // Corrected alt text
              className="h-[30px] w-[32px] object-cover opacity-58"
            />
          }
        />
        <MenuItem
          icon={
            <img
              src="images/img_side_menu_game_1.png"
              alt="Sidemenu game" // Corrected alt text
              className="h-[30px] w-[32px] object-cover opacity-58" // Corrected className
            />
          }
        />
        <MenuItem
          icon={
            <img
              src="images/img_side_menu_game_2.png"
              alt="Sidemenu game" // Corrected alt text
              className="h-[30px] w-[32px] object-cover opacity-58" // Corrected className
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_side_menu_career.png"
              alt="Sidemenu" // Corrected alt text
              className="h-[30px] w-[32px] object-cover opacity-58"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_vector_white_0_1.svg"
              alt="Vector"
              className="h-[30px] w-[32px]" // Removed unnecessary object-cover
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_megaphone_white_0.svg"
              alt="Megaphone"
              className="h-[30px] w-[32px]" // Removed unnecessary object-cover
            />
          }
        />
      </Menu>
    </Sidebar>
  );
}