import React from "react";
import { ServiceSection } from "../(Home)/page";
import Container from "@/components/ui/container";
import Videoplayer from "./components/videoplayer";

const ServicePage = () => {
  return (
    <div className="pt-8">
      <Container>
        <div className="mt-8 pt-8">
          <h3 className="text-primary text-sm font-medium mb-2">Services</h3>
          <p className="text-muted-foreground">
            Our suite of integrated construction services ensure the highest
            degree of quality, safety, efficiency and innovation on your
            projects.
          </p>
        </div>
        <Videoplayer />
      </Container>
      <ServiceSection spacing={"py-2"} />
    </div>
  );
};

export default ServicePage;
