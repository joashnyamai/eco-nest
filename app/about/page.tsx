import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Users, ArrowLeft, Award } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link href="/about" className="text-primary font-medium">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                <Heart className="h-3 w-3 mr-1" />
                Our Story
              </Badge>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                Building a Sustainable Future, One Home at a Time
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020 by environmental advocates Mohammed Abdulrahman Mohammed Ahmed Alhammadi, Mohammed Saeed Almheiri, and Zayed Hamad Khalifa Salem Khamisi, EcoNest Home was born from a simple belief: beautiful living spaces shouldn't come at the cost of our planet's health.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/founders-of-sustainable-home-goods-company-in-thei.jpg"
                  alt="EcoNest Home founders"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make sustainable living accessible, beautiful, and affordable for everyone. Every product we curate is chosen for its environmental impact, ethical production, and lasting quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Environmental Impact</h3>
              <p className="text-muted-foreground">
                Every product is carefully selected to minimize environmental impact, from sustainable materials to carbon-neutral shipping.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Community First</h3>
              <p className="text-muted-foreground">
                We partner with artisan communities and fair-trade suppliers, ensuring our impact extends beyond environmental benefits.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Quality Promise</h3>
              <p className="text-muted-foreground">
                We believe sustainable products should be built to last. Every item is tested for durability and backed by our quality guarantee.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Our Impact So Far</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Together with our community, we're making a real difference for our planet
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="font-heading text-4xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Plastic Items Replaced</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-heading text-4xl font-bold text-secondary">1,200</div>
              <div className="text-muted-foreground">Trees Planted</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-heading text-4xl font-bold text-primary">25</div>
              <div className="text-muted-foreground">Artisan Communities Supported</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-heading text-4xl font-bold text-secondary">100%</div>
              <div className="text-muted-foreground">Carbon Neutral Shipping</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders working together to create a more sustainable future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-32">
                <Image
                  src="/professional-headshot-of-sustainable-business-founder.jpg"
                  alt="Mohammed Abdulrahman Mohammed Ahmed Alhammadi"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1">Mohammed Abdulrahman Mohammed Ahmed Alhammadi</h3>
              <p className="text-secondary text-sm mb-3">Co-Founder & CEO</p>
              <p className="text-muted-foreground text-sm">
                Environmental visionary and business strategist, passionate about making sustainable living accessible to all.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-32">
                <Image
                  src="/professional-headshot-of-sustainability-director.jpg"
                  alt="Mohammed Saeed Almheiri"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1">Mohammed Saeed Almheiri</h3>
              <p className="text-secondary text-sm mb-3">Co-Founder & Sustainability Director</p>
              <p className="text-muted-foreground text-sm">
                Ensures every product meets our strict environmental standards and ethical production requirements.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-32">
                <Image
                  src="/professional-headshot-of-community-director.jpg"
                  alt="Zayed Hamad Khalifa Salem Khamisi"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1">Zayed Hamad Khalifa Salem Khamisi</h3>
              <p className="text-secondary text-sm mb-3">Co-Founder & Community Director</p>
              <p className="text-muted-foreground text-sm">
                Builds partnerships with artisan communities and ensures fair trade practices across our supply chain.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold">Join Our Mission</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Ready to transform your home into a sustainable sanctuary? Explore our collection and become part of the movement toward conscious living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Shop Collection
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Learn More
            </Button>
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