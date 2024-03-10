import { Navbar } from "./components";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-gradient-to-l from-transparent via-primary to-transparent p-4">
      <Navbar />
    </header>
  );
};
