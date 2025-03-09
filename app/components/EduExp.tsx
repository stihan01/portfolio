import { Link } from "@remix-run/react";

export default function EduExp() {
  return (
    <div className="flex flex-col w-full sm:flex-row text-textBeige gap-10">
      <div className="flex sm:w-48 items-start">
        <picture>
          <source
            className="object-contain"
            media="(max-width:640px)"
            srcSet="/images/smalleduexp.png"
          />
          <source
            className="object-contain"
            media="(min-width:640px)"
            srcSet="/images/eduexpblob.png"
          />
          <img className="object-contain" src="/images/eduexpblob.png" />
        </picture>
      </div>
      <div className="flex flex-col grow divide-y-2 ">
        <div className="flex flex-col w-full gap-5 py-5">
          <h2 className="text-2xl font-serif">Education</h2>
          <div className="flex flex-col">
            <div className="flex flex-col sm:justify-between sm:flex-row align-center ">
              <p>Interaction design and technologies, MSc</p>
              <p className="text-sm">
                <i>2023-present</i>
              </p>
            </div>
            <p className="text-sm">
              <i>Chalmers University of Technology</i>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:justify-between sm:flex-row align-center">
              <p>Software Engineering, BSc</p>
              <p className="text-sm">
                <i>2020-2023</i>
              </p>
            </div>
            <p className="text-sm">
              <i>Chalmers University of Technology</i>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-5 py-5">
          <h2 className="text-2xl font-serif">Experience</h2>
          <div className="flex flex-col">
            <div className="flex flex-col sm:justify-between sm:flex-row align-center">
              <p>Summer worker - Function verification</p>
              <p className="text-sm">
                <i>2023</i>
              </p>
            </div>
            <p className="text-sm">
              <i>Volvo Group</i>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:justify-between sm:flex-row align-center">
              <p>Groundskeeper - Summer substitute</p>
              <p className="text-sm">
                <i>2019-2022</i>
              </p>
            </div>
            <p className="text-sm">
              <i>Svenska kyrkan</i>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-5 py-5">
          <h2 className="text-2xl font-serif">Volunteer work</h2>
          <div className="flex flex-col">
            <div className="flex flex-col sm:justify-between sm:flex-row align-center">
              <p>Norrköpings folkmusikfestival</p>
              <p className="text-sm">
                <i>2024-present</i>
              </p>
            </div>
            <p className="text-sm">
              <i>Responsible for IT and website</i>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:justify-between sm:flex-row align-center">
              <p>Equality Committee</p>
              <p className="text-sm">
                <i>2023-2024</i>
              </p>
            </div>
            <p className="text-sm">
              <i>President</i>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:justify-between sm:flex-row align-center">
              <p>Student Division Board</p>
              <p className="text-sm">
                <i>2022-2023</i>
              </p>
            </div>
            <p className="text-sm">
              <i>Student Safety and Welfare Representative</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
