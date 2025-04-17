import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CaretOvertype from "./caret_overtype";
import { tabItems } from "../data/tabs";

export default function MainSideBar({ className }: { className: string }) {
  const location = useLocation();

  return (
    <nav
      className={`sticky top-0 h-screen flex flex-col justify-center pl-20 ${className}`}
    >
      {tabItems.map((tabItem) => (
        <TabComponent
          key={tabItem.name}
          tabItem={tabItem}
          className={"my-8"}
          activePath={location.pathname}
        />
      ))}
    </nav>
  );
}

const TabComponent = ({
  tabItem,
  className,
  activePath,
}: {
  tabItem: TabItem;
  className: string;
  activePath: string;
}) => {
  const [isTabBlink, setIsTabBlink] = useState(false);

  return (
    <div className={`flex items-center h-[5rem] ${className}`}>
      <div className="font-unglitch text-accent-1 text-[5.3rem] tracking-[0.15rem]">
        ~/
      </div>
      <a
        href={tabItem.link}
        className={`group hover:font-glitch hover:text-accent-2 hover:text-[5rem] hover:pb-[0.8rem] ${
          activePath === tabItem.link
            ? "font-glitch text-accent-2 text-[5rem] pb-[0.8rem]"
            : "font-unglitch text-accent-1 text-[5.3rem] tracking-[0.15rem]"
        }`}
      >
        {tabItem.name}
        <CaretOvertype className="ml-1 py-2 group-hover:opacity-100 opacity-0" />
      </a>
    </div>
  );
};
