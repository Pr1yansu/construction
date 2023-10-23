import React from "react";
import { AboutSection } from "@/app/(frontend)/(routes)/(Home)/page";
import Image from "next/image";
import { HardHat, Leaf, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const commitments = [
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: "Safety",
      description:
        "We will never compromise the safety of our people. Our goal is zero incidents and our lost time frequency rate is industry-leading.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: "Sustainability",
      description:
        "We look beyond sustainable construction with a holistic approach to corporate social responsibility that addresses partners, people, projects, practices and places; our 5P Model.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "Quality",
      description:
        "We see projects through and proactively develop solutions to exceed expectations. Operational excellence instills quality principles that tangibly demonstrate success.",
    },
  ];
  return (
    <div className="pt-8">
      <div className="mt-10 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 text-white flex justify-center items-center bg-black/40 z-[3]">
          <h3 className="relative md:text-5xl text-3xl font-semibold tracking-wider ">
            About Us
          </h3>
        </div>
        <Image
          src={"/assets/images/joe-holland-80zZ1s24Nag-unsplash.jpg"}
          alt="About Us"
          height={500}
          width={500}
          className="w-full h-96 object-cover object-center group-hover:scale-125 duration-300 transform cursor-pointer"
        />
      </div>
      <AboutSection />
      <Container>
        <div className="grid grid-cols-12 gap-4 pb-8 mb-8 justify-center">
          {commitments.map((commitment, i) => (
            <div
              key={i}
              className={`md:col-span-4 sm:col-span-6 col-span-12 text-center ${
                i === 2 && "sm:col-span-12"
              } `}
            >
              <div className="flex justify-center">
                {commitment.icon && commitment.icon}
              </div>
              <div className="my-2 text-base font-medium text-primary">
                {commitment.title}
              </div>
              <div className="text-muted-foreground text-sm">
                {commitment.description}
              </div>
              <Button variant={"ghost"} size={"sm"} className="my-2">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
