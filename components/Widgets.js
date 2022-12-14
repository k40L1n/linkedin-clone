import React from "react"
import InfoRoundedIcon from "@mui/icons-material/InfoRounded"
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded"
import Image from "next/image"
import TimeAgo from "timeago-react"

function Widgets({ articles }) {
  return (
    <div className="hidden lg:inline space-y-2">
      {/* {articles.map((article) => (
        <h1 key={article.author}>{article.title}</h1>
      ))} */}
      <div className="bg-white dark:bg-[#1d2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between px-2.5">
          <h5 className="max-w-xs font-medium text-sm truncate pr-10">
            LinkedIn News
          </h5>
          <InfoRoundedIcon className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          {articles.slice(0, 5).map((article) => (
            <div
              key={article.url}
              className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1"
            >
              <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
              <div>
                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                  {article.title}
                </h5>
                <TimeAgo
                  datetime={article.publishedAt}
                  className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-[#1d2226] border border-gray-300 dark:border-none h-64 rounded-lg w-11/12 sticky top-20">
        <div className="relative w-full h-full">
          <Image
            src="https://rb.gy/kbfeaa"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Widgets
