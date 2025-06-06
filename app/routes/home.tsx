import portfolioIcon from "public/assets/portfolio_icon.png";
import CaretOvertype from "~/components/caret_overtype";
import TagBlock from "~/components/tag_block";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="container @container">
        <div className="flex items-center justify-center @md:flex-row flex-col">
          <img
            src={portfolioIcon}
            className="object-cover w-32 h-auto aspect-square overflow-hidden rounded-[1rem] border-1 border-secondary"
          />
          <p className="font-unglitch text-7xl ml-6 mt-6 @md:mt-0">Welcome</p>
        </div>
      </div>
      <TagBlock tagName="welcome" className="max-w-xl text-xl mt-10">
        <p>
          Welcome to my portfolio, this is just a little site to showcase my
          past{" "}
          <a href="/portfolio/projects" className="text-accent-2 underline">
            Projects
          </a>
          , and experiences.
        </p>
        <p className="mt-6">
          This page is created using <u>React</u> and <u>React Router v7</u>{" "}
          Framework and <u>Tailwind v4</u> for css. And most if not all
          components you see here are created by{" "}
          <a href="/portfolio/about" className="text-accent-2 underline">
            me
          </a>
          .
        </p>
        <p className="mt-6">
          If you're wondering, yes the code that is scrolling down in the
          background are the live code for the current page that you are on.
          <CaretOvertype className="ml-1" />
        </p>
      </TagBlock>
    </div>
  );
}
