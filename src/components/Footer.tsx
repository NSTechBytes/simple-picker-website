import { Github, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import simplePickerLogo from '@/assets/simplepicker-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={simplePickerLogo} alt="SimplePicker Logo" className="h-6 w-6" />
              <span className="font-bold text-lg bg-primary-gradient bg-clip-text text-transparent">
                SimplePicker
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A powerful system tray color picker utility for Windows. Pick colors from anywhere on your screen with precision and ease.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/NSTechBytes/simple-picker" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for developers and designers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;