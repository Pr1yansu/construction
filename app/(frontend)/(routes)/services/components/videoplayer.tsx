"use client";
import React from "react";

const Videoplayer = () => {
  return (
    <div className="overflow-hidden rounded-md">
      <video
        src={"/assets/videos/pexels-tima-miroshnichenko-6473958 (2160p).mp4"}
        height={500}
        width={500}
        className="w-full h-96 object-cover object-center group-hover:scale-125 duration-300 transform cursor-pointer mt-6 "
        onMouseOver={(e) => {
          e.currentTarget.play();
          e.currentTarget.controls = true;
        }}
        onMouseOut={(e) => {
          e.currentTarget.pause();
          e.currentTarget.controls = false;
        }}
        loop
      />
    </div>
  );
};

export default Videoplayer;
