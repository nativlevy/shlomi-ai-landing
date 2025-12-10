
export function Terms() {
    return (
        <div className="max-w-3xl mx-auto py-24 px-4 sm:px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text-main">Terms of Service</h1>
            <p className="text-text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-text-muted leading-relaxed">
                <p>
                    By accessing or using Shlomi AI, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>

                <section>
                    <h2 className="text-xl font-semibold text-text-main mb-4">1. Acceptance of Terms</h2>
                    <p>
                        If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-text-main mb-4">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Shlomi AI's website for personal, non-commercial transitory viewing only.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-text-main mb-4">3. Disclaimer</h2>
                    <p>
                        The materials on Shlomi AI's website are provided on an 'as is' basis. Shlomi AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>
            </div>
        </div>
    )
}
