import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import React from "react";
import VideoPlayer from "@/components/ui/videoPlayer";
import Card from "@/components/ui/card";
import Gallery from "@/components/Gallery";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="min-h-screen backgroundImg flex items-center py-8">
      <Container>
        <div className="text-white relative lg:w-2/3 md:w-3/5 max-md:text-center leading-7">
          <h3 className="text-base font-semibold my-2">Explore The Future</h3>
          <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold">
            Staying Ahead of Schedule
          </h1>
          <p className="my-4 text-zinc-100">
            There Are Many Variations Passages Of Lorem Ipsum Available, But The
            Majority Have Suffered Alteration In Some Form, By Injected .
          </p>
        </div>
        <div className="flex space-x-4 relative max-md:justify-center">
          <Button>Read more</Button>
        </div>
        <div className="absolute max-md:hid bottom-0 right-0 bg-white w-[500px] py-8 px-16 text-xl max-md:hidden rounded-sm">
          <p>Lets Work</p>
          <p className="flex items-center gap-4">
            <span>together</span>
            <span className="bg-primary h-1 w-10 rounded-full" />
          </p>
          <Button className="my-2" variant={"ghost"}>
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
};

export const AboutSection = () => {
  const defination = [
    {
      title: "Who We Are",
      description:
        "Revealing expertise through tailored project stories, reflecting our construction identity.",
    },
    {
      title: "What We Do",
      description:
        "Dive into project tales showcasing our construction expertise and impact.",
    },
    {
      title: "Our Mission",
      description:
        "Explore narratives embodying our construction mission and vision for transformation.",
    },
  ];
  const Achievements = [
    {
      numberOfWorksDone: "53k",
      workName: "Layouts Done",
    },
    {
      numberOfWorksDone: "10K",
      workName: "Projects Done",
    },
    {
      numberOfWorksDone: "120",
      workName: "Get Awards",
    },
  ];
  return (
    <section className="py-8 my-8">
      <Container>
        <div className="flex flex-wrap pb-8">
          {defination.map((about, i) => {
            return (
              <div key={i} className="md:w-1/3 sm:w-1/2 w-full p-1">
                <div className="p-6 rounded-md">
                  <h3 className="text-sm text-primary">{about.title}</h3>
                  <p className="mt-2 font-medium text-zinc-600">
                    {about.description}
                  </p>
                  <Button className="mt-4" size={"sm"} variant={"ghost"}>
                    Read More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="achievementsBg p-4 my-8">
          <h3 className="text-sm text-primary max-md:text-center">
            Discover Our Achievements
          </h3>
          <p className="mt-2 text-lg font-medium text-zinc-600 max-md:text-center">
            From prestigious awards to successful project completions,
            <br /> our portfolio speaks of excellence in every endeavor.
          </p>
          <div className="flex flex-wrap">
            {Achievements.map((achievement, i) => {
              return (
                <div
                  key={i}
                  className="md:w-1/3 text-center sm:w-1/2 w-full p-1 relative"
                >
                  <div className="p-6 rounded-md hover:border-primary border-b-2 border-transparent cursor-pointer hover:bg-gradient-to-t from-primary/20 to-transparent duration-300 ">
                    <h3 className="text-2xl font-bold text-primary">
                      {achievement.numberOfWorksDone}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      {achievement.workName}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export const ServiceSection = ({ spacing }: { spacing: string | null }) => {
  const Services = [
    {
      title: "Rebuild Construction",
      description:
        "Revitalize and renew spaces with our expert reconstruction services.",
      video: "/assets/videos/pexels_videos_2073129 (2160p).mp4",
    },
    {
      title: "Consultancy Construction",
      description:
        "Expert guidance for seamless construction projects, tailored to your needs.",
      video: "/assets/videos/pexels-tima-miroshnichenko-6473958 (2160p).mp4",
    },
    {
      title: "Architecture Design",
      description:
        " Crafted designs that blend creativity and functionality for inspiring spaces.",
      video: "/assets/videos/pexels-richard-he-5567711 (1080p).mp4",
    },
  ];
  return (
    <section className={spacing ? spacing : "py-8 my-8"}>
      <Container>
        <div className="my-2 py-2">
          <h3 className="text-sm mb-2 text-primary">Our Services</h3>
          <p className="text-lg font-medium">
            Transforming visions into sturdy, awe-inspiring structures with
            precision.
            <br className="max-md:hidden" />
            offering expertise and insight to ensure every project thrives.
          </p>
        </div>
        <div className="grid grid-cols-12 my-2 py-2">
          {Services.map((service, i) => {
            return (
              <div
                key={i}
                className="md:col-span-4 sm:col-span-6 col-span-12 p-1 "
              >
                <VideoPlayer video={service.video!} />
                <div className="p-1">
                  <h3 className="text-sm mt-1 text-primary font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-medium">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const PortfolioSection = () => {
  const Workers = [
    {
      title: "John Doe",
      subTitle: "Skilled Carpenter",
      image: "/assets/images/pexels-burst-544966.jpg",
    },
    {
      title: "Jane Smith",
      subTitle: "Experienced Electrician",
      image: "/assets/images/pexels-kateryna-babaieva-2880871.jpg",
    },
    {
      title: "Michael Johnson",
      subTitle: "Master Plumber",
      image: "/assets/images/pexels-andrea-piacquadio-3771111.jpg",
    },
    {
      title: "Sarah Davis",
      subTitle: "Talented Architect",
      image: "/assets/images/pexels-andrea-piacquadio-3822844.jpg",
    },
  ];

  return (
    <section className="my-8">
      <div className="bg-slate-800 py-8">
        <Container>
          <div>
            <h3 className="text-sm text-primary">Our Team</h3>
            <p className="text-lg font-medium mt-2 text-slate-100">
              Meet With Members
            </p>
          </div>
          <div className="grid justify-center items-center grid-cols-12 lg:gap-4 md:gap-3 gap-2 my-4">
            {Workers.map((worker, i) => {
              return (
                <div
                  key={i}
                  className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
                >
                  <Card data={worker} />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-8 px-2">
          <Gallery />
        </div>
      </Container>
    </section>
  );
};

const JournalSection = () => {
  const Journals = [
    {
      title: "Awards",
      image: "/assets/images/pexels-gdtography-911758-1.webp",
      description: "Essex Crossing Wins ULI Americas Awards for Excellence",
    },
    {
      title: "interior",
      image: "/assets/images/pexels-vecislavas-popa-3741317.webp",
      description: "Why Porcelain is Good For a Bathroom",
    },
    {
      title: "Architecture",
      image: "/assets/images/pexels-martin-péchy-2763969.webp",
      description: "Converting JLWQA Artist Lofts to Residential in SoHo",
    },
  ];
  return (
    <section className="mt-8">
      <Container>
        <div className="p-2">
          <div>
            <h3 className="text-sm text-primary">Our Journal</h3>
            <p className="text-lg font-medium mt-2">Latest News</p>
          </div>
          <div className="grid grid-cols-12 gap-2 md:items-center my-8 py-8">
            {Journals.map((journal, i) => (
              <div
                className={`md:col-span-4 col-span-12 ${
                  i === 2 ? "sm:col-end-12" : "sm:col-span-6"
                }`}
                key={i}
              >
                <div className="rounded-md overflow-hidden group">
                  <Image
                    src={journal.image}
                    alt={journal.title}
                    height={300}
                    width={500}
                    className="w-full h-full group-hover:scale-125 duration-300 transform cursor-pointer"
                  />
                </div>
                <div className="text-center py-2 px-2">
                  <h3 className="text-sm text-primary">{journal.title}</h3>
                  <p className="text-zinc-600 font-semibold">
                    {journal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServiceSection spacing={null} />
      <PortfolioSection />
      <JournalSection />
    </>
  );
};

export default Home;
