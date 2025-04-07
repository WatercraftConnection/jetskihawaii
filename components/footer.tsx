import { Phone, Mail, MapPin } from "lucide-react"
import { CopyToClipboard } from "@/components/copy-to-clipboard"
import { companyInfo } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <div className="text-center">
            <h2 className="text-sm tracking-wider">H A W A I I &apos; s</h2>
            <div className="logo-text text-secondary text-3xl font-bold mb-1">Watercraft</div>
            <h2 className="text-sm tracking-wider">C O N N E C T I O N</h2>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <CopyToClipboard
            value={companyInfo.contact.phone}
            icon={<Phone className="h-4 w-4" />}
            label="Phone number"
          />
          <CopyToClipboard
            value={companyInfo.contact.email}
            icon={<Mail className="h-4 w-4" />}
            label="Email address"
          />
          <CopyToClipboard value={companyInfo.contact.address} icon={<MapPin className="h-4 w-4" />} label="Address" />
        </div>
        <p className="text-sm">
          © {companyInfo.year} {companyInfo.name}
        </p>
        <p className="text-sm mt-1" style={{ color: "#4d4d4d" }}>
          {companyInfo.designCredit.text1}{" "}
          <a
            href={companyInfo.designCredit.url1}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-secondary transition-colors"
          >
            {companyInfo.designCredit.company1}
          </a>
          {" "}
          {companyInfo.designCredit.text2}{" "}
          <a
            href={companyInfo.designCredit.url2}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-secondary transition-colors"
          >
            {companyInfo.designCredit.company2}
          </a>
          {"."}
        </p>
      </div>
    </footer>
  )
}

