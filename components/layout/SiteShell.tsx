
const topNavLinks = ["My Playground", "Folio 2023", "Folio 2021", "Brandfolio 2021"];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Top nav */}
      <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-neutral-800">
        <div className="h-9 w-9 rounded-full bg-orange-500" /> {/* logo placeholder */}
        <nav className="hidden md:flex gap-10 text-sm text-neutral-400">
          {topNavLinks.map((link) => (
            <span key={link} className="hover:text-white cursor-pointer">
              {link}
            </span>
          ))}
        </nav>
        <button className="text-white" aria-label="Menu">
          ☰
        </button>
      </header>

      <div className="flex px-6 md:px-10 py-14 gap-16">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
