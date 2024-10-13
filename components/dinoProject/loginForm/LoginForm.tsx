import { useFormik } from "formik";
import styles from "./LoginForm.module.scss";
import DinoInput from "@/ui/dinoProject/dinoInput/DinoInput";
import { validationLogin } from "@/code/validation";
import { ZodError } from "zod";

// Типизация для значений формы
interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const validateWithZod = (
    values: LoginFormValues
  ): Partial<LoginFormValues> => {
    try {
      const parsed = validationLogin.parse(values); // Если вам нужно полное парсирование
      return {};
    } catch (error: any) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors as Partial<LoginFormValues>;
      }
    }
    return {};
  };

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateWithZod, // Убираем лишние скобки
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
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
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="email"
        error={formik.errors.email}
        type={"text"}
        labelText={"email"}
      />
      <DinoInput
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="password"
        error={formik.errors.password}
        type={"password"}
        labelText={"password"}
      />
      <button
        type="submit"
        disabled={!formik.isValid && Object.keys(formik.touched).length > 0}
        className={styles.submitBtn}
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
