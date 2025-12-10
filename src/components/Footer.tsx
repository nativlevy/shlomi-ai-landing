import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-text-main font-semibold text-lg tracking-tight">
                Shlomi AI
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
              Empowering the next generation of psychologists with AI-powered training and professional development.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="mailto:contact@shlomiai.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            </div>
          </div>

          <div>
            <h3 className="font-medium text-text-main mb-4">Product</h3>
            <ul className="space-y-3">
              <FooterLink to="/#features">Features</FooterLink>
              <FooterLink to="/#method">Method</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/changelog">Changelog</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-text-main mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-text-main mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink to="/privacy">Privacy</FooterLink>
              <FooterLink to="/terms">Terms</FooterLink>
              <FooterLink to="/security">Security</FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Shlomi AI Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>All systems operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="text-text-muted hover:text-text-main transition-colors p-2 hover:bg-surface-hover rounded-full"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-text-muted text-sm hover:text-primary transition-colors block"
      >
        {children}
      </Link>
    </li>
  );
}
