import Link from "next/link";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SocialIcons from "@/components/SocialIcons";

const Footer = () => {
  return (
    <section className="bg-slate-50 p-4">
      <div className="backgroundFooter">
        <Container>
          <div className="flex p-8 max-sm:flex-col gap-4 justify-between">
            <div className="text-2xl font-semibold">
              <h2>
                Got a <br /> project in <br /> mind?
              </h2>
              <Link href={"/contact"}>
                <Button
                  className="mt-4 bg-black hover:bg-white border-2 border-current hover:text-black hover:border-black"
                  size={"lg"}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-2 font-medium">
              <p>
                Suite 126 89778 Ralph Camp,
                <br /> South Arturomouth, CA 11881-6086
              </p>
              <p className="text-zinc-500">184.193.16.99</p>
              <a
                href="mailto:eraon@fevgurhev.sc"
                className="hover:text-primary text-zinc-500"
              >
                eraon@fevgurhev.sc
              </a>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <SocialIcons />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
