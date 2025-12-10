import { CheckCircle2 } from "lucide-react"

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
    <section id="method" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
            How Shlomi AI Works
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Get started in minutes and see immediate improvements in your
            clinical confidence and preparation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"
                    }`}>
                    <h3 className="text-2xl font-bold text-text-main mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-lg leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Number Bubble */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-surface border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(94,106,210,0.3)]">
                    <span className="text-xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="text-text-main font-medium">
              Limited spots available • Early access benefits • Join today
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

