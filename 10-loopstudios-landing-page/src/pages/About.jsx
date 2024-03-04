import { aboutTexts } from "../assets/routes/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function About() {
  return (
    <section className="flex flex-col items-center gap-10 px-5 pb-10 pt-20">
      <img
        src="./src/assets/images/mobile/image-interactive.jpg"
        alt="A man playing with a VR device"
      />
      <article className="flex flex-col items-center justify-center text-center ">
        <h2 className="mb-4 font-josefinSans text-[2rem] font-light leading-none">
          {uppercaseLetter(aboutTexts.heading)}
        </h2>
        <p className="w-72 font-alata leading-loose text-veryDarkGray">
          {aboutTexts.paragraph}
        </p>
      </article>
    </section>
  );
}
