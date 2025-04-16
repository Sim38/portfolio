import { useEffect, useState } from "react";

export default function CaretOvertype({ className }: { className?: string }) {
  const [isCaretVisible, setIsCaretVisible] = useState(true);

  useEffect(() => {
    const caretInterval = setInterval(() => {
      setIsCaretVisible((prev) => !prev);
    }, 800);

    return () => clearInterval(caretInterval);
  }, []);

  return (
    <span
      className={`border-x-5 ${
        isCaretVisible ? "border-accent-2" : "border-transparent"
      } ${className}`}
    ></span>
  );
}
