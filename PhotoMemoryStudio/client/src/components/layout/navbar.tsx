import { Link } from "wouter";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto my-4 px-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-full max-w-fit mx-auto px-8 py-2">
          <div className="flex space-x-8">
            {[
              { name: "Home", href: "home" },
              { name: "About", href: "about" },
              { name: "Gallery", href: "gallery" },
              { name: "Review", href: "review" },
              { name: "Contact", href: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-['Lora'] text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}