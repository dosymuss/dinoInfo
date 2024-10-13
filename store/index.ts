import {
  getDinoInfo,
  getDinosByCategory,
  getDinosLiked,
  getDinosSaved,
  getUserInfo,
  patchUser,
} from "@/api";
import { create } from "zustand";
import { IDino, IUser, IUserPatch } from "@/types";
import { devtools } from "zustand/middleware";

type TUseDinosState = {
  dinos: IDino[]; // Массив динозавров
  status: "idle" | "loading" | "success" | "error" | null; // Статусы запроса
  err: string | null; // Ошибка, если есть
  category: string;
};

type TUseDinos = {
  state: TUseDinosState;
  getDinos: () => Promise<void>; // Метод для получения данных
  changeCategory: (category: string) => void;
  fetchDinosByCategory: (category: string) => Promise<void>;
  fetchDinosLiked: () => Promise<void>;
  fetchDinosSaved: () => Promise<void>;
};

type TUserState = {
  user: IUser;
  status: "idle" | "loading" | "success" | "error" | null; // Статусы запроса
  err: string | null;
};

export const useDinos = create<TUseDinos>()(
  devtools((set) => ({
    state: {
      dinos: [],
      status: "idle",
      err: null,
      category: "",
    },
    getDinos: async () => {
      set((state) => ({
        ...state,
        state: { ...state.state, status: "loading", err: null }, // Устанавливаем статус загрузки
      }));

      try {
        const data = await getDinoInfo();
        set((state) => ({
          ...state,
          state: { ...state.state, dinos: data, status: "success" }, // Успешно получили данные
        }));
      } catch (error: any) {
        set((state) => ({
          ...state,
          state: {
            ...state.state,
            status: "error",
            err: error.message || "Ошибка",
          }, // Ошибка запроса
        }));
      }
    },

    changeCategory: (text) =>
      set((state) => ({
        state: {
          ...state.state,
          category: text,
        },
      })),

    fetchDinosByCategory: async (text) => {
      set((state) => ({
        ...state,
        state: { ...state.state, err: null, status: "loading" },
      }));

      try {
        const data = await getDinosByCategory(text);
        set((state) => ({
          ...state,
          state: { ...state.state, status: "success", dinos: data },
        }));
      } catch (error: any) {
        set((state) => ({
          ...state,
          state: {
            ...state.state,
            status: "error",
            err: error.message || "Ошибка",
          }, // Ошибка запроса
        }));
      }
    },

    fetchDinosLiked: async () => {
      set((state) => ({
        ...state,
        state: { ...state.state, status: "loading", err: null },
      }));

      try {
        const data = await getDinosLiked();
        set((state) => ({
          ...state,
          state: { ...state.state, dinos: data, status: "success" },
        }));
      } catch (error: any) {
        set((state) => ({
          ...state,
          state: {
            ...state.state,
            status: "error",
            err: error.message || "Ошибка",
          }, // Ошибка запроса
        }));
      }
    },

    fetchDinosSaved: async () => {
      set((state) => ({
        ...state,
        state: { ...state.state, status: "loading", err: null },
      }));

      try {
        const data = await getDinosSaved();
        set((state) => ({
          ...state,
          state: { ...state.state, dinos: data, status: "success" },
        }));
      } catch (error: any) {
        set((state) => ({
          ...state,
          state: {
            ...state.state,
            status: "error",
            err: error.message || "Ошибка",
          }, // Ошибка запроса
        }));
      }
    },
  }))
);

type TUseUser = {
  state: TUserState;
  getUser: () => Promise<void>;
  changeUser: (parametrs: { [key: string]: string | null | undefined }) => void;
  patchUser: (obj: IUserPatch) => Promise<void>;
};

export const useUser = create<TUseUser>((set) => ({
  state: {
    user: {
      id: "",
      img1: "",
      img2: "",
      img3: "",
      quote: "",
      email: "",
      nickname: "",
      password: "",
      username: "",
      confirm_password: "",
    },
    err: null,
    status: "idle",
  },
  getUser: async () => {
    set((state) => ({
      ...state,
      state: { ...state.state, status: "loading", err: null },
    }));
    try {
      const res = await getUserInfo();
      set((state) => ({
        ...state,
        state: { ...state.state, user: res, status: "success", err: null },
      }));
    } catch (error: any) {
      set((state) => ({
        ...state,
        state: {
          ...state.state,
          status: "error",
          err: error.message || "Ошибка",
        }, // Ошибка запроса
      }));
    }
  },
  patchUser: async (obj) => {
    set((state) => ({
      ...state,
      state: { ...state.state, status: "loading", err: null },
    }));
    try {
      const res = await patchUser(obj);
      set((state) => ({
        ...state,
        state: { ...state.state, status: "success", err: null },
      }));
    } catch (error: any) {
      set((state) => ({
        ...state,
        state: {
          ...state.state,
          status: "error",
          err: error.message || "Ошибка",
        }, // Ошибка запроса
      }));
    }
  },
  changeUser: (parametrs) => {
    set((state) => ({
      ...state,
      state: { ...state.state, user: { ...state.state.user, ...parametrs } },
    }));
  },
}));
