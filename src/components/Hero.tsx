import { Button } from "./ui/button"
import { Brain, Mail } from "lucide-react"

export function Hero() {
  const handleJoinWaitlist = () => {
    window.location.href = "mailto:contact@shlomiai.com?subject=Join Shlomi AI Waitlist&body=Hi, I'm interested in joining the Shlomi AI waitlist. Please send me access when available.%0D%0A%0D%0AName:%0D%0ARole:%0D%0AInstitution:"
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 md:py-32 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-soft-lg border border-white/10">
              <Brain className="h-12 w-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-display">Shlomi AI</h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight font-display animate-slide-up">
            Empowering Young Psychologists
            <span className="block mt-3 text-primary-100">
              with AI-Powered Training
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-12 text-primary-50/90 max-w-3xl mx-auto leading-relaxed font-body animate-slide-up" style={{animationDelay: '0.1s'}}>
            Transform your clinical practice with intelligent session preparation,
            real-time insights, and personalized training scenarios powered by advanced AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-scale-in" style={{animationDelay: '0.2s'}}>
            <Button
              size="lg"
              onClick={handleJoinWaitlist}
              className="bg-white text-primary-700 hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-soft-xl hover:shadow-soft-xl text-base font-semibold px-10 py-7 h-auto rounded-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Join Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleJoinWaitlist}
              className="border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 text-base font-semibold px-10 py-7 h-auto rounded-xl"
            >
              Request Access
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="mt-10 text-primary-100/80 text-sm font-medium tracking-wide animate-fade-in" style={{animationDelay: '0.3s'}}>
            Join 500+ psychology students on the waitlist
          </p>
        </div>
      </div>
    </section>
  )
}
