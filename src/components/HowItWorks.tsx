import { CheckCircle2, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Join the Waitlist",
    description: "Send us an email to join the waitlist. Tell us about your specialization, experience level, and what you're hoping to achieve with AI-powered training.",
  },
  {
    number: "02",
    title: "Get Early Access",
    description: "We'll review your application and send you an access link to the platform. Early members will help shape the future of Shlomi AI.",
  },
  {
    number: "03",
    title: "Set Up Your Profile",
    description: "Once you have access, create your profile and tell us about your professional goals. Our AI will customize your training experience from day one.",
  },
  {
    number: "04",
    title: "Start Training",
    description: "Begin preparing for sessions with AI-powered insights, practice with simulated scenarios, and track your professional growth over time.",
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full">
            <CheckCircle2 className="h-5 w-5 text-primary-600" />
            <span className="text-primary-700 font-medium">
              Limited spots available • Early access benefits • Join today
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
