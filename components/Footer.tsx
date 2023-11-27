import Socials from "@/components/Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-5 lg:py-7">
      <div className="container mx-auto flex justify-center">
        <Socials
          containerStyles="flex gap-x-7 mx-auto items-center"
          iconsStyles="
          dark:text-white/70 text-foreground
          hover:text-primary dark:hover:text-primary text-[20px]
          "
        />
      </div>
    </footer>
  );
};

export default Footer;
