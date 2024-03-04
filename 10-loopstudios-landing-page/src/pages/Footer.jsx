import { icons } from "../assets/routes/icons";
import NavMenu from "../components/NavMenu";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black py-14">
      <img className="w-36" src={icons.logo} alt="Loopstudios logo" />
      <ul className="flex flex-col items-center gap-4 py-10 font-alata text-white">
        <NavMenu isHeader={false} />
      </ul>
    </footer>
  );
}
