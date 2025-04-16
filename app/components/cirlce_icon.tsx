import defaultProfile from "public/assets/default_profile.jpg";

interface CirlcIconProps {
  src?: string;
  size?: number;
  alt?: string;
  className?: string;
}

export default function CircleIcon({
  src = defaultProfile,
  size,
  alt = "",
  className = "",
}: CirlcIconProps) {
  return (
    <div
      className={`rounded-full overflow-hidden ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img src={src} className="w-full h-full object-cover" />
    </div>
  );
}
