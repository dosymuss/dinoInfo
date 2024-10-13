import DinosSideNav from "@/components/dinoProject/dinosSideNav/DinosSideNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "all dinos page",
  description: "is realy interesting info",
};

export default function DinosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DinosSideNav />
      {children}
    </div>
  );
}
