import { inter } from './ui/fonts';

export default function Header(): React.JSX.Element {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className={`flex justify-between`}>
        <h2 className={`${inter.className}`}>User List App</h2>
      </nav>
    </header>
  );
}