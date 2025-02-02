import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";

export default function About() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#8B0000] text-white">
      <Navbar />

      {/* About Section */}
      <div className="relative min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 font-['Lora']">
                <h1 className="text-4xl font-bold mb-6">Kita Bikin Memories</h1>
                <div className="space-y-4 text-lg">
                  <p>Lorem Ipsum Dolor Sit Amet</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                  <p>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="w-80 h-80 relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/profile.jpg"
                    alt="Owner Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
