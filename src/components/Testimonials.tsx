import { Card, CardContent } from "./ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Clinical Psychology Resident",
    content: "Shlomi AI has been a game-changer for my training. The practice scenarios helped me prepare for challenging client situations I hadn't encountered yet. I feel so much more confident going into sessions now.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Psychology Graduate Student",
    content: "The AI-powered session prep saves me hours each week. It surfaces relevant research and techniques I might have missed. It's like having a senior supervisor available 24/7.",
    rating: 5,
  },
  {
    name: "Dr. Emily Thompson",
    role: "Early Career Therapist",
    content: "As someone who recently started private practice, Shlomi AI gives me the confidence boost I need. The progress tracking shows me how far I've come, and the personalized recommendations keep me growing.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-display">
            Trusted by Future Leaders in Psychology
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-body">
            See what young psychologists are saying about their experience with Shlomi AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-100 bg-white hover:border-primary-200 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 rounded-2xl"
            >
              <CardContent className="pt-8">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 mb-8 leading-relaxed text-base font-body">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-100 pt-5">
                  <p className="font-semibold text-gray-900 font-display">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 font-body">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <p className="text-5xl md:text-6xl font-bold text-primary-600 mb-3 font-display group-hover:scale-110 transition-transform duration-300">
              500+
            </p>
            <p className="text-gray-600 text-lg font-body">Active Users</p>
          </div>
          <div className="group">
            <p className="text-5xl md:text-6xl font-bold text-primary-600 mb-3 font-display group-hover:scale-110 transition-transform duration-300">
              10,000+
            </p>
            <p className="text-gray-600 text-lg font-body">Practice Sessions Completed</p>
          </div>
          <div className="group">
            <p className="text-5xl md:text-6xl font-bold text-primary-600 mb-3 font-display group-hover:scale-110 transition-transform duration-300">
              4.9/5
            </p>
            <p className="text-gray-600 text-lg font-body">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
