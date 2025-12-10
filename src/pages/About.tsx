
export function About() {
    return (
        <div className="max-w-5xl mx-auto py-24 px-4 sm:px-6">
            <div className="mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-text-main">
                    Revolutionizing <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Psychology Training</span>
                </h1>
                <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                    Shlomi AI was born from a simple observation: the gap between academic study and clinical practice is too wide.
                    We use advanced artificial intelligence to create realistic, safe simulations for the next generation of therapists.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-24">
                <div className="p-8 rounded-2xl bg-surface border border-border">
                    <h2 className="text-2xl font-semibold text-text-main mb-4">Our Mission</h2>
                    <p className="text-text-muted leading-relaxed">
                        To empower every psychology student and professional with on-demand, high-fidelity clinical training.
                        We believe that practice shouldn't be limited by availability of supervisors or standardized patients.
                    </p>
                </div>
                <div className="p-8 rounded-2xl bg-surface border border-border">
                    <h2 className="text-2xl font-semibold text-text-main mb-4">Our Technology</h2>
                    <p className="text-text-muted leading-relaxed">
                        Built on cutting-edge Large Language Models, fine-tuned specifically for clinical psychology contexts.
                        Our AI simulates diverse patient profiles, pathologies, and conversational nuances with unprecedented realism.
                    </p>
                </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-[400px] border border-border">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-3xl font-bold text-white">Built by therapists, for therapists.</h3>
                </div>
                {/* Placeholder for an image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-800" />
            </div>
        </div>
    )
}
