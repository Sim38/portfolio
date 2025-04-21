import React, { useEffect, useState } from "react";

export default function VerticalCarousel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const modifiedChildren = React.Children.map(children, (child, index) => {
    if (index === activeIndex) {
      return (
        <div
          className="carousel-item carousel-item-middle"
          onClick={() => setActiveIndex(index)}
        >
          {child}
        </div>
      );
    } else if (index === activeIndex - 1) {
      return (
        <div
          className="carousel-item carousel-item-top cursor-pointer"
          onClick={() => setActiveIndex(index)}
        >
          {child}
        </div>
      );
    } else if (index === activeIndex + 1) {
      return (
        <div
          className="carousel-item carousel-item-bottom cursor-pointer"
          onClick={() => setActiveIndex(index)}
        >
          {child}
        </div>
      );
    } else if (index === activeIndex - 2) {
      return (
        <div className="carousel-item carousel-item-top-hidden">{child}</div>
      );
    } else if (index === activeIndex + 2) {
      return (
        <div className="carousel-item carousel-item-bottom-hidden">{child}</div>
      );
    } else {
      return <div className="carousel-item hidden">{child}</div>;
    }
  });

  function decreaseIndex() {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }

  function increaseIndex() {
    setActiveIndex((prev) =>
      Math.min(prev + 1, React.Children.count(children) - 1)
    );
  }

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        decreaseIndex();
      } else {
        increaseIndex();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div
        className={`relative flex flex-col w-full h-full align-middle items-center justify-center overflow-hidden ${className}`}
      >
        {modifiedChildren}
      </div>
    </div>
  );
}
