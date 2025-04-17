import { InputWidget } from "./InputWidget";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">Weather App</h1>

      <InputWidget />
    </nav>
  );
};
