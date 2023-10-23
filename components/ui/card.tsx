import Image from "next/image";
import React from "react";
import SocialIcons from "../SocialIcons";

const Card = ({
  data,
}: {
  data: {
    title: string;
    image: string;
    subTitle: string;
  };
}) => {
  return (
    <div className="w-full bg-white rounded-md overflow-hidden">
      <Image
        src={data.image}
        alt={data.title}
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-80 object-cover object-center rounded-md"
      />
      <div className="px-4 py-2">
        <h3 className="text-sm text-primary">{data.title}</h3>
        <p className="text-base text-muted-foreground">{data.subTitle}</p>
        <div className="flex flex-wrap justify-center items-center my-2 gap-2">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Card;
