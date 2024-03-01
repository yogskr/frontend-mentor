import NavMenuMobile from './NavMobile';

export default function Header() {
  return (
    <header className="flex flex-col gap-[17rem] bg-heroPattern bg-local bg-cover h-screen">
      <NavMenuMobile />
      <div className="self-center flex flex-col items-center justify-center p-5 border-[3px] w-80">
        <h1 className="font-josefinSans font-[300] text-white text-[2.5rem] leading-none">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </header>
  );
}
