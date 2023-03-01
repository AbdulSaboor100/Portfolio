import { useFormik } from "formik";
import React from "react";
import Input from "../Commons/Input/Input";
import { signUpSchema } from "../../Schema";
import Textarea from "../Commons/Textarea/Textarea";
import Button from "../Commons/Button/Button";

const ContactUs = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);

  return (
    <div className="w-full bg-base_dark  flex justify-center items-center">
      <div className="w-4/5 pt-16 pb-16">
        <h1 className="text-h1 font-w9 text-black2 md:text-h4">
          Let's Make Great Things Together
        </h1>
        <p className="pt-4 font-w5 text-black2">
          I'd love to hear about your project at{" "}
          <a href="./" className="text-main_primary px-1 font-w6">
            hello@yourwebsitename.com{" "}
          </a>
          or
        </p>
        <div className="w-full mt-5">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex gap-8 md:flex-col">
              <div className="w-1/2 md:w-full ">
                <Input
                  type="text"
                  placeholder={"name"}
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="text-red-700">{errors.name}</p>
                ) : null}
              </div>
              <div className="w-1/2 md:w-full ">
                <Input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-700">{errors.email}</p>
                ) : null}
              </div>
            </div>
            <div className="pt-5 w-full">
              <Textarea
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Message"
                rows="6"
              />
              {errors.message && touched.message ? (
                <p className="text-red-700">{errors.message}</p>
              ) : null}
            </div>
            <Button type="submit" Children={"Submit Now"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
