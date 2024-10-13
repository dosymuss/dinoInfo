import { z } from "zod";

export const validationLogin = z.object({
  email: z
    .string({
      required_error: "required",
      invalid_type_error: "invalid",
    })
    .email({ message: "is not email" }),
  password: z
    .string({
      invalid_type_error: "Пароль должен быть строкой",
      required_error: "Пароль обязателен",
    })
    .min(6, { message: "Пароль должен содержать минимум 6 символов" })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "Пароль должен содержать хотя бы одну строчную букву",
    })
    .refine((value) => /\d/.test(value), {
      message: "Пароль должен содержать хотя бы одно число",
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "Пароль должен содержать хотя бы один специальный символ",
    }),
});

export const validationRegister = z
  .object({
    username: z.string({
      required_error: "required",
      invalid_type_error: "invalid",
    }),
    email: z
      .string({
        required_error: "required",
        invalid_type_error: "invalid",
      })
      .email({ message: "is not email" }),
    password: z
      .string({
        invalid_type_error: "Пароль должен быть строкой",
        required_error: "Пароль обязателен",
      })
      .min(6, { message: "Пароль должен содержать минимум 6 символов" })
      .refine((value) => /[A-Z]/.test(value), {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      })
      .refine((value) => /[a-z]/.test(value), {
        message: "Пароль должен содержать хотя бы одну строчную букву",
      })
      .refine((value) => /\d/.test(value), {
        message: "Пароль должен содержать хотя бы одно число",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Пароль должен содержать хотя бы один специальный символ",
      }),
    confirm_password: z.string({
      invalid_type_error: "Подтверждение пароля должно быть строкой",
      required_error: "Подтверждение пароля обязательно",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"], // Указываем, где ошибка
    message: "Пароли не совпадают",
  });
