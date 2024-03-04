import { useRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { navTexts } from "../assets/routes/nav-routes";
import { icons } from "../assets/routes/icons";
import uppercaseLetter from "../assets/helpers/helper";

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
    <li
      className="group hover:cursor-pointer hover:border-b-2 hover:border-white hover:pb-3 hover:transition-all"
      // className="group relative hover:cursor-pointer hover:border-white hover:pb-3 hover:before:absolute hover:before:bottom-0 hover:before:left-auto hover:before:right-[1.7rem] hover:before:h-2 hover:before:w-1/2 hover:before:border-b-2 hover:before:content-['']"
      key={text.id}
    >
      {uppercaseLetter(text.title)}
    </li>
  ));

  return (
    <nav ref={ref} className="lg:hidden">
      <div
        className={`fixed left-0 right-0 z-20 flex items-center justify-between px-5 py-8 ${
          scrolled
            ? "backdrop-blur-lg backdrop-brightness-75"
            : "bg-transparent"
        }`}
      >
        <img src={icons.logo} alt="loopstudios logo" />
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
      </div>
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-10 h-full w-full bg-black px-5 py-8 text-white">
          <ul className="flex h-full flex-col items-start justify-center gap-6 font-josefinSans text-2xl font-light">
            {navItems}
          </ul>
        </div>
      )}
    </nav>
  );
}
