"use client";
import { Play } from "lucide-react";
import React from "react";

const VideoPlayer = ({ video }: { video: string }) => {
  return (
    <div className="relative group">
      <Play className="w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white border absolute p-2 rounded-full group-hover:hidden z-[3] duration-300" />
      <div className="w-full h-full top-0 left-0 bg-black/20 absolute z-[2] rounded-md cursor-pointer group-hover:hidden duration-300" />
      <video
        width={500}
        height={400}
        src={video}
        onMouseOver={(e) => e.currentTarget.play()}
        onMouseOut={(e) => e.currentTarget.pause()}
        loop
        className="w-full aspect-video object-cover object-center rounded-md cursor-pointer"
      />
    </div>
  );
};

export default VideoPlayer;
