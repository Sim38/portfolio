import { useEffect, useState } from "react";

export default function CaretOvertype({ className }: { className?: string }) {
  const [isCaretVisible, setIsCaretVisible] = useState(true);

  useEffect(() => {
    const caretInterval = setInterval(() => {
      setIsCaretVisible((prev) => !prev);
    }, 800);

    return () => clearInterval(caretInterval);
  }, []);

  return isCaretVisible ? (
    <span className={`border-x-5 border-accent-2 ${className}`}></span>
  ) : null;
}
