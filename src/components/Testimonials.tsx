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
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Future Leaders in Psychology
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what young psychologists are saying about their experience with Shlomi AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              500+
            </p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              10,000+
            </p>
            <p className="text-gray-600">Practice Sessions Completed</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              4.9/5
            </p>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
