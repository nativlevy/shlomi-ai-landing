
export function Contact() {
    return (
        <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Get in touch</h1>
                <p className="text-text-muted">
                    Have questions about Shlomi AI? We'd love to hear from you.
                </p>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-text-muted mb-2">First name</label>
                        <input
                            type="text"
                            id="first-name"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                            placeholder="Sarah"
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-text-muted mb-2">Last name</label>
                        <input
                            type="text"
                            id="last-name"
                            className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            placeholder="Connor"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="sarah@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                        placeholder="How can we help you?"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}
