import { Metadata } from "next";

import ProfilePage from "@/components/dinoProject/profilePage/ProfilePage";

export const metadata: Metadata = {
  title: "user profile",
  description: "profile page",
};

export default function PPage() {
  return (
    <div>
      <ProfilePage />
    </div>
  );
}
