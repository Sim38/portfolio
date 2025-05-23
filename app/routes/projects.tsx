import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import missingImage from "public/assets/missing_image.jpg";
import VerticalCarousel from "~/components/vertical_carousel";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Projects() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="text-7xl font-unglitch">Projects</h1>
      <ProjectSection />
    </div>
  );
}

const ProjectSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return isLargeScreen ? (
    <VerticalCarousel>
      {projects.map((project) => (
        <ProjectContainer key={project.name} project={project} />
      ))}
    </VerticalCarousel>
  ) : (
    <div className="w-full sm:w-fit">
      {projects.map((project) => (
        <ProjectContainer key={project.name} project={project} />
      ))}
    </div>
  );
};

const ProjectContainer = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col p-6 my-8 bg-secondary border-primary-light border-1 gap-6 rounded-xl sm:flex-row sm:p-4 sm:h-50 sm:gap-4 ">
      <ProjectImage imageSrc={project.imageSrc} />
      <div className="flex flex-col gap-2 md:max-w-xl ">
        <h2 className="text-2xl">{project.name}</h2>
        <p className="flex-1 overflow-hidden text-ellipsis line-clamp-4">
          {project.description}
        </p>
        <TagSection tags={project.tags} />
      </div>
    </div>
  );
};

const ProjectImage = ({
  imageSrc = [missingImage],
}: {
  imageSrc?: Array<string>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageSrc.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageSrc]);

  return (
    <div className="aspect-square h-full w-auto">
      <img
        src={imageSrc[currentIndex]}
        className="h-full w-full object-cover rounded-xl"
      />
    </div>
  );
};

const TagSection = ({ tags }: { tags: Array<string> }) => {
  return (
    <div className="flex flex-row gap-2">
      {tags.map((tag) => (
        <TagContainer key={tag} tag={tag} />
      ))}
    </div>
  );
};

const TagContainer = ({
  tag,
  className,
}: {
  tag: string;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-full py-0.5 px-2 text-sm bg-neutral-light text-neutral-dark text-ellipsis line-clamp-1 ${className}`}
    >
      {tag}
    </div>
  );
};
