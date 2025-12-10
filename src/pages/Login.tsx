import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
            <div className="w-full max-w-md">
                <Link to="/" className="inline-flex items-center text-sm text-text-muted hover:text-text-main mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="bg-surface border border-border p-8 rounded-2xl shadow-xl shadow-primary/5">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-text-main mb-2">Welcome back</h1>
                        <p className="text-text-muted text-sm">Sign in to your account to continue</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1.5">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-main placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-text-muted mb-1.5">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-main placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-medium py-2.5 rounded-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
                        >
                            Sign in
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-text-muted">Don't have an account? </span>
                        <Link to="/signup" className="text-primary hover:text-primary-hover font-medium">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
