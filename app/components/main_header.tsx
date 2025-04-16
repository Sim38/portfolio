import { useLocation } from "react-router";

const tabItems = [
  { name: "Home", link: "/portfolio/" },
  { name: "Projects", link: "/portfolio/projects" },
  { name: "About", link: "/portfolio/about" },
];

interface TabItem {
  name: string;
  link: string;
}

export default function MainHeader() {
  return (
    <nav className="flex flex-row w-full bg-primary-light sticky top-0">
      <NavTabsContainer />
    </nav>
  );
}

const NavTabsContainer = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row w-full justify-center">
      {tabItems.map((tab) => (
        <NavTab key={tab.name} tab={tab} activePath={location.pathname} />
      ))}
    </div>
  );
};

const NavTab = ({ tab, activePath }: { tab: TabItem; activePath: string }) => {
  return (
    <a
      href={tab.link}
      className={`py-4 px-6 hover:bg-accent-2 ${
        activePath === tab.link ? "bg-primary" : ""
      }`}
    >
      {tab.name}
    </a>
  );
};
