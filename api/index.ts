import { IDino, IUser, IUserPatch, IUserRegister } from "@/types";

const dinoApi = "http://localhost:3004/dinos";
const userApi = "http://localhost:3004/users";

export const getDinoInfo = async (): Promise<IDino[]> => {
  // Ожидаем массив динозавров
  try {
    const res = await fetch(dinoApi);
    const data: IDino[] = await res.json(); // Типизируем ответ API
    return data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(error.message || "Произошла ошибка при получении данных");
    }
  }
};

export const getDinosByCategory = async (text: string): Promise<IDino[]> => {
  // Ожидаем массив динозавров
  try {
    const res = await fetch(`${dinoApi}?category=${text}`);
    const data: IDino[] = await res.json(); // Типизируем ответ API
    return data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(error.message || "Произошла ошибка при получении данных");
    }
  }
};

export const getDinosLiked = async (): Promise<IDino[]> => {
  // Ожидаем массив динозавров
  try {
    const res = await fetch(`${dinoApi}?is_liked=true`);
    const data: IDino[] = await res.json(); // Типизируем ответ API
    return data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(error.message || "Произошла ошибка при получении данных");
    }
  }
};

export const getDinosSaved = async (): Promise<IDino[]> => {
  // Ожидаем массив динозавров
  try {
    const res = await fetch(`${dinoApi}?is_saved=true`);
    const data: IDino[] = await res.json(); // Типизируем ответ API
    return data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(error.message || "Произошла ошибка при получении данных");
    }
  }
};

export const getDinoById = async (id: string) => {
  try {
    const res = await fetch(`${dinoApi}?id=${id}`);
    const data: IDino[] = await res.json();
    return data[0];
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(error.message || "Произошла ошибка при получении данных");
    }
  }
};

export const getUserInfo = async () => {
  try {
    const res = await fetch(userApi);
    const data: [IUser] = await res.json();
    return data[0];
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(error.message || "Произошла ошибка при получении данных");
    }
  }
};

export const patchUser = async (obj: IUserPatch) => {
  try {
    const res = await fetch(`${userApi}/123`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(error.message || "Произошла ошибка при получении данных");
    }
  }
};


export const registerUser = async (obj:IUserRegister) => {
  try {
    const res = await fetch(`${userApi}/123`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (error:any) {
      if (error.response && error.response.data) {
          throw new Error(error.response.data);  // Создаем новую ошибку с сообщением из response.data
      } else {
          // Если ответа нет, то выбрасываем сообщение ошибки по умолчанию
          throw new Error(error.message || "Произошла ошибка при получении данных");
      }
  }
}