import { Button } from "@/components/Button";
import { ArrowDown, Download, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = ["Capcut", "Canva"];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/**Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="background image"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background" />
      </div>

      {/**Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          // Mengunci posisi awal acak agar konsisten saat halaman di-refresh
          const randomLeft = (i * 7.3) % 100;
          const randomTop = (i * 11.9) % 100;

          // Membuat durasi animasi acak (antara 15 detik sampai 35 detik) agar kecepatan tiap titik berbeda
          const randomDuration = 15 + (i % 5) * 5;

          // Membuat jeda awal acak agar tidak mulai bergerak bersamaan
          const randomDelay = i * -200;

          return (
            <div
              key={i}
              // Gunakan style bawaan v4 atau pastikan class ini memanggil keyframes slow-drift kamu
              className="absolute w-1.5 h-1.5 aspect-square rounded-full opacity-30"
              style={{
                backgroundColor: "var(--color-primary)",
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                // Menghidupkan animasi slow-drift secara kustom per titik
                animation: `slow-drift ${randomDuration}s ease-in-out infinite alternate`,
                animationDelay: `${randomDelay}ms`,
              }}
            />
          );
        })}
      </div>

      {/**Content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/**Left Column - Text Content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Short-Form Video Creator | Reels & TikTok
              </span>
            </div>

            {/**Headline*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {" "}
                Crafting{" "}
                <span className="text-secondary-foreground glow-text">
                  viral
                </span>
                <br />
                short-form stories
                <br />
                <span className="font-serif italic font-normal text-black">
                  that captivate audiences.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                Hi, I'm Wina Widiyanti — a student creator exploring the world
                of short-form content. Through CapCut and Canva, I experiment
                with creative ideas, trends, and storytelling to create videos
                that connect with audiences.
              </p>
            </div>

            {/**CTA*/}
            <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-400">
              <Button size="lg">
                {" "}
                Contact Me <ArrowDown className="w-5 h-5" />
              </Button>
              <a
                href="/cv/wina-widiyanti-CV.pdf"
                download
                className="inline-block cursor-pointer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/**Social Links*/}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">Follow : </span>
              <a
                href="https://www.instagram.com/itzme.winaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {/* SVG Alternatif pengganti <Instagram /> - Kebal dari runtime error */}
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@swgxwygrl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {/* SVG Alternatif pengganti <Instagram /> - Kebal dari runtime error */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-tiktok"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-1 tracking-wider">
              <p className="text-sm text-muted-foreground">📞 0821-2059-6647</p>
              <p className="text-sm text-muted-foreground">
                ✉️ winaeltobing@gmail.com
              </p>
            </div>
          </div>

          {/**Right Column - Image Content*/}
          <div className="relative animate-fade-in animation-delay-200">
            {/**Profile Image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="./profile-img.png"
                  alt="Wina Widiyanti"
                  className="w-full aspect-4/5 object-cover rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>
        {/**Skils */}
        <div className="mt-20 mb-5 animate-fade-in animation-delay-500">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tools I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex justify-center">
              {" "}
              {/* Ditambah justify-center agar tombol pas di tengah */}
              <div className="relative flex gap-4">
                {" "}
                {/* Ditambah gap-4 agar tombol tidak terlalu nempel */}
                {/* BUTTON CAPCUT */}
                <AnimatedBorderButton>
                  <div className="flex items-center gap-2 justify-center w-full">
                    {/* Kita bungkus gambar di dalam div berukuran kecil agar terkunci rapi */}
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <img
                        src="./capcut-icon.png"
                        alt="CapCut"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-secondary-foreground font-semibold text-base">
                      Capcut
                    </span>
                  </div>
                </AnimatedBorderButton>
                {/* BUTTON CANVA */}
                <AnimatedBorderButton>
                  <div className="flex items-center gap-2 justify-center w-full">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <img
                        src="./canva-icon.png" /* Sesuaikan nama file gambar Canva kamu */
                        alt="Canva"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-secondary-foreground font-semibold text-base">
                      Canva
                    </span>
                  </div>
                </AnimatedBorderButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
