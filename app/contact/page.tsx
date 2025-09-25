import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Leaf, Mail, Phone, MapPin, ArrowLeft, Send } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-heading text-xl font-bold text-foreground">EcoNest Home</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products/kitchenware" className="text-foreground hover:text-primary transition-colors">
                Kitchenware
              </Link>
              <Link href="/products/furniture" className="text-foreground hover:text-primary transition-colors">
                Furniture
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-primary font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
              <Mail className="h-3 w-3 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have questions about our products or sustainability practices? We'd love to hear from you. Our team is
              here to help you create your perfect eco-friendly home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you on your sustainable living journey. Reach out to us through any of these
                  channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Email Us</h3>
                        <p className="text-muted-foreground text-sm mb-2">For general inquiries and support</p>
                        <p className="text-primary font-medium">hello@econesthome.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Call Us</h3>
                        <p className="text-muted-foreground text-sm mb-2">Monday - Friday, 9AM - 6PM PST</p>
                        <p className="text-primary font-medium">(555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Visit Us</h3>
                        <p className="text-muted-foreground text-sm mb-2">Our sustainable showroom</p>
                        <p className="text-primary font-medium">
                          Al Maryah Island
                          <br />
                          Abu Dhabi Global Market Square
                          <br />
                           Abu Dhabi, UAE
                           </p>
                           </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Do you offer international shipping?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we ship to most countries worldwide with carbon-neutral shipping options.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">What's your return policy?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer a 30-day return policy for all unused items in original packaging.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Are your products really sustainable?</h4>
                    <p className="text-sm text-muted-foreground">
                      Every product is vetted for environmental impact and ethical production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold">EcoNest Home</span>
            </div>
            <p className="text-sm text-background/70 max-w-md mx-auto">
              Creating beautiful, sustainable homes for conscious living.
            </p>
            <SocialLinks className="flex justify-center gap-4" />
          </div>
        </div>
      </footer>
    </div>
  )
}
