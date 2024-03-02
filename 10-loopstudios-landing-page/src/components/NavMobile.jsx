import { useRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { navTexts } from "../routes/nav-routes";
import { icons } from "../routes/icons";

export default function NavMenuMobile() {
  // State variables to manage navigation bar functionality
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // State variables to manage navigation bar scroll behavior
  const [scrolled, setScrolled] = useState(false);

  // Handle the navigation bar when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = navTexts.map((text) => (
    <li className="group hover:cursor-pointer" key={text.id} href={text.href}>
      {text.title}
    </li>
  ));

  return (
    <nav ref={ref} className="lg:hidden">
      <div
        className={`fixed left-0 right-0 z-20 flex items-center justify-between px-6 py-8 ${
          scrolled
            ? "backdrop-blur-lg backdrop-brightness-75"
            : "bg-transparent"
        }`}
      >
        <img src={icons.logo} alt="loopstudios logo" />
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
      </div>
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-10 h-full w-full bg-black px-6 py-8 text-white">
          <ul className="flex h-full flex-col justify-center gap-6 font-josefinSans text-2xl font-light">
            {navItems}
          </ul>
        </div>
      )}
    </nav>
  );
}
