import NavBar from "../components/NavBar";
import { headerText } from "../assets/data/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function Header() {
  return (
    <header className="flex h-screen w-fit flex-col bg-heroPatternMobile bg-cover lg:h-[650px] lg:w-full lg:bg-heroPatternDesktop">
      <NavBar />
      <div className="flex h-full flex-col items-center justify-center bg-black/30 px-5 md:px-10 lg:items-start xl:px-44 xl:pt-16">
        <h1 className="h-fit border-[3px] p-5 font-josefinSans text-[2.7rem] font-[300] leading-none text-white md:text-7xl lg:w-[32rem] lg:p-8 lg:text-6xl xl:w-3/5 xl:text-7xl">
          {uppercaseLetter(headerText.title)}
        </h1>
      </div>
    </header>
  );
}
