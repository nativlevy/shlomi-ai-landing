
export function Privacy() {
    return (
        <div className="max-w-3xl mx-auto py-24 px-4 sm:px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text-main">Privacy Policy</h1>
            <p className="text-text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-text-muted leading-relaxed">
                <p>
                    At Shlomi AI, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you use our services.
                </p>

                <section>
                    <h2 className="text-xl font-semibold text-text-main mb-4">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This includes your name, email address, and any other information you choose to provide.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-text-main mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We do not sell your personal data to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-text-main mb-4">3. Data Security</h2>
                    <p>
                        We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet is 100% secure.
                    </p>
                </section>
            </div>
        </div>
    )
}
