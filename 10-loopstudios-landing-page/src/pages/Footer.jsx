import { logo } from "../assets/routes/images-data";
import { footerText } from "../assets/routes/text-data";
import NavMenu from "../components/NavMenu";
import SocialMedia from "../components/SocialMedia";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black py-14">
      <img className="w-36 md:w-44" src={logo.src} alt={logo.alt} />
      <ul className="flex h-[16rem] flex-col items-center gap-4 pb-0 pt-10 font-alata text-white md:text-[1rem]">
        <NavMenu isHeader={false} />
      </ul>
      <div className="group flex gap-5">
        <SocialMedia />
      </div>
      <p className="mt-3 font-alata text-darkGray">{footerText.title}</p>
    </footer>
  );
}
