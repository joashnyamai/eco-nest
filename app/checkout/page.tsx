"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Leaf, CreditCard, Shield, ArrowLeft, Lock, Banknote, Smartphone, Building2, Wallet } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const cartItems = [
  {
    id: 1,
    name: "Bamboo Cutting Board Set",
    price: 45,
    quantity: 1,
    image: "bamboo cutting boards with natural wood grain",
  },
  {
    id: 2,
    name: "Stainless Steel Straws",
    price: 18,
    quantity: 2,
    image: "reusable stainless steel straws with cleaning brush",
  },
]

const paymentOptions = [
  {
    id: "card",
    name: "Credit/Debit Card",
    description: "Pay securely with your card",
    icon: CreditCard,
    popular: true,
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    description: "Quick and secure payment",
    icon: Smartphone,
    popular: false,
  },
  {
    id: "tabby",
    name: "Tabby",
    description: "Buy now, pay later in 4 installments",
    icon: Wallet,
    popular: false,
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    description: "Direct bank transfer",
    icon: Building2,
    popular: false,
  },
  {
    id: "cash-on-delivery",
    name: "Cash on Delivery",
    description: "Pay when you receive your order",
    icon: Banknote,
    popular: false,
  },
]

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState("card")
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = Math.round(subtotal * 0.08 * 100) / 100 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-heading text-xl font-bold text-foreground">EcoNest Home</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">Secure Checkout</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold">Contact Information</h3>
                  <Input placeholder="Email address" type="email" />
                </div>

                <Separator />

                {/* Shipping Address */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold">Shipping Address</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First name" />
                    <Input placeholder="Last name" />
                  </div>
                  <Input placeholder="Address" />
                  <Input placeholder="Apartment, suite, etc. (optional)" />
                  <div className="grid md:grid-cols-3 gap-4">
                    <Input placeholder="City" />
                    <Input placeholder="State" />
                    <Input placeholder="ZIP code" />
                  </div>
                </div>

                <Separator />

                {/* Payment Method */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold">Payment Method</h3>
                  <div className="space-y-3">
                    {paymentOptions.map((option) => {
                      const Icon = option.icon
                      return (
                        <div
                          key={option.id}
                          className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedPayment === option.id
                              ? "bg-primary/5 border-primary/20 border-2"
                              : "border-border hover:bg-muted/50"
                          }`}
                          onClick={() => setSelectedPayment(option.id)}
                        >
                          <input
                            type="radio"
                            name="payment"
                            id={option.id}
                            checked={selectedPayment === option.id}
                            onChange={() => setSelectedPayment(option.id)}
                            className="text-primary"
                          />
                          <label htmlFor={option.id} className="flex items-center gap-2 font-medium flex-1 cursor-pointer">
                            <Icon className="h-4 w-4" />
                            {option.name}
                            {option.popular && (
                              <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground text-xs">
                                Popular
                              </Badge>
                            )}
                          </label>
                        </div>
                      )
                    })}
                  </div>

                  {/* Payment Details */}
                  {selectedPayment === "card" && (
                    <div className="space-y-4 pt-4">
                      <Input placeholder="Card number" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="MM / YY" />
                        <Input placeholder="CVC" />
                      </div>
                      <Input placeholder="Name on card" />
                    </div>
                  )}

                  {selectedPayment === "bank-transfer" && (
                    <div className="space-y-3 pt-4 text-sm bg-muted p-4 rounded-lg">
                      <p className="font-medium mb-2">Transfer to:</p>
                      <p><strong>Bank:</strong> EcoNest Bank</p>
                      <p><strong>Account:</strong> 1234567890</p>
                      <p><strong>IBAN:</strong> AE123456789012345678901</p>
                      <p><strong>Reference:</strong> ORDER-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                      <p className="text-muted-foreground text-xs mt-2">
                        Please include the reference number in your transfer. Your order will be processed once payment is confirmed.
                      </p>
                    </div>
                  )}

                  {selectedPayment === "cash-on-delivery" && (
                    <div className="space-y-3 pt-4 text-sm bg-muted p-4 rounded-lg">
                      <p className="font-medium mb-2">Payment Instructions:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Pay in cash when your order is delivered</li>
                        <li>• Additional AED 10 COD fee applies</li>
                        <li>• Have exact change ready for faster delivery</li>
                        <li>• Available for orders within UAE only</li>
                      </ul>
                    </div>
                  )}

                  {selectedPayment === "tabby" && (
                    <div className="space-y-3 pt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="font-medium mb-2">How it works:</p>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Split your purchase into 4 equal payments</li>
                          <li>• First payment due today, rest every 2 weeks</li>
                          <li>• No interest or fees when you pay on time</li>
                          <li>• Instant approval for eligible customers</li>
                        </ul>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Continue with Tabby
                      </Button>
                    </div>
                  )}

                  {selectedPayment === "apple-pay" && (
                    <div className="space-y-3 pt-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="font-medium mb-2">Secure Payment:</p>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Use Touch ID or Face ID for authentication</li>
                          <li>• Your card details are never shared with merchants</li>
                          <li>• Fast and secure checkout process</li>
                        </ul>
                      </div>
                      <Button className="w-full bg-black hover:bg-black/90 text-white">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Pay with Apple Pay
                      </Button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  Your payment information is encrypted and secure
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=64&width=64&query=${item.image}`}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs">
                        {item.quantity}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-heading font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Complete Order
                </Button>

                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Leaf className="h-4 w-4 text-green-600" />
                    Carbon neutral shipping included
                  </div>
                  <p className="text-xs text-muted-foreground">
                    30-day return policy • Secure payment • Free shipping on orders over $50
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold mb-4 text-center">Why Shop With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm">100% Sustainable Materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm">Secure & Encrypted Payments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <CreditCard className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="text-sm">30-Day Money Back Guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}