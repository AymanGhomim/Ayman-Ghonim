import { Github, Linkedin, MessageCircle } from "lucide-react";

interface SocialIconProps {
  id: string;
  size?: number;
}

/** Compact, recognizable icons while keeping every link text-accessible. */
export function SocialIcon({ id, size = 17 }: SocialIconProps) {
  if (id === "github") return <Github size={size} strokeWidth={1.8} aria-hidden />;
  if (id === "linkedin") return <Linkedin size={size} strokeWidth={1.8} aria-hidden />;
  if (id === "whatsapp") return <MessageCircle size={size} strokeWidth={1.8} aria-hidden />;

  return (
    <span className="social-behance-mark" aria-hidden>
      Bē
    </span>
  );
}
