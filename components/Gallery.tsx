"use client";
import React from "react";
import Slider from "@/components/Slider";
import Selector from "@/components/Selector";

const Gallery = () => {
  let LatestWorks = [
    {
      title: "Construction",
      image: "/assets/images/joe-holland-80zZ1s24Nag-unsplash.jpg",
    },
    {
      title: "Garden",
      image: "/assets/images/joe-holland-80zZ1s24Nag-unsplash.jpg",
    },
    {
      title: "School",
      image: "/assets/images/joe-holland-80zZ1s24Nag-unsplash.jpg",
    },
    {
      title: "House",
      image: "/assets/images/joe-holland-80zZ1s24Nag-unsplash.jpg",
    },
    {
      title: "House",
      image: "/assets/images/joe-holland-80zZ1s24Nag-unsplash.jpg",
    },
    {
      title: "House",
      image: "/assets/images/joe-holland-80zZ1s24Nag-unsplash.jpg",
    },
  ];

  const frameworks = [
    {
      value: "Construction",
      label: "Construction",
    },
    {
      value: "House",
      label: "House",
    },
    {
      value: "School",
      label: "School",
    },
    {
      value: "Garden",
      label: "Garden",
    },
  ];

  const [value, setValue] = React.useState("");

  LatestWorks = LatestWorks.filter((item) => {
    if (value === "") {
      return item;
    } else if (item.title.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

  return (
    <>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-sm text-primary">Our Works</h3>
          <p className="text-lg font-medium mt-2 ">Latest Works</p>
        </div>
        <div>
          <Selector categories={frameworks} setValue={setValue} value={value} />
        </div>
      </div>
      <div className="mt-4">
        <Slider data={LatestWorks} />
      </div>
    </>
  );
};

export default Gallery;
