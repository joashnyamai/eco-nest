import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  className?: string
  iconSize?: string
  textColor?: string
}

export function SocialLinks({
  className = "flex gap-4",
  iconSize = "h-5 w-5",
  textColor = "text-background/70 hover:text-background",
}: SocialLinksProps) {
  return (
    <div className={className}>
      <Link
        href="https://facebook.com/econesthome"
        className={`${textColor} transition-colors`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className={iconSize} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://instagram.com/econesthome"
        className={`${textColor} transition-colors`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className={iconSize} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://twitter.com/econesthome"
        className={`${textColor} transition-colors`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className={iconSize} />
        <span className="sr-only">Twitter</span>
      </Link>
    </div>
  )
}
