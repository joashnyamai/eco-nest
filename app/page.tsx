import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Heart, Star, ArrowRight, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SocialLinks } from "@/components/social-links"

export default function HomePage() {
  return (
    <div className="min-h-screen">
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
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                <ShoppingBag className="h-4 w-4 mr-2" />
                <Link href="/checkout">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 to-rose-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                  <Leaf className="h-3 w-3 mr-1" />
                  Sustainable Living
                </Badge>
                <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Beautiful Homes,
                  <span className="text-primary"> Sustainable</span> Future
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Transform your living space with our curated collection of eco-friendly home goods. From sustainable
                  kitchenware to zero-waste bathroom essentials, create a home that's both beautiful and kind to our
                  planet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/checkout">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Shop Collection
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn Our Story
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Eco Products</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Sustainable</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <Image
                  src="/modern-sustainable-kitchen-with-bamboo-utensils-an.jpg"
                  alt="Sustainable kitchen setup with eco-friendly products"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Recycle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Carbon Neutral</div>
                    <div className="text-xs text-muted-foreground">Shipping & Packaging</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collections of sustainable home essentials
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/products/kitchenware" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-cyan-200">
                  <Image
                    src="/bamboo-kitchen-utensils-and-eco-friendly-cookware.jpg"
                    alt="Eco-friendly kitchenware"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">Eco Kitchenware</h3>
                  <p className="text-muted-foreground mb-4">
                    Sustainable cooking essentials made from bamboo, recycled materials, and natural fibers.
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Shop Kitchenware
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/furniture" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-rose-200">
                  <Image
                    src="/sustainable-wooden-furniture-and-reclaimed-wood-de.jpg"
                    alt="Sustainable furniture"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">Sustainable Furniture</h3>
                  <p className="text-muted-foreground mb-4">
                    Beautiful furniture crafted from reclaimed wood and sustainable materials.
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Shop Furniture
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products/bathroom" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200">
                  <Image
                    src="/zero-waste-bathroom-products-bamboo-toothbrush-org.jpg"
                    alt="Zero-waste bathroom products"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">Zero-Waste Bathroom</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete your sustainable lifestyle with our zero-waste bathroom essentials.
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Shop Bathroom
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Why Choose EcoNest Home?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to making sustainable living accessible, beautiful, and affordable
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">100% Sustainable</h3>
              <p className="text-muted-foreground text-sm">
                Every product is carefully sourced from sustainable materials and ethical suppliers.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Ethically Made</h3>
              <p className="text-muted-foreground text-sm">
                Supporting fair trade practices and artisan communities worldwide.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">
                Durable, beautiful products that are built to last for generations.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Recycle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Carbon Neutral</h3>
              <p className="text-muted-foreground text-sm">
                All shipping and packaging is carbon neutral with plastic-free materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="font-heading text-lg font-bold">EcoNest Home</span>
              </div>
              <p className="text-sm text-background/70">Creating beautiful, sustainable homes for conscious living.</p>
              <SocialLinks />
            </div>
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Shop</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href="/products/kitchenware"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Kitchenware
                </Link>
                <Link
                  href="/products/furniture"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Furniture
                </Link>
                <Link
                  href="/products/bathroom"
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  Bathroom
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="block text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block text-background/70 hover:text-background transition-colors">
                  Sustainability
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-background/70 hover:text-background transition-colors">
                  Shipping
                </Link>
                <Link href="#" className="block text-background/70 hover:text-background transition-colors">
                  Returns
                </Link>
                <Link href="#" className="block text-background/70 hover:text-background transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2025 EcoNest Home. All rights reserved. Made with ♡ for our planet.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
