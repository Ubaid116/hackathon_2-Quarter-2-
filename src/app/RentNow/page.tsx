'use client'
import Link from 'next/link'
import { Star } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function RentNowPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-[1fr_400px] gap-6">
        {/* Left Column - Forms */}
        <div className="space-y-6">
          {/* Billing Info */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Billing Info</h2>
                <p className="text-sm text-muted-foreground">Please enter your billing info</p>
              </div>
              <span className="text-sm text-muted-foreground">Step 1 of 4</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Town / City</Label>
                <Input id="city" placeholder="Town or city" />
              </div>
            </div>
          </div>

          {/* Rental Info */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Rental Info</h2>
                <p className="text-sm text-muted-foreground">Please select your rental date</p>
              </div>
              <span className="text-sm text-muted-foreground">Step 2 of 4</span>
            </div>

            <RadioGroup defaultValue="pick-up" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pick-up" id="pick-up" />
                  <Label htmlFor="pick-up">Pick - Up</Label>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Locations</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="la">Los Angeles</SelectItem>
                        <SelectItem value="ch">Chicago</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09">09:00</SelectItem>
                        <SelectItem value="10">10:00</SelectItem>
                        <SelectItem value="11">11:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="drop-off" id="drop-off" />
                  <Label htmlFor="drop-off">Drop - Off</Label>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Locations</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="la">Los Angeles</SelectItem>
                        <SelectItem value="ch">Chicago</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09">09:00</SelectItem>
                        <SelectItem value="10">10:00</SelectItem>
                        <SelectItem value="11">11:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <p className="text-sm text-muted-foreground">Please enter your payment method</p>
              </div>
              <span className="text-sm text-muted-foreground">Step 3 of 4</span>
            </div>

            <RadioGroup defaultValue="credit-card" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Credit Card</Label>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-8 bg-[#1434CB] rounded flex items-center justify-center text-white text-xs">VISA</div>
                    <div className="w-12 h-8 bg-[#FF5F00] rounded flex items-center justify-center text-white text-xs">MC</div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="Card number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiration">Expiration Date</Label>
                    <Input id="expiration" placeholder="DD/MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-holder">Card Holder</Label>
                    <Input id="card-holder" placeholder="Card holder" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
                <div className="text-[#003087] font-bold">Pay<span className="text-[#009CDE]">Pal</span></div>
              </div>

              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bitcoin" id="bitcoin" />
                  <Label htmlFor="bitcoin">Bitcoin</Label>
                </div>
                <div className="text-[#F7931A] font-bold">₿itcoin</div>
              </div>
            </RadioGroup>
          </div>

          {/* Confirmation */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Confirmation</h2>
                <p className="text-sm text-muted-foreground">We are getting to the end. Just few clicks and your rental is ready!</p>
              </div>
              <span className="text-sm text-muted-foreground">Step 4 of 4</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <label htmlFor="marketing" className="text-sm">
                  I agree with sending an Marketing and newsletter emails. No spam, promised!
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>

            <Link href="lastpage">
            <Button size="lg" className="w-full bg-blue-600">Rent Now</Button>
            </Link>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-6 h-6 rounded-full border flex items-center justify-center">
                ✓
              </div>
              <div>
                <p className="font-semibold text-foreground">All your data are safe</p>
                <p>We are using the most advanced security to provide you the best experience ever.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Summary */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Rental Summary</h2>
                <p className="text-sm text-muted-foreground">
                  Prices may change depending on the length of the rental and the price of your rental car.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-24 h-24 bg-primary/10 rounded-lg overflow-hidden">
                  <Image
                    src="/asset/car2.png"
                    alt="Nissan GT-R"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Nissan GT - R</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-primary" />
                    ))}
                    <Star className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <span className="text-sm text-muted-foreground">440+ Reviewer</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$80.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex-1">
                    <Input placeholder="Apply promo code" className="rounded-r-none" />
                  </div>
                  <Button variant="secondary" className="rounded-l-none">
                    Apply now
                  </Button>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total Rental Price</span>
                    <span className="font-semibold">$80.00</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Overall price and includes rental discount
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

