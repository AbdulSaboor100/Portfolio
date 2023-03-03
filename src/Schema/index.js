import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .max(16)
    .required("Please enter your name")
    .matches(
      /^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
      "Avoid special characters"
    ),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string()
    .min(6)
    .required("please enter your message")
    .matches(
      /^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
      "Avoid special characters"
    ),
});
