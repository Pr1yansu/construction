import Image from "next/image";
import React from "react";
import Navigation from "@/components/Navigation";
import Container from "@/components/ui/container";
import { PhoneCall } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import SearchPanel from "@/components/SearchPanel";

const Header = () => {
  return (
    <header className="bg-white z-10 shadow-sm py-4 fixed top-0 left-0 right-0">
      <Container>
        <div className="flex items-center justify-between relative">
          <div>
            <Image
              src={"/assets/images/constructionlogo.svg"}
              height={100}
              width={150}
              alt="Logo.png"
            />
          </div>
          <div>
            <Navigation />
          </div>
          <div className="flex items-center gap-2 max-md:hidden">
            <div>
              <SearchPanel />
            </div>
            <Separator orientation="vertical" className="bg-zinc-600 h-6" />
            <div>
              <PhoneCall className="text-zinc-500 text-base" size={18} />
            </div>
            <div className="ms-2">
              <Button variant="ghost">Get in touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
