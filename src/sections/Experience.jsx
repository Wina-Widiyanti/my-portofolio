const experiences = [
  {
    title: "Event Staff – Portal 7",
    image: "/experiences/experience1.jpeg",
    description:
      "Acara talkshow, seminar dan internasional digital competiton (digital poster, ui/ux design, short movie) yang merupakan program kerja dari BEM SV IPB University. Dihadiri oleh spaker dan bintang tamu yang menginspirasi yaitu Aubrey dan Andovi Da Lopez",
  },

  {
    title: "Event Staff - Sumeday Wapemala",
    image: "/experiences/experience3.jpeg",
    description:
      "Acara organisasi daerah Sumedang mahasiswa IPB University, membuat campus expo, IPB goes to school, dan acara puncak dengan perlombaan bagi siswa tingkat SMA/SMK di Sumedang ",
  },

  {
    title: "Moderator - Seminar Sadar Gizi",
    image: "/experiences/experience4.jpeg",
    description:
      "Acara seminar sosialisasi dan edukasi pada daerah TegalGundil di Bogor tentang Sadar Gizi bagi masyarakat terutama kepada ibu yang mempunyai anak agar mencegah terjadinya stunting.",
  },
  {
    title: "Event Staff – Ormawa Expo, IPB Vocational School",
    image: "/experiences/experience5.jpeg",
    description:
      "Ormawa expo : acara yang memperkenalkan semua organisasi mahasiswa yang ada di Sekolah Vokasi IPB University bagi mahasiswa baru",
  },
  {
    title: "Treasurer – Festival Budaya NTT, IPB Vocational School",
    image: "/experiences/experience6.jpeg",
    description:
      "Acara festival budaya ke 16 Sekolah Vokasi IPB University yang dilaksanakan oleh seluruh mahasiswa prodi Komunikasi dan Digital angkatan 61. Ada 22 budaya yang menghadirkan tarian dan memperkenalkan mulai dari makanan tradisional, alat musik, dll pada masing - masing booth",
  },
  {
    title: "Moderator - The fearless Leader : acara webinar dan talkshow",
    image: "/experiences/experience2.jpeg",
    description:
      "TFL: adalah sebuah acara webinar yang dirancang untuk membantu peserta mengembangkan keterampilan komunikasi dan meningkatkan rasa percaya diri agar siap menjadi pemimpin yang tangguh di era yang serba cepat dan penuh tantangan.",
  },
  {
    title: "Event Staff - Impress",
    image: "/experiences/experience7.jpeg",
    description:
      "Acara tentang public relation yaitu ada seminar, talkshow dan kompetisi ( reels kreatif, copywriting, pitching pr, crisis manajemen) berkolaborasi bersama Perhumas Indonesia yang menghadirkan pembicara yang siap berbagi pengalaman di dunia PR ",
  },
];

export const Experience = () => {
  return (
    <section id="experiences" className="py-32 relative overflow-hidden">
      {/**BG GLOWS */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/**Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experiences that
            <span className="font-serif italic font-normal text-black">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my work 
          </p>
        </div>

        {/**experiences Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              className={`group glass rounded-2xl overflow-hidden animate-fade-in
                ${idx === experiences.length - 1 ? "md:col-start-2" : ""}
              `}
            >
              {/**Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              {/**Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm hidden lg:block">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
