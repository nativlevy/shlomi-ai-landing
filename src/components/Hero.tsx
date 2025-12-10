import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-surface border border-border rounded-full px-3 py-1 mb-8 backdrop-blur-sm animate-fade-in hover:bg-surface-hover transition-colors cursor-default shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm text-text-main font-medium">Now accepting early access</span>
          <ChevronRight className="w-4 h-4 text-text-muted" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-main mb-8 animate-slide-up leading-tight">
          Master clinical psychology <br />
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">with AI simulations</span>
        </h1>

        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Experience realistic patient scenarios, receive real-time supervision feedback, and build your confidence before seeing real patients.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link to="/signup" className="group w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-all shadow-lg shadow-primary/25 flex items-center justify-center">
            Start Training Now
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-background hover:bg-surface-hover border border-border text-text-main rounded-full font-medium transition-all flex items-center justify-center shadow-sm">
            <Play className="w-4 h-4 mr-2 text-text-muted" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Hero Image / Mock Interface */}
      <div className="mt-24 max-w-5xl mx-auto px-4 relative z-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="rounded-xl bg-surface border border-border p-2 shadow-2xl shadow-primary/5 backdrop-blur-xl">
          <div className="rounded-lg bg-background border border-border overflow-hidden aspect-[16/9] relative shadow-inner">
            {/* Mock Chat Interface */}
            <div className="absolute inset-0 flex flex-col">
              {/* Header */}
              <div className="h-12 border-b border-border flex items-center px-4 justify-between bg-surface/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 text-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 text-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 text-green-500"></div>
                </div>
                <div className="text-xs text-text-muted">Simulate: Anxiety Disorder Case #42</div>
              </div>
              {/* Chat Area */}
              <div className="flex-1 p-6 space-y-6 overflow-hidden">
                {/* Bot Message */}
                <div className="flex space-x-4 max-w-2xl">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-400">AI</div>
                  <div className="flex-1 space-y-2">
                    <div className="bg-surface rounded-2xl rounded-tl-none p-4 text-sm text-text-main">
                      I've been feeling really overwhelmed lately. Even small tasks feel impossible, and I just freeze up. I don't know why this is happening to me.
                    </div>
                  </div>
                </div>
                {/* User Message */}
                <div className="flex space-x-4 max-w-2xl ml-auto flex-row-reverse space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary">You</div>
                  <div className="flex-1 space-y-2">
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-none p-4 text-sm text-text-main">
                      It sounds like you're carrying a heavy burden right now. When you say you "freeze up," can you tell me more about what that feels like in your body?
                    </div>
                  </div>
                </div>
                {/* Feedback Toast */}
                <div className="absolute bottom-8 right-8 max-w-xs p-4 bg-surface/90 backdrop-blur border border-green-500/20 rounded-lg shadow-xl translate-y-0 opacity-100 transition-all">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    <div>
                      <p className="text-xs font-bold text-text-main mb-1">Excellent Intervention</p>
                      <p className="text-xs text-text-muted">Good use of somatic inquiry to ground the patient's experience. This helps deepen emotional awareness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

