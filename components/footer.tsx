import Link from "next/link"
import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-xl">EcoNest Home</span>
            </Link>
            <p className="text-sm text-muted-foreground">Creating beautiful, sustainable homes for conscious living.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/kitchenware" className="text-muted-foreground hover:text-primary">
                  Kitchenware
                </Link>
              </li>
              <li>
                <Link href="/products/furniture" className="text-muted-foreground hover:text-primary">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/products/bathroom" className="text-muted-foreground hover:text-primary">
                  Bathroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-primary">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-primary">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EcoNest Home. All rights reserved. Made with care for our planet.</p>
        </div>
      </div>
    </footer>
  )
}
