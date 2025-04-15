const tabItems = [
  { name: "Home", link: "/" },
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
  return (
    <div className="flex flex-row w-full justify-center">
      {tabItems.map((tab) => (
        <NavTab tab={tab} />
      ))}
    </div>
  );
};

const NavTab = ({ tab }: { tab: TabItem }) => {
  return (
    <a href={tab.link} className="py-4 px-6 hover:bg-tertiary-2">
      {tab.name}
    </a>
  );
};
