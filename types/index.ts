export interface IDino {
  id: string;
  name: string;
  images: string[];
  category: string;
  is_liked: true;
  is_saved: true;
  main_text: string;
  description: string;
  features: string;
  diet: string;
  behavor: string;
  research: string;
  myths: string;
  facts: string;
  time: string;
}

export interface IUser {
  id: string;
  img1: string | null;
  img2: string | null;
  img3: string | null;
  quote: string | null;
  email: string | null;
  nickname: string | null;
  password: string;
  username: string;
  confirm_password: string;
}

export type IUserPatch = Omit<
  IUser,
  "id" | "password" | "username" | "confirm_password"
>;

export type IUserRegister = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};
