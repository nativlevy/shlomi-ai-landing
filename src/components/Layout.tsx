import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useEffect } from 'react';

export function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-background text-text-main selection:bg-primary selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-16 relative">
                {/* Ambient background glow */}
                <div className="fixed top-0 left-0 right-0 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 z-0 opacity-50" />
                <div className="relative z-10 h-full">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
