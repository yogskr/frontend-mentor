import NavBar from "../components/NavBar";
import { headerText } from "../assets/routes/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function Header() {
  return (
    <header className="bg-heroPatternMobile lg:bg-heroPatternDesktop flex h-screen w-fit flex-col bg-cover lg:h-[650px] lg:w-full">
      <NavBar />
      <div className="flex h-full scale-90 flex-col items-center justify-center lg:scale-100">
        <h1 className="border-[3px] p-5 font-josefinSans text-5xl font-[300] leading-none text-white md:text-8xl lg:w-1/2 lg:text-5xl">
          {uppercaseLetter(headerText.title)}
        </h1>
      </div>
    </header>
  );
}
