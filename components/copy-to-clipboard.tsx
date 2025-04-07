"use client"

import type React from "react"

import { useState } from "react"
// import { Check } from "lucide-react"

interface CopyToClipboardProps {
  value: string
  icon: React.ReactNode
  label: string
  children?: React.ReactNode
}

export function CopyToClipboard({ value, icon, label, children }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  // Determine notification title and message based on label
  const getNotificationContent = () => {
    switch (label.toLowerCase()) {
      case "phone number":
        return {
          title: "Phone number copied!",
          message: "The phone number has been copied to your clipboard.",
        }
      case "email address":
        return {
          title: "Email copied!",
          message: "The email address has been copied to your clipboard.",
        }
      case "address":
        return {
          title: "Map Address copied!",
          message: "The map address has been copied to your clipboard.",
        }
      default:
        return {
          title: "Copied!",
          message: "The information has been copied to your clipboard.",
        }
    }
  }

  const notificationContent = getNotificationContent()

  return (
    <>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 hover:text-secondary transition-colors"
        aria-label={`Copy ${label} to clipboard`}
      >
        {icon}
        {children ? <span>{children}</span> : <span className="sr-only">{label}</span>}
      </button>

      {copied && (
        <div className="fixed bottom-6 right-6 bg-white text-black py-4 px-5 rounded-lg shadow-lg w-64 z-50">
          <div className="flex flex-col">
            <div className="font-semibold text-base mb-1">{notificationContent.title}</div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {/* <Check className="h-4 w-4 text-black bg-black rounded-full p-0.5 text-white" /> */}
              <span>{notificationContent.message}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

