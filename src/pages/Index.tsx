import { Button } from '@/components/ui/button';
import { Download, Github, Palette, Zap, Eye, Settings, Monitor } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import { useLatestRelease } from '@/hooks/useLatestRelease';
import heroBanner from '@/assets/hero-banner.png';

const Index = () => {
  const { downloadUrl, version, loading } = useLatestRelease();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Pick Colors with
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Precision
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                SimplePicker is a powerful system tray utility that makes color selection effortless. Pick any color from your screen, manage palettes, and copy values instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-8 py-6" 
                  asChild
                  disabled={loading || !downloadUrl}
                >
                  <a href={downloadUrl || "#"} id="download">
                    <Download className="mr-2 h-5 w-5" />
                    {loading ? 'Loading...' : `Download ${version || 'Latest'}`}
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="https://github.com/NSTechBytes/simple-picker">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroBanner} 
                alt="SimplePicker interface preview"
                className="relative rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-secondary-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for efficient color management, right in your system tray
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Eye}
              title="Screen Picker"
              description="Pick any color from anywhere on your screen with pixel-perfect precision"
            />
            <FeatureCard
              icon={Palette}
              title="Color Selector"
              description="Interactive color wheel with brightness control and instant preview"
            />
            <FeatureCard
              icon={Zap}
              title="Instant Copy"
              description="Automatically copy HEX and RGB values to your clipboard"
            />
            <FeatureCard
              icon={Settings}
              title="Customizable"
              description="Set custom hotkeys, popup settings, and personalize your workflow"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Download SimplePicker today and streamline your color workflow. It's free, lightweight, and designed for professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6" 
              asChild
              disabled={loading || !downloadUrl}
            >
              <a href={downloadUrl || "#"}>
                <Download className="mr-2 h-5 w-5" />
                {loading ? 'Loading...' : `Download for Windows ${version || ''}`}
              </a>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Monitor className="mr-2 h-5 w-5" />
                  System Requirements
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>System Requirements</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Minimum Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Windows 10 or later</li>
                      <li>• .NET Framework 4.7.2 or higher</li>
                      <li>• 50 MB free disk space</li>
                      <li>• 512 MB RAM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Windows 11</li>
                      <li>• .NET Framework 4.8</li>
                      <li>• 1 GB RAM</li>
                      <li>• Dual monitor setup (for enhanced productivity)</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <Button 
                      asChild 
                      className="w-full"
                      disabled={loading || !downloadUrl}
                    >
                      <a href={downloadUrl || "#"}>
                        <Download className="mr-2 h-4 w-4" />
                        {loading ? 'Loading...' : `Download ${version || 'Latest'}`}
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
