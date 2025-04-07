import { Phone } from "lucide-react"

// Import site data
import { companyInfo, bookingContent } from "@/lib/site-data"

// Update imports to include our new PageLayout component
import { PageLayout } from "@/components/page-layout"

// Replace the entire component with:
export default function BookingPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4 text-center">{bookingContent.heading}</h1>

          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">{bookingContent.intro}</p>

          {/* Two-column layout for desktop */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Important Information Section - Left Column */}
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold text-primary mb-4">{bookingContent.importantInfo.heading}</h3>
              <ul className="space-y-3 text-gray-700">
                {bookingContent.importantInfo.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="flex-shrink-0 w-[20px] h-[20px] text-primary mt-1 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-primary mb-2">{bookingContent.importantInfo.questions.heading}</h4>
                <p
                  className="text-gray-700 text-sm mb-4"
                  dangerouslySetInnerHTML={{ __html: bookingContent.importantInfo.questions.text }}
                />
                <div className="flex items-center text-sm text-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{companyInfo.contact.phoneFormatted}</span>
                </div>
              </div>
            </div>

            {/* Acuity Scheduling iframe container - Right Column */}
            <div className="w-full bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm min-h-[600px]">
              <iframe src="https://app.acuityscheduling.com/schedule.php?owner=34861224&ref=embedded_csp" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

