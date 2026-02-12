import { useState, useEffect } from "react";
import { UtensilsCrossed } from "lucide-react";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300",
        // default (belum scroll)
        "bg-white/95 border-b border-gray-200",
        // glass effect saat scroll
        isScrolled &&
          "bg-white/60 backdrop-blur-2xl border-white/30 shadow-lg shadow-black/5",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center transition-all duration-300",
          isScrolled ? "py-4" : "py-6",
        )}
      >
        <a href="#" className="flex items-center gap-4 group">
          <div
            className={cn(
              "w-12 h-12 flex items-center justify-center rounded-xl",
              "bg-amber-500 border border-amber-600",
              "transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6",
              isScrolled ? "shadow-lg shadow-amber-500/30" : "shadow-md",
            )}
          >
            <UtensilsCrossed className="text-white" size={24} />
          </div>

          <span className="text-2xl md:text-3xl font-bold bg-linear-to-br from-amber-600 to-amber-500 bg-clip-text text-transparent">
            Restaurant Finder
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
