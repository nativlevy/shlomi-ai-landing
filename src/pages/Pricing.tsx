import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '$0',
        description: 'Perfect for exploring Shlomi AI.',
        features: ['Access to basic AI modules', 'Community support', '1 Active Project', 'Basic Analytics'],
        button: 'Get Started'
    },
    {
        name: 'Professional',
        price: '$29',
        description: 'For psychology professionals seeking growth.',
        features: ['Advanced AI Training Models', 'Priority email support', 'Unlimited Projects', 'Deep Analytics & Insights', 'Custom feedback capability'],
        button: 'Start Free Trial',
        popular: true
    },
    {
        name: 'Organization',
        price: '$99',
        description: 'For clinics and research teams.',
        features: ['Everything in Professional', 'Team management dashboard', 'API Access', 'SSO Integration', 'Dedicated Success Manager'],
        button: 'Contact Sales'
    }
];

export function Pricing() {
    return (
        <div className="min-h-[80vh] py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-main">
                    Simple, transparent pricing
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    Choose the plan that best fits your professional needs. No hidden fees. Cancel anytime.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${plan.popular
                            ? 'border-primary/30 bg-primary/5 shadow-soft-lg shadow-primary/10'
                            : 'border-border bg-surface hover:border-primary/20 hover:shadow-lg'
                            } flex flex-col`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/25">
                                MOST POPULAR
                            </div>
                        )}
                        <h3 className="text-xl font-medium text-text-main mb-2">{plan.name}</h3>
                        <div className="mb-4 flex items-baseline">
                            <span className="text-4xl font-bold text-text-main tracking-tight">{plan.price}</span>
                            <span className="text-text-muted ml-2">/month</span>
                        </div>
                        <p className="text-text-muted mb-8 text-sm leading-relaxed">{plan.description}</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start text-sm text-text-main/90">
                                    <div className="mt-0.5 mr-3 p-0.5 rounded-full bg-primary/20">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${plan.popular
                            ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20'
                            : 'bg-background border border-border text-text-main hover:bg-surface-hover'
                            }`}>
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
