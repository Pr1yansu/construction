import React from "react";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

const SocialIcons = () => {
  return (
    <>
      <a href="/" title="Sociallink">
        <Facebook className="w-8 h-8 p-2 text-primary border rounded-full border-current hover:text-primary hover:border-primary duration-300" />
      </a>
      <a href="/" title="Sociallink">
        <Twitter className="w-8 h-8 p-2 text-muted-foreground cursor-pointer border rounded-full border-current hover:text-primary hover:border-primary duration-300" />
      </a>
      <a href="/" title="Sociallink">
        <Instagram className="w-8 h-8 p-2 text-muted-foreground cursor-pointer border rounded-full border-current hover:text-primary hover:border-primary duration-300" />
      </a>
      <a href="/" title="Sociallink">
        <Mail className="w-8 h-8 p-2 text-muted-foreground cursor-pointer border rounded-full border-current hover:text-primary hover:border-primary duration-300" />
      </a>
    </>
  );
};

export default SocialIcons;
