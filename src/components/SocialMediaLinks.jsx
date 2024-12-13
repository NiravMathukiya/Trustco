import { Instagram, Globe, Linkedin } from 'lucide-react'

export default function SocialLinks({ instagram, website, linkedin }) {
  return (
    <div className="flex items-center gap-3 mt-2">
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
      )}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Globe className="w-5 h-5" />
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
    </div>
  )
}

