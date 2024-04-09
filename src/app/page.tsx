import Image from "next/image";
import MainHeader from "./ui/header";
import MenuParent from "./ui/menuParent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start  p-24">
      <MainHeader />
      <MenuParent />
    </main>
  );
}
