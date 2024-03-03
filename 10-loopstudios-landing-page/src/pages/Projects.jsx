import { projectTexts } from "../routes/projects-routes";

export default function Projects() {
  const projectItems = projectTexts.map((text) => (
    <figure
      key={text.id}
      className={`flex h-[125px] w-full ${text.background} bg-contain bg-center bg-no-repeat`}
    >
      <span className="flex h-full w-full items-end bg-gradient-to-r from-black/70 p-5 ">
        <p className="flex w-full flex-col text-balance font-josefinSans text-[1.5rem] font-extralight leading-none text-white">
          <span>{text.titleOne}</span>
          <span>{text.titleTwo}</span>
        </p>
      </span>
    </figure>
  ));

  return (
    <section className="px-5 pb-20 pt-10">
      <h2 className="mb-10 text-center font-josefinSans text-[2rem] font-light">
        OUR CREATIONS
      </h2>
      <div className="flex flex-col items-center gap-5">
        {projectItems}
        <button className=" border border-black bg-white p-[0.6rem] px-12 align-middle font-josefinSans font-semibold tracking-widest">
          SEE ALL
        </button>
      </div>
    </section>
  );
}
