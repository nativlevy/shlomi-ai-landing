import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 p-[1px] shadow-2xl shadow-primary/20">
          <div className="rounded-[23px] bg-[#0A0A0A] p-12 md:p-20 text-center relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://linear.app/_next/static/media/hero-background.5146909c.jpg')] bg-cover opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-sm text-white font-medium">Limited time offer</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Ready to transform your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">clinical practice?</span>
              </h2>

              <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
                Join thousands of psychology students and professionals using Shlomi AI to master their skills and build confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl shadow-white/10"
                >
                  Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Contact Sales
                </Link>
              </div>

              <p className="mt-8 text-sm text-text-muted">
                No credit card required · 14-day free trial · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

