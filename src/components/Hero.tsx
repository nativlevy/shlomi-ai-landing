import { Button } from "./ui/button"
import { Brain, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white py-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
              <Brain className="h-10 w-10" />
            </div>
            <h1 className="text-5xl font-bold">Shlomi AI</h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Young Psychologists
            <span className="block mt-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              with AI-Powered Training
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Transform your clinical practice with intelligent session preparation,
            real-time insights, and personalized training scenarios powered by advanced AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-6 h-auto"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="mt-8 text-blue-200 text-sm">
            Trusted by 500+ psychology students and early-career professionals
          </p>
        </div>
      </div>
    </section>
  )
}
