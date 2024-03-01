import { mobileImages } from '../routes/image-routes';

export default function About() {
  return (
    <section className="px-6 py-24">
      <img
        className="mb-14"
        src={mobileImages.about}
        alt="A man playing with a VR device"
      />
      <h2 className="font-josefinSans font-light text-center text-4xl mb-5">
        THE LEADER IN INTERACTIVE VR
      </h2>
      <p className="font-alata text-darkGray text-center px-4">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creatins have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </section>
  );
}
