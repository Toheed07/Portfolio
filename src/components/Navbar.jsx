import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks, socials } from "../constants/site";
import { styles } from "../styles";

const MenuIcon = () => (
  <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
    <path
      d="M0 1h22M0 7h22M0 13h22"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M1 1l14 14M15 1L1 15"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

const linkClass =
  "font-sans text-[0.95rem] text-ink/80 transition-colors hover:text-accent";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 z-20 w-full border-b border-ink/[0.08] bg-paper/90 backdrop-blur-[2px]">
      <nav className={`${styles.nav} flex h-[4.25rem] items-center justify-between`}>
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-ink"
          onClick={() => {
            close();
            window.scrollTo(0, 0);
          }}
        >
          Toheed Jamaal
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`} className={linkClass}>
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href={socials.resume}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className={`${styles.nav} border-t border-ink/10 py-5 md:hidden`}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className="font-sans text-lg"
                  onClick={close}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href={socials.resume}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-lg"
                onClick={close}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
