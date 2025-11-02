import { CheckCircle2, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Sign Up & Set Your Profile",
    description: "Create your account and tell us about your specialization, experience level, and professional goals. Our AI customizes your experience from day one.",
  },
  {
    number: "02",
    title: "Prepare for Sessions",
    description: "Before each client meeting, input basic session details. Shlomi AI provides personalized preparation materials, suggested approaches, and relevant research.",
  },
  {
    number: "03",
    title: "Practice & Learn",
    description: "Use our AI-simulated scenarios to practice difficult conversations, test interventions, and build your therapeutic skills in a safe environment.",
  },
  {
    number: "04",
    title: "Track Your Growth",
    description: "Review your progress dashboard to see skill improvements, completed training modules, and personalized recommendations for continued development.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Shlomi AI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and see immediate improvements in your
            clinical confidence and preparation.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">
              No credit card required • 14-day free trial • Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
