import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Star, ShoppingCart, ArrowLeft, TreePine } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Reclaimed Wood Dining Table",
    price: "$449.50",
    originalPrice: "$899",
    rating: 4.9,
    reviews: 67,
    image: "rustic reclaimed wood dining table with natural grain",
    features: ["Reclaimed Wood", "Handcrafted", "Seats 6"],
  },
  {
    id: 2,
    name: "Bamboo Bookshelf",
    price: "$122.50",
    originalPrice: "$245",
    rating: 4.8,
    reviews: 43,
    image: "modern bamboo bookshelf with clean lines",
    features: ["Sustainable Bamboo", "5 Shelves", "Easy Assembly"],
  },
  {
    id: 3,
    name: "Cork Floor Lamp",
    price: "$82.50",
    originalPrice: "$165",
    rating: 4.7,
    reviews: 89,
    image: "elegant cork floor lamp with warm lighting",
    features: ["Natural Cork", "LED Compatible", "Adjustable Height"],
  },
  {
    id: 4,
    name: "Recycled Plastic Outdoor Chair",
    price: "$62.50",
    originalPrice: "$125",
    rating: 4.6,
    reviews: 124,
    image: "colorful outdoor chair made from recycled plastic",
    features: ["100% Recycled", "Weather Resistant", "Stackable"],
  },
  {
    id: 5,
    name: "Organic Cotton Ottoman",
    price: "$92.50",
    originalPrice: "$185",
    rating: 4.8,
    reviews: 56,
    image: "comfortable ottoman with organic cotton upholstery",
    features: ["Organic Cotton", "Hidden Storage", "Removable Cover"],
  },
  {
    id: 6,
    name: "Sustainable Wood Coffee Table",
    price: "$212.50",
    originalPrice: "$425",
    rating: 4.9,
    reviews: 78,
    image: "modern coffee table made from sustainable wood",
    features: ["FSC Certified", "Live Edge", "Handmade"],
  },
]

export default function FurniturePage() {
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
              <Link href="/products/furniture" className="text-primary font-medium">
                Furniture
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
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
      <section className="bg-gradient-to-br from-rose-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
              <TreePine className="h-3 w-3 mr-1" />
              Sustainable Furniture
            </Badge>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">Eco-Friendly Furniture</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Beautiful furniture crafted from reclaimed wood, sustainable bamboo, and recycled materials. Create spaces
              that are both stylish and environmentally conscious.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=400&width=400&query=${product.image}`}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      Save{" "}
                      {Math.round(
                        ((Number.parseInt(product.originalPrice.slice(1)) - Number.parseInt(product.price.slice(1))) /
                          Number.parseInt(product.originalPrice.slice(1))) *
                          100,
                      )}
                      %
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-heading text-xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link href="/checkout">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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