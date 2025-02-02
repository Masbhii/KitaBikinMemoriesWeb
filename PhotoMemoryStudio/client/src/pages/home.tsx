import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#3C2A21] text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea)',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="animate-[fadeIn_1s_ease-in]">
            <img 
              src="/logo.png" 
              alt="Kita Bikin Memories"
              className="w-[600px] max-w-full mb-8 opacity-0 animate-[fadeIn_1s_ease-in_forwards]"
            />
          </div>
          <p 
            className="font-['Lora'] text-xl md:text-2xl text-center max-w-3xl text-white opacity-0 animate-[fadeIn_1s_ease-in_0.5s_forwards]"
          >
            Setiap moment spesial dalam hidup Anda layak untuk diabadikan dengan indah
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen bg-[#8B0000] pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 font-['Lora']">
                <h1 className="text-4xl font-bold mb-6">Kita Bikin Memories</h1>
                <div className="space-y-4 text-lg">
                  <p>Lorem Ipsum Dolor Sit Amet</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
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
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen bg-[#F5F5F5] py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Lora'] text-4xl text-gray-900 mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wedding Gallery */}
            <div className="group relative cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/800x600/?wedding" 
                alt="Wedding"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-['Lora'] text-3xl text-white">Wedding</h3>
              </div>
            </div>

            {/* Family Gallery */}
            <div className="group relative cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/800x600/?family" 
                alt="Family"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-['Lora'] text-3xl text-white">Family</h3>
              </div>
            </div>

            {/* Event Gallery */}
            <div className="group relative cursor-pointer overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/800x600/?event" 
                alt="Event"
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-['Lora'] text-3xl text-white">Event</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section id="review" className="min-h-screen bg-[#FDF6EC] py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Lora'] text-4xl text-gray-900 mb-12">Clients Review</h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl mx-auto px-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="/client-review.jpg"
                    alt="Client Review"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-6 font-['Lora']">
                  <p className="text-xl italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                  <p className="font-semibold">John & Laura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-[#8B0000] py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Lora'] text-4xl text-white mb-12">Contact</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <SiInstagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <FaWhatsapp className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <SiTiktok className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <MdEmail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}