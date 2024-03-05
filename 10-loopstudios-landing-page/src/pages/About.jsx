import { aboutTexts } from "../assets/routes/text-data";
import { about } from "../assets/routes/images-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function About() {
  return (
    <section className="flex flex-col items-center gap-10 px-5 pb-10 pt-20 md:px-10">
      <img src={about.src} alt={about.alt} />
      <article className="flex flex-col items-center justify-center text-center">
        <h2 className="mb-4 font-josefinSans text-[2rem] font-light leading-none md:text-[2.5rem]">
          {uppercaseLetter(aboutTexts.heading)}
        </h2>
        <p className="w-72 font-alata leading-loose text-veryDarkGray md:w-fit md:text-[1.1rem]">
          {aboutTexts.paragraph}
        </p>
      </article>
    </section>
  );
}
