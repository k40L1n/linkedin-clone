import React from "react"
import Image from "next/image"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import HeaderLink from "./HeaderLink"
import GroupIcon from "@mui/icons-material/Group"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsIcon from "@mui/icons-material/Notifications"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined"
import { Avatar } from "@mui/material"

function Header() {
  return (
    <header>
      {/* LEFT SIDE */}
      <div className="flex items-center space-x-2 max-w-xs">
        <Image src="https://rb.gy/bizvqj" width={45} height={45} />
        <div className="flex items-center space-x-1 pt-2.5 px-4 rounded w-full dark:md:bg-gray-700">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex items-center space-x-6">
        <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
        <HeaderLink Icon={GroupIcon} text="My Network" feed />
        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
        <HeaderLink Icon={ChatIcon} text="Messaging" feed />
        <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
        <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
        <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />
      </div>
    </header>
  )
}

export default Header