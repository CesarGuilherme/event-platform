import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-smoky-100/50 shadow-lg shadow-cyan-900 border-b border-cyan-700">
      <Logo />
    </header>
  );
}
