import { initialize } from "./lib/actions";
import Image from "next/image";
import MainHeader from "./ui/header";
import MenuParent from "./ui/menuParent";
import { DataContextProvider } from '@/app/lib/dataContext';

export default function Home() {

  initialize();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start  p-24">
      <DataContextProvider>
        <MainHeader />
        <MenuParent />
      </DataContextProvider>
    </main>
  );
}
