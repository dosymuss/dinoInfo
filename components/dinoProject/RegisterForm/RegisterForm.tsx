"use client";

import { useFormik } from "formik";
import { useState } from "react";

// import { registerUser } from "../../../../api/userApi";
import { validationRegister } from "@/code/validation";
import DinoInput from "@/ui/dinoProject/dinoInput/DinoInput";

import styles from "./RegisterForm.module.scss";
import { ZodError } from "zod";
import { registerUser } from "@/api";
import { useRouter } from "next/navigation";

type TRegisterValue = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

const RegisterForm = () => {
  const [err, setErr] = useState("");

  const router = useRouter();

  const validateWithZod = (values: TRegisterValue): Partial<TRegisterValue> => {
    try {
      const parsed = validationRegister.parse(values);
      return {};
    } catch (error: any) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors as Partial<TRegisterValue>;
      }
    }
    return {};
  };

  const formik = useFormik<TRegisterValue>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validate: validateWithZod,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);

      registerUser(values)
        .then((res) => {
          localStorage.setItem("is_logged", JSON.stringify(true));
          router.push("/main");
        })
        .catch((error) => {
          console.log(error.message || error); // Логирование ошибки
          setErr(error.message || "Что-то пошло не так"); // Установка ошибки в состояние
        });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
      className={styles.main}
    >
      <DinoInput
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="username"
        type={"text"}
        labelText={"username"}
        error={formik.errors.username}
      />
      <DinoInput
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="email"
        type={"text"}
        labelText={"email"}
        error={formik.errors.email}
      />
      <DinoInput
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="password"
        type={"password"}
        labelText={"password"}
        error={formik.errors.password}
      />
      <DinoInput
        value={formik.values.confirm_password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="confirm_password"
        type={"password"}
        labelText={"confirm_password"}
        error={formik.errors.confirm_password}
      />
      <button
        type="submit"
        disabled={
          !formik.isValid && Object.keys(formik.touched).length > 0 && !err
        }
        className={styles.submitBtn}
      >
        Sign up
      </button>
      <p className={styles.errText}>{err}</p>
    </form>
  );
};

export default RegisterForm;
