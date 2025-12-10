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
    <section id="customers" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
            Trusted by Future Leaders
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            See what young psychologists are saying about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-border/80 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-text-main mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-sm font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-text-main text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-border pt-12">
          <div>
            <p className="text-4xl font-bold text-text-main mb-2">500+</p>
            <p className="text-text-muted">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-text-main mb-2">10k+</p>
            <p className="text-text-muted">Practice Sessions</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-text-main mb-2">4.9/5</p>
            <p className="text-text-muted">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

