import type { ReactNode } from "react";

interface TagBlockProps {
  children: ReactNode;
  tagName: string;
  className?: string;
}

export default function TagBlock({
  children,
  tagName,
  className,
}: TagBlockProps) {
  return (
    <div className={className}>
      <span className="text-neutral-600">{`<`}</span>
      <span className="text-accent-2">{tagName}</span>
      <span className="text-neutral-600">{`>`}</span>

      <div className="border-l-1 border-[#646464] pl-4 py-0.5 ml-0.5">
        {children}
      </div>

      <span className="text-neutral-600">{`</`}</span>
      <span className="text-accent-2">{tagName}</span>
      <span className="text-neutral-600">{`>`}</span>
    </div>
  );
}
