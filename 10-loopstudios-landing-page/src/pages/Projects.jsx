import { projectListTexts } from "../assets/routes/text-data";
import { projectText } from "../assets/routes/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function Projects() {
  const projectItems = projectListTexts.map((text) => (
    <figure
      key={text.id}
      className={`group flex h-[125px] w-full ${text.background} bg-cover bg-center bg-no-repeat`}
    >
      <span className="flex h-full w-full items-end bg-gradient-to-r from-black/70 p-5 transition delay-200 duration-300 hover:cursor-pointer hover:from-neutral-300/85 hover:to-neutral-300/85">
        <p className="flex w-full flex-col text-balance font-josefinSans text-[1.5rem] font-extralight leading-none text-white group-hover:font-light group-hover:text-black md:text-[1.8rem]">
          <span>{uppercaseLetter(text.titleOne)}</span>
          <span>{uppercaseLetter(text.titleTwo)}</span>
        </p>
      </span>
    </figure>
  ));

  return (
    <section className="flex flex-col items-center justify-center gap-10 px-5 pb-20 pt-10 md:px-10">
      <h2 className="text-center font-josefinSans text-[2rem] font-light md:text-[2.5rem]">
        {uppercaseLetter(projectText.heading)}
      </h2>
      <div className="flex w-full flex-col items-center gap-5">
        {projectItems}
      </div>
      <button className=" border border-black bg-white p-[0.6rem] px-12 align-middle font-josefinSans font-semibold tracking-widest hover:cursor-pointer hover:bg-black hover:text-white hover:transition md:text-[1.1rem]">
        {uppercaseLetter(projectText.button)}
      </button>
    </section>
  );
}
