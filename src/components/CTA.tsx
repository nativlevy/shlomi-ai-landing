import { Button } from "./ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function CTA() {
  const handleJoinWaitlist = () => {
    window.location.href = "mailto:contact@shlomiai.com?subject=Join Shlomi AI Waitlist&body=Hi, I'm interested in joining the Shlomi AI waitlist. Please send me access when available.%0D%0A%0D%0AName:%0D%0ARole:%0D%0AInstitution:"
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
          <Mail className="h-12 w-12" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your Clinical Practice?
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto">
          Join the waitlist and be among the first to access Shlomi AI when we launch.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            onClick={handleJoinWaitlist}
            className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl text-lg px-10 py-7 h-auto"
          >
            Join Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleJoinWaitlist}
            className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 h-auto"
          >
            Contact Us
          </Button>
        </div>

        {/* Trust elements */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-blue-200 text-sm">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Early access</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Priority support</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Exclusive benefits</span>
          </div>
        </div>
      </div>
    </section>
  )
}
