import { Button } from '@/components/ui/button';
import { Download, Eye, Palette, Settings, Monitor, Keyboard, Clock, Zap, RotateCcw, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useLatestRelease } from '@/hooks/useLatestRelease';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import colorSelectorDemo from '@/assets/color-selector-demo.png';
import screenPickerDemo from '@/assets/screen-picker-demo.png';
import trayMenuDemo from '@/assets/tray-menu-demo.png';

const Features = () => {
  const { downloadUrl, version, loading } = useLatestRelease();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Features</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover all the powerful features that make SimplePicker the ultimate color picking tool for developers and designers.
          </p>
        </div>
      </section>

      {/* System Tray Menu */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">System Tray Menu</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                SimplePicker runs quietly in your system tray, ready whenever you need it. Access all features through a clean, intuitive menu.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Eye className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Pick color from screen</h3>
                    <p className="text-sm text-muted-foreground">Select any color from your display</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Palette className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Color selector</h3>
                    <p className="text-sm text-muted-foreground">Interactive color wheel interface</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Settings</h3>
                    <p className="text-sm text-muted-foreground">Customize your experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Monitor className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Check for updates</h3>
                    <p className="text-sm text-muted-foreground">Stay up to date automatically</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl"></div>
                <img 
                  src={trayMenuDemo} 
                  alt="System tray menu interface"
                  className="relative rounded-2xl shadow-xl border border-border/50 w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Selector */}
      <section className="py-20 bg-secondary-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl"></div>
                <img 
                  src={colorSelectorDemo} 
                  alt="Color selector interface with color wheel"
                  className="relative rounded-2xl shadow-xl border border-border/50 w-full max-w-md mx-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Interactive Color Selector</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Choose colors with precision using our beautiful color wheel interface. See live previews and get instant color values.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Palette className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Interactive color wheel</h3>
                    <p className="text-sm text-muted-foreground">Smooth, responsive color selection with HSB controls</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Eye className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Live color preview</h3>
                    <p className="text-sm text-muted-foreground">See your selected color in real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Copy HEX and RGB values</h3>
                    <p className="text-sm text-muted-foreground">One-click copying of color values in multiple formats</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Brightness adjustment slider</h3>
                    <p className="text-sm text-muted-foreground">Fine-tune brightness and saturation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Picker */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Pick Color from Screen</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Capture any color from anywhere on your screen with pixel-perfect accuracy. The magnifier tool helps you select exactly the right color.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Eye className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Magnifier tool</h3>
                    <p className="text-sm text-muted-foreground">Zoom in for precise color selection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Monitor className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Color popup display</h3>
                    <p className="text-sm text-muted-foreground">Instant preview of selected color with values</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Automatic clipboard copy</h3>
                    <p className="text-sm text-muted-foreground">RGB and HEX values copied automatically</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Keyboard className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Custom hotkey support</h3>
                    <p className="text-sm text-muted-foreground">Quick access with your preferred key combinations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl"></div>
                <img 
                  src={screenPickerDemo} 
                  alt="Screen color picker with magnifier"
                  className="relative rounded-2xl shadow-xl border border-border/50 w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Settings */}
      <section className="py-20 bg-secondary-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Powerful Settings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customize SimplePicker to fit your workflow perfectly. Set hotkeys, configure popups, and personalize every aspect of your color picking experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Keyboard}
              title="Custom Hotkeys"
              description="Assign keyboard shortcuts for quick access to screen picker and color selector functions"
            />
            <FeatureCard
              icon={Clock}
              title="Popup Duration"
              description="Control how long color information popups remain visible on screen"
            />
            <FeatureCard
              icon={Monitor}
              title="Always on Top"
              description="Keep color popups above all other windows for better visibility"
            />
            <FeatureCard
              icon={Download}
              title="Automatic Updates"
              description="Enable or disable automatic updates and set check frequency"
            />
            <FeatureCard
              icon={Settings}
              title="Startup Options"
              description="Configure SimplePicker to launch automatically when Windows starts"
            />
            <FeatureCard
              icon={RotateCcw}
              title="Reset Settings"
              description="Easily restore all settings to their default values with one click"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience All Features</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Download SimplePicker now and discover how these powerful features can streamline your color workflow.
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
      </section>

      <Footer />
    </div>
  );
};

export default Features;