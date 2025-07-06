
import React from 'react';
import { ChevronDown, Code, Users, Zap, Target, CheckCircle, XCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Cursurf</div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('opportunity')} className="text-white/80 hover:text-white transition-colors">Opportunity</button>
              <button onClick={() => scrollToSection('solution')} className="text-white/80 hover:text-white transition-colors">Solution</button>
              <button onClick={() => scrollToSection('traction')} className="text-white/80 hover:text-white transition-colors">Traction</button>
              <button onClick={() => scrollToSection('ask')} className="text-white/80 hover:text-white transition-colors">The Ask</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
              Cursurf
            </h1>
            <p className="text-2xl md:text-3xl text-purple-200 mb-8 animate-fade-in">
              AI Coding for Ruby on Rails
            </p>
            <p className="text-xl md:text-2xl text-white/80 mb-12 animate-fade-in">
              "Code with AI that actually understands your app."
            </p>
            <div className="text-lg text-white/60 mb-16">
              <p>Founded by [Your Name]</p>
              <p>www.cursurf.com</p>
            </div>
            <Button 
              onClick={() => scrollToSection('opportunity')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full"
            >
              Explore the Vision
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              The Opportunity: AI Coding is the Future, But...
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Zap className="mx-auto mb-4 text-yellow-400" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-4">AI Coding Revolution</h3>
                  <p className="text-white/80">AI coding (aka Vibe coding) is the most exciting frontier in software development.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Code className="mx-auto mb-4 text-blue-400" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-4">Leading Tools</h3>
                  <p className="text-white/80">Tools like Cursor, Windsurf, Claude Code are leading the wave.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <XCircle className="mx-auto mb-4 text-red-400" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-4">Fatal Flaw</h3>
                  <p className="text-white/80">But they all suffer from one fatal flaw: they can't reliably edit existing code.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              The Problem: AI Still Doesn't Understand Codebases
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">Current tools fail on:</h3>
                <ul className="space-y-4 text-lg text-white/80">
                  <li className="flex items-center">
                    <XCircle className="text-red-400 mr-3" size={20} />
                    Small feature updates
                  </li>
                  <li className="flex items-center">
                    <XCircle className="text-red-400 mr-3" size={20} />
                    Code refactoring
                  </li>
                  <li className="flex items-center">
                    <XCircle className="text-red-400 mr-3" size={20} />
                    Working with teams
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Why?</h3>
                <p className="text-white/80 mb-4">They lack deep, persistent codebase context.</p>
                <p className="text-white/60">Embeddings, keyword grep, or LSP aren't enough—context is brittle and opaque.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              The Insight: Go Narrow to Go Deep
            </h2>
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-12 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-xl text-white/80 mb-4">Supporting all languages = surface-level understanding.</p>
                  <p className="text-xl text-white mb-4"><strong>Our approach:</strong> one stack, deeply integrated.</p>
                  <p className="text-lg text-purple-200">Rails has rich conventions → allows for smarter, deeper analysis.</p>
                </div>
                <div className="text-center">
                  <Target className="mx-auto mb-4 text-purple-400" size={80} />
                  <p className="text-lg text-white/80 italic">"AI pair programmer who actually knows your app."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Introducing Cursurf
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-xl text-white mb-8">
                  Cursurf is an AI coding tool (Vibe coder) built exclusively for Ruby on Rails.
                </p>
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-2xl mb-8">
                  <p className="text-lg text-white mb-4"><strong>Runtime-aware + editable + persistent context graph.</strong></p>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart, context-aware help with:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    Editing existing features
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    Understanding legacy code
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    Cross-team handoffs
                  </li>
                </ul>
              </div>
              <div className="bg-black/40 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-6">Why Start with Rails?</h3>
                <ul className="space-y-4 text-white/80">
                  <li>• Most popular stack for YC startups</li>
                  <li>• Airbnb, Stripe, Coinbase, Instacart, Chime → all Rails</li>
                  <li>• Rails devs are convention-heavy, tool-hungry, and early adopters</li>
                  <li>• Huge base of real-world Rails teams building fast-moving products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              How Cursurf Works
            </h2>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-3xl mb-12">
              <p className="text-xl text-white text-center mb-8">
                <strong>Lightweight gem + web UI + Redis context layer</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4">
                    <Code className="mx-auto text-blue-400" size={32} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Runtime hooks</h4>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4">
                    <Zap className="mx-auto text-yellow-400" size={32} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Static analysis</h4>
                  <p className="text-sm text-white/60">(Tree-sitter, LSP, grep)</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4">
                    <Users className="mx-auto text-green-400" size={32} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Manual override</h4>
                  <p className="text-sm text-white/60">(editable context)</p>
                </div>
              </div>
            </div>
            <div className="bg-black/40 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Example:</h3>
              <p className="text-white/80">Add a field to a form → understands controller, view, model, migration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Cursurf vs Competition
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white/10 backdrop-blur-sm rounded-2xl">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-6 text-white font-semibold">Feature</th>
                    <th className="text-center p-6 text-purple-400 font-semibold">Cursurf</th>
                    <th className="text-center p-6 text-white font-semibold">Cursor</th>
                    <th className="text-center p-6 text-white font-semibold">Claude</th>
                    <th className="text-center p-6 text-white font-semibold">Windsurf</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/10">
                    <td className="p-6">Rails-native</td>
                    <td className="text-center p-6"><CheckCircle className="mx-auto text-green-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6">Runtime-aware</td>
                    <td className="text-center p-6"><CheckCircle className="mx-auto text-green-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6">Editable context</td>
                    <td className="text-center p-6"><CheckCircle className="mx-auto text-green-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6">Team collaboration</td>
                    <td className="text-center p-6"><CheckCircle className="mx-auto text-green-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                  </tr>
                  <tr>
                    <td className="p-6">Full-stack mapping</td>
                    <td className="text-center p-6"><CheckCircle className="mx-auto text-green-400" size={20} /></td>
                    <td className="text-center p-6 text-yellow-400">Partial</td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                    <td className="text-center p-6"><XCircle className="mx-auto text-red-400" size={20} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Traction & Timeline
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Current Status</h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    Prototype in development (CLI + Redis + parser working)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    Feedback from Rails community devs
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Roadmap</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white/80">
                    <div className="w-4 h-4 bg-purple-400 rounded-full mr-4"></div>
                    <span><strong>2 months:</strong> Private alpha</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-4 h-4 bg-blue-400 rounded-full mr-4"></div>
                    <span><strong>6 months:</strong> Open beta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-16">
              Market and Expansion
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Initial Market</h3>
                  <p className="text-4xl font-bold text-green-400 mb-4">100,000+</p>
                  <p className="text-white/80 mb-6">Active Rails engineers globally</p>
                  <p className="text-white/80">Target: indie developers, YC startups</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Future Expansion</h3>
                  <p className="text-white/80 mb-4">Similar tools for:</p>
                  <ul className="text-white/80 space-y-2">
                    <li>• Django</li>
                    <li>• Laravel</li>
                    <li>• Node.js</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-16">
              Why Me
            </h2>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-12 rounded-3xl">
              <div className="space-y-6 text-lg text-white/80">
                <p><strong className="text-white">10+ years in Rails,</strong> worked at Airbnb, Instacart, HotelTonight.</p>
                <p><strong className="text-white">I am the user.</strong> I know the pain.</p>
                <p><strong className="text-white">I know what Rails devs actually want</strong>—and where they get frustrated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ask Section */}
      <section id="ask" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-16">
              The Ask
            </h2>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 p-12 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-8">
                Raising $500K–$1M pre-seed
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Users className="mx-auto mb-4 text-blue-400" size={48} />
                  <h4 className="text-xl font-semibold text-white mb-2">Hiring</h4>
                  <p className="text-white/80">1–2 more engineers</p>
                </div>
                <div className="text-center">
                  <Code className="mx-auto mb-4 text-green-400" size={48} />
                  <h4 className="text-xl font-semibold text-white mb-2">Development</h4>
                  <p className="text-white/80">Completing MVP</p>
                </div>
                <div className="text-center">
                  <Target className="mx-auto mb-4 text-purple-400" size={48} />
                  <h4 className="text-xl font-semibold text-white mb-2">Go-to-market</h4>
                  <p className="text-white/80">RailsConf, HN launch, YC dev tools mailing list</p>
                </div>
              </div>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-xl rounded-full"
                onClick={() => window.location.href = 'mailto:your-email@example.com'}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <button 
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <ArrowUp size={24} />
            </button>
          </div>
          <p className="text-white/60 mb-4">© 2025 Cursurf. Built for Rails developers, by Rails developers.</p>
          <p className="text-white/40">www.cursurf.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
