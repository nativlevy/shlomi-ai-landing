import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
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
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-display">
            Everything You Need to Excel
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-body">
            Comprehensive tools designed specifically for early-career psychologists
            to build confidence and competence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group border border-gray-100 bg-white hover:border-primary-200 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="mb-5 inline-flex p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-display font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed font-body">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
