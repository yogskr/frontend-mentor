export default function About() {
  return (
    <section className="flex flex-col items-center gap-10 px-5 pb-10 pt-20">
      <img
        src="./src/assets/images/mobile/image-interactive.jpg"
        alt="A man playing with a VR device"
      />
      <article className="flex flex-col items-center justify-center text-center ">
        <h2 className="mb-4 font-josefinSans text-[2rem] font-light leading-none">
          THE LEADER IN INTERACTIVE VR
        </h2>
        <p className="w-72 font-alata leading-loose text-veryDarkGray">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creatins have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}
