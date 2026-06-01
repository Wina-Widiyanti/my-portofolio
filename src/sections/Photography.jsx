const photograpies = [
  {
    image: "/photographies/Photography1.jpg",
  },
  {
    image: "/photographies/Photography2.jpg",
  },
  {
    image: "/photographies/Photography3.jpg",
  },
  {
    image: "/photographies/Photography4.jpg",
  },
];

export const Photography = () => {
  return (
    <section id="photography" className="py-10 relative overflow-hidden">
      {/**BG GLOWS */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/**Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Photography
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Learning Through
            <span className="font-serif italic font-normal text-black">
              {" "}
              the lens.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selected photographs produced throughout various coursework and
            practical assignments at IPB University, showcasing my learning
            process in composition, lighting, and visual storytelling.
          </p>
        </div>
        {/**experiences Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {photograpies.map((photography, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/**Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={photography.image}
                  alt="Image of Photography"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 from-card via-card/50 to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
