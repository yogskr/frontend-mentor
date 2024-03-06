import { aboutTexts } from "../assets/data/text-data";
import { about } from "../assets/data/images-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function About() {
  return (
    <section className="flex flex-col items-center gap-10 px-5 pb-10 pt-20 md:px-10 md:pb-16 md:pt-28 xl:flex-row xl:px-44">
      <img className="lg:hidden" src={about.srcMobile} alt={about.alt} />
      <img
        className="hidden xl:block xl:max-w-[70%]"
        src={about.srcDesktop}
        alt={about.alt}
      />
      <article className="flex flex-col items-center justify-center text-center xl:absolute xl:left-[53%] xl:h-80 xl:w-[36%] xl:justify-end xl:self-end xl:bg-white xl:pb-0 xl:pl-[5rem] xl:pr-0 xl:text-start">
        <h2 className="mb-4 font-josefinSans text-[2rem] font-light leading-none md:text-[2.5rem] xl:text-[3rem]">
          {uppercaseLetter(aboutTexts.heading)}
        </h2>
        <p className="w-72 font-alata leading-relaxed text-darkGray md:w-fit md:text-[1.1rem] xl:text-[15px]">
          {aboutTexts.paragraph}
        </p>
      </article>
    </section>
  );
}
