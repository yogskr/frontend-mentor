import { useRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { logo } from "../assets/routes/images-data";
import NavMenu from "./NavMenu";

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

  return (
    <nav ref={ref}>
      <div
        className={`fixed left-0 right-0 z-20 flex items-center justify-between px-5 py-8 md:px-10 ${
          scrolled
            ? "backdrop-blur-lg backdrop-brightness-75"
            : "bg-transparent"
        }`}
      >
        <img className="md:w-60" src={logo.src} alt={logo.src} />
        <figure className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </figure>
      </div>
      {isOpen && (
        <aside className="fixed bottom-0 right-0 z-10 h-full w-full bg-black px-5 py-8 text-white md:px-10">
          <ul className="flex h-full flex-col items-start justify-center gap-6 font-josefinSans text-2xl font-light md:items-center md:gap-12 md:text-4xl">
            <NavMenu isHeader={true} />
          </ul>
        </aside>
      )}
    </nav>
  );
}
