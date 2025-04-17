import { useState } from "react";
import { tabItems } from "../data/tabs";

export default function MobiileNavbar({ className }: { className: string }) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <nav className={`${className}`}>
      <div className="flex w-full bg-secondary justify-end px-5 py-2.5">
        <button
          className="text-3xl"
          onClick={() => {
            setIsNavBarOpen((prev) => !prev);
          }}
        >
          ☰
        </button>
      </div>
      {isNavBarOpen ? <NavContainer tabItems={tabItems} /> : null}
    </nav>
  );
}

const NavContainer = ({ tabItems }: { tabItems: Array<TabItem> }) => {
  return (
    <div className="flex flex-col bg-primary py-2.5">
      {tabItems.map((tabItem) => (
        <a href={tabItem.link} key={tabItem.name} className="px-5 py-2.5">
          {tabItem.name}
        </a>
      ))}
    </div>
  );
};
