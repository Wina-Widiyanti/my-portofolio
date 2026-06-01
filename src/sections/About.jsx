import { Users2, Sliders, MessageCircleHeart } from "lucide-react";

const highlights = [
  {
    icon: Users2,
    title: "Teamwork",
    description:
      "Thriving in collaborative environments, bridging ideas, and working together to build seamless digital solutions.",
  },
  {
    icon: Sliders,
    title: "Adaptive",
    description:
      "Quick to embrace new technologies, versatile in learning, and highly responsive to evolving project needs.",
  },
  {
    icon: MessageCircleHeart,
    title: "Communication",
    description:
      "Conveying technical concepts clearly while maintaining open, empathetic, and effective discussions within the team.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/**Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-2xl font-bold tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Creating stories that connect,
              <span className="font-serif italic font-normal text-black">
                {" "}
                engage, and inspire.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Digital Communication and Media student at IPB University
                with a strong interest in content creation, digital
                storytelling, and social media communication. Through academic
                projects, organizational activities, and creative work, I have
                developed experience in producing content that not only informs
                but also builds meaningful connections with audiences.
              </p>
              <p>
                My journey has allowed me to explore various fields, from video
                production, photography, and graphic design to event management,
                public relations, and public speaking. I enjoy turning ideas
                into engaging content and continuously learning how
                communication can create impact in the digital world.
              </p>
              <p>
                Whether working behind the camera, editing content, facilitating
                discussions as a moderator, or collaborating with a team on
                events, I am passionate about creating experiences that are
                creative, purposeful, and audience-focused.
              </p>
            </div>
            <div className="glass rounded-2xl glow-border animate-fade-in animation-delay-300">
              <p className="text-lg p-3 font-medium italic text-foreground">
                My mission is to use digital media and creative communication to
                tell stories that matter. I strive to create content that
                educates, entertains, and inspires while continuously improving
                my skills in content production, audience engagement, and
                strategic communication. As I continue my journey as a student
                and aspiring media professional, I aim to contribute to projects
                that bring value, foster connections, and make a positive impact
                on communities.
              </p>
            </div>
          </div>
          {/** Right Column - Highlights */}
          <div className="grid sm:grid-cols-1 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
