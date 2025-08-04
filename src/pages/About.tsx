import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Github, Palette, Target, Users, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Palette className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-5xl font-bold mb-6">About SimplePicker</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              SimplePicker was born from the need for a reliable, efficient color picking tool that stays out of your way while providing powerful functionality when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                To provide designers and developers with the most intuitive and powerful color picking experience possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 bg-feature-gradient">
                <CardHeader>
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Precision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pixel-perfect color selection with advanced magnification and precise controls for professional accuracy.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-feature-gradient">
                <CardHeader>
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Streamlined workflow with instant color copying, custom hotkeys, and system tray integration.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-feature-gradient">
                <CardHeader>
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Simplicity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Clean, intuitive interface that's powerful enough for professionals yet simple for everyone.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-secondary-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">The Story Behind SimplePicker</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a developer working on various design projects, I found myself constantly switching between different color picking tools, none of which provided the perfect balance of simplicity and functionality I needed.
                  </p>
                  <p>
                    Some tools were too complex with unnecessary features, while others lacked the precision required for professional work. I wanted something that would run quietly in the system tray, provide instant access to color picking, and just work reliably every time.
                  </p>
                  <p>
                    SimplePicker was built to fill this gap - a lightweight, powerful color picking utility that focuses on doing one thing exceptionally well: helping you capture and work with colors efficiently.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-0 bg-feature-gradient">
                  <CardHeader>
                    <CardTitle className="text-xl">Built for Professionals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Designed by a developer, for developers and designers who need reliable color tools in their daily workflow.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-feature-gradient">
                  <CardHeader>
                    <CardTitle className="text-xl">Continuously Improved</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Regular updates based on user feedback ensure SimplePicker evolves with your needs and the latest technology.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Technical Specifications</h2>
              <p className="text-xl text-muted-foreground">
                Built with modern .NET technology for reliability and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">System Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Windows 10 or later</li>
                  <li>• .NET Framework 4.7.2 or higher</li>
                  <li>• Minimal system resources (under 10MB RAM)</li>
                  <li>• Compatible with multiple monitors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Key Technologies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Built with C# and .NET Framework</li>
                  <li>• Native Windows API integration</li>
                  <li>• Efficient system tray implementation</li>
                  <li>• Modern UI with smooth animations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Try SimplePicker?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of designers and developers who rely on SimplePicker for their color workflow needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://github.com/NSTechBytes/simple-picker/releases/latest">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://github.com/NSTechBytes/simple-picker">
                <Github className="mr-2 h-5 w-5" />
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;