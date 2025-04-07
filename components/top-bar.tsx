import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { CopyToClipboard } from "@/components/copy-to-clipboard"
import { YelpIcon } from "@/components/icons"
import { companyInfo } from "@/lib/site-data"

export function TopBar() {
  return (
    <div className="bg-black text-white py-3 px-4">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex justify-center space-x-6 md:mb-0">
            <CopyToClipboard
              value={companyInfo.contact.phone}
              icon={<Phone className="h-5 w-5" />}
              label="Phone number"
            />
            <CopyToClipboard
              value={companyInfo.contact.email}
              icon={<Mail className="h-5 w-5" />}
              label="Email address"
            />
            <CopyToClipboard
              value={companyInfo.contact.address}
              icon={<MapPin className="h-5 w-5" />}
              label="Address"
            />
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <Link href={companyInfo.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href={companyInfo.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href={companyInfo.social.yelp} aria-label="Yelp" target="_blank" rel="noopener noreferrer">
              <YelpIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}