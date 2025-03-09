import type { MetaFunction } from "@remix-run/node";
import EduExp from "~/components/EduExp";

export const meta: MetaFunction = () => {
  return [
    { title: "Stina Hansson" },
    { name: "description", content: "Welcome to my portfolio!" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-goodGreen pt-20">
      <div className="flex flex-col w-full xl:w-2/3 2xl:max-w-screen-lg items-center gap-10 px-5 md:px-10 lg:px-20 ">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          <div className="flex flex-col sm:grow gap-8">
            <h1 className="text-5xl font-serif text-textBeige">Hi!</h1>
            <p className="text-textBeige text-base">
              My name is Stina Hansson, and I am a master student in interaction
              design, with a background in software engineering. I enjoy
              combining my skillset in UX with software engineering in order to
              create accessible and user-friendly interfaces.
            </p>
            <div className="flex align-center">
              <a
                href="mailto:stihan01@gmail.com"
                className="flex text-white bg-goodGreen focus:ring focus:outline-none focus:ring-yellow-200 rounded-lg text-sm text-center items-center me-2"
              >
                <svg
                  className="hover:fill-orange-200"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="white"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-287q5 0 10.5-1.5T501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447Z" />
                </svg>
                <span className="sr-only">Mail</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hansson-stina"
                className="flex text-textBeige bg-goodGreen focus:ring focus:outline-none focus:ring-yellow-200 rounded-lg text-sm text-center items-center me-2"
              >
                <svg
                  className="hover:fill-orange-200"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <title>LinkedIn icon</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="sr-only">Linkedin</span>
              </a>
            </div>
            <div className="hidden sm:block">
              <img src="/images/longsquiggle.png" />
            </div>
          </div>
          <div className="order-first sm:order-none max-w-[400px]">
            <picture className="">
              <source
                className="object-contain"
                media="(max-width:640px)"
                srcSet="/images/litenstinautangubbe.png"
              />
              <source
                className="object-contain"
                media="(min-width:640px)"
                srcSet="/images/stinautangubbe.png"
              />
              <img
                className="object-contain max-w-max"
                src="/images/stinautangubbe.png"
                width={300}
                height={300}
              />
            </picture>
          </div>
        </div>
        <EduExp />
      </div>
    </div>
  );
}
