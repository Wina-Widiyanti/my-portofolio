import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState } from "react";

/**Untuk mengambil data statis dari array projects */
import projects from "@/data/projects";

export const Projects = () => {
  /**Use State untuk toggle grid */
  const [seeMore, setSeeMore] = useState(false);

  const handleToggleProjects = () => {
    if (seeMore) {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setSeeMore(false);
      }, 300);
    } else {
      setSeeMore(true);
    }
  };

  return (
    <section id="projects" className="py-18 relative overflow-hidden">
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
            Projects that
            <span className="font-serif italic font-normal text-black">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of projects completed throughout my studies so far as a
            Digital Communication and Media student at IPB University,
            showcasing experience in video production, journalism, graphic
            design, and digital content creation.
          </p>
        </div>
        {/**Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(seeMore ? projects : projects.slice(0, 8)).map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              // style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/**Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>
              {/**Link */}
              <div className="absolute inset-0 flex items-baseline-last justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              {/**Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground hidden lg:block text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/**Button See More */}
        {projects.length > 8 && (
          <div className="py-10 flex items-center justify-center">
            <AnimatedBorderButton onClick={handleToggleProjects}>
              {seeMore ? "Show Less" : "See More"}
            </AnimatedBorderButton>
          </div>
        )}
      </div>
    </section>
  );
};
