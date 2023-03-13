import React from "react";

const EducationSection = () => {
  return (
    <div
      className="w-full  flex justify-center items-center py-10"
      id={"resume"}
    >
      <div className="w-5/6 h-full md:w-11/12 xs:w-11/12">
        <h3 className="font-w9 text-h3 text-center text-black xs:text-h3 ">
          Resume
        </h3>

        <div className="grid grid-cols-2 gap-4 mt-16 h-full sm:grid-cols-1 xs:grid-cols-1">
          <div>
            <h3 className="font-w7 text-h4 text-black2 sm:text-[1.75rem]">
              My Education
            </h3>
            <div className="border-l-[2px] border-main_primary mt-6 sm:mb-12">
              {Array(3)
                .fill()
                .map((item) => (
                  <div className="pl-4 " key={item}>
                    <h3 className="font-w6 text-h5 text-black pb-1">
                      Master in Computer Engineering
                    </h3>
                    <p className="font-w5 text-p text-black pb-2">
                      Harvard University / 2015 - 2017
                    </p>
                    <h4 className="font-w6 text-desc_grey leading-7 pb-5 w-[90%] xs:w-full">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the dummy text.
                    </h4>
                    <hr className=" text-grey w-full h-[3px] mb-5" />
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h3 className="font-w7 text-h4 text-black2 sm:text-[1.75rem]">
              {" "}
              My Experience
            </h3>
            <div className="border-l-[2px] border-main_primary mt-6">
              {Array(3)
                .fill()
                .map((item) => (
                  <div className="pl-4 " key={item}>
                    <h3 className="font-w6 text-h5 text-black pb-1">
                      Master in Computer Engineering
                    </h3>
                    <p className="font-w5 text-p text-black pb-2">
                      Harvard University / 2015 - 2017
                    </p>
                    <h4 className="font-w6 text-desc_grey leading-7 pb-5 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the dummy text.
                    </h4>
                    <hr className=" text-grey w-full h-[3px] mb-5" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

{
  /* <div className="px-4 ">
                <h3 className="font-w6 text-h5 text-black pb-1">
                  Master in Computer Engineering
                </h3>
                <p className="font-w5 text-p text-black pb-2">
                  Harvard University / 2015 - 2017
                </p>
                <h4 className="font-w6 text-grey leading-7 pb-5 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </h4>
                <hr className=" text-grey w-full h-[3px] mb-5" />
              </div> */
}
{
  /* <div className="px-4 ">
                <h3 className="font-w6 text-h5 text-black pb-1">
                  Master in Computer Engineering
                </h3>
                <p className="font-w5 text-p text-black pb-2">
                  Harvard University / 2015 - 2017
                </p>
                <h4 className="font-w6 text-grey leading-7 pb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </h4>
                <hr className=" text-grey w-full h-[3px] mb-5" />
              </div> */
}
