import { MoveRight, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="w-screen h-full fixed">
      <section className="w-full p-3 bg-[#FCD269] flex items-center justify-end">
        <div className="flex gap-x-2 flex-grow justify-center">
          <h2>Exciting news! Bench has been acquired by Employer.com!</h2>
          <h2 className="text-light-blue flex">
            Learn More <MoveRight className="ml-1" />
          </h2>
        </div>
        <X className="ml-auto mr-2" />
      </section>
      <section className="w-full p-4 bg-white flex items-center">
        <Logo />
        <ul className="flex items-center justify-center flex-grow gap-x-12 ml-4">
          <li>Services</li>
          <li>Platform</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>About Us</li>
        </ul>

        <div className="flex ml-auto mr-4 items-center gap-x-4">
          <a className="hover:text-light-blue transition cursor-pointer font-semibold">
            Log in
          </a>
          <Button>Get Started</Button>
          <Button variant="outline">Book a Demo</Button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
