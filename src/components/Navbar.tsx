import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', path: '/#features' },
        { name: 'Method', path: '/#method' },
        { name: 'Customers', path: '/#customers' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Company', path: '/about' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-background/80 backdrop-blur-md border-border'
                    : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-text-main font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">
                                Shlomi AI
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                to="/login"
                                className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                className="group flex items-center space-x-1.5 px-4 py-2 text-sm font-medium text-text-main bg-background hover:bg-surface-hover border border-border rounded-full transition-all shadow-sm"
                            >
                                <span>Sign up</span>
                                <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-text-muted hover:text-text-main"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background pt-20 px-4 md:hidden"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-text-muted hover:text-text-main p-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-border my-4" />
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-text-muted hover:text-text-main p-2"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full flex justify-center py-3 text-base font-medium text-white bg-primary hover:bg-primary-hover rounded-full transition-colors"
                            >
                                Sign up
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
