import { BrainCircuit, MessageSquare, Target, TrendingUp, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: BrainCircuit,
    title: "AI Session Preparation",
    description: "Get intelligent insights and preparation materials before each client meeting. Our AI analyzes session history and suggests talking points.",
  },
  {
    icon: MessageSquare,
    title: "Practice Scenarios",
    description: "Engage with realistic AI-simulated client scenarios to practice therapeutic techniques and build confidence before real sessions.",
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description: "Receive tailored training recommendations based on your specialization, experience level, and areas for improvement.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your professional development with detailed analytics on your strengths, growth areas, and skill progression over time.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your client data is protected with enterprise-grade security. All interactions are encrypted and fully compliant with privacy regulations.",
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Access research-backed therapeutic approaches and intervention strategies in real-time to enhance your clinical decision-making.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6 tracking-tight">
            Everything You Need <span className="text-text-muted">to Excel</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Comprehensive tools designed specifically for early-career psychologists
            to build confidence and competence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-border/80 transition-all duration-300 hover:bg-surface-hover hover:shadow-lg"
              >
                <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-text-main mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

