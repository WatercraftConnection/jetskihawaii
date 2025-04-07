'use client'

interface GoogleMapProps {
  className?: string
}

export function GoogleMap({ className = '' }: GoogleMapProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.801201283601!2d-158.104166!3d21.593681699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0059bc6a3a3f9d%3A0xeb2c3be9c44e32c1!2sThe%20Watercraft%20Connection!5e0!3m2!1sen!2sus!4v1742150903568!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={className}
      title="The Watercraft Connection Location"
    />
  )
} 