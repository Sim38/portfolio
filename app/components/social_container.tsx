interface SocialProps {
  icon: string;
  link: string;
}

export default function SocialContainer({
  social,
  className,
}: {
  social: SocialProps;
  className?: string;
}) {
  return (
    <div className={className}>
      <img src={social.icon} />
    </div>
  );
}
