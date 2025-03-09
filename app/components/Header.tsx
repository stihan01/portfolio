import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="p-4 bg-textBeige text-goodGreen">
      <nav className="flex gap-10">
        <h1 className="text-xl font-serif font-bold">Stina Hansson</h1>
      </nav>
    </header>
  );
}

/*
<ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>*/
