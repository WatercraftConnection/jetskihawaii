"use client"

import type React from "react"
import { CopyToClipboard } from "@/components/copy-to-clipboard"
import { Mail, MapPin } from "lucide-react"

interface ContactInfoItemProps {
  value: string
  type: "phone" | "email" | "address"
  children: React.ReactNode
}

export function ContactInfoItem({ value, type, children }: ContactInfoItemProps) {
  // For phone numbers, create a tel: link
  if (type === "phone") {
    return (
      <span className="inline-block">
        <a href={`tel:${value}`} className="hover:text-primary transition-colors">
          {children}
        </a>
      </span>
    )
  }

  // For email, use CopyToClipboard with Mail icon
  if (type === "email") {
    return (
      <span className="inline-block">
        <CopyToClipboard value={value} icon={<Mail className="h-4 w-4" />} label="Email address">
          {children}
        </CopyToClipboard>
      </span>
    )
  }

  // For address, use CopyToClipboard with MapPin icon
  return (
    <span className="inline-block">
      <CopyToClipboard value={value} icon={<MapPin className="h-4 w-4" />} label="Address">
        {children}
      </CopyToClipboard>
    </span>
  )
}

