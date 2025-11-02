import { Mail, ArrowRight } from "lucide-react"

export function CTA() {
  const mailtoLink = "mailto:hello@shlomiai.com?subject=I am interested in Shlomi AI&body=Hi,%0D%0A%0D%0AI am interested in joining Shlomi AI.%0D%0A%0D%0AName:%0D%0ARole:%0D%0AInstitution:%0D%0A%0D%0AThank you!"

  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex p-5 bg-white/10 backdrop-blur-md rounded-2xl mb-8 shadow-soft-lg border border-white/10">
          <Mail className="h-14 w-14" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight font-display">
          Ready to Transform Your Clinical Practice?
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-12 text-primary-50/90 max-w-3xl mx-auto leading-relaxed font-body">
          Join the waitlist and be among the first to access Shlomi AI when we launch.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center mb-10">
          <a
            href={mailtoLink}
            className="inline-flex items-center justify-center bg-white text-primary-700 hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-soft-xl text-base font-semibold px-12 py-7 rounded-xl no-underline"
          >
            Join Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
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
