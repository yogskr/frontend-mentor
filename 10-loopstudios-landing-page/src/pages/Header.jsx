import NavMenuMobile from "../components/NavMobile";
import { headerText } from "../assets/routes/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function Header() {
  return (
    <header className="flex h-screen w-fit flex-col bg-heroPattern bg-cover">
      <NavMenuMobile />
      <div className="md:scale-1 flex h-full scale-90 flex-col items-center justify-center">
        <h1 className="border-[3px] p-5 font-josefinSans text-5xl font-[300] leading-none text-white sm:text-7xl md:text-8xl">
          {uppercaseLetter(headerText.title)}
        </h1>
      </div>
    </header>
  );
}
