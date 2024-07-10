
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Select } from "../components/ui/select"
import { Checkbox } from "../components/ui/checkbox"
import { Card, CardContent } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { Button } from "../components/ui/button"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8 font-josefin">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">Personal Information</h2>
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" required />
              </div>
              <div className="col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="col-span-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>
            </form>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="address1">Address 1</Label>
                <Input id="address1" type="text" required />
              </div>
              <div className="col-span-2">
                <Label htmlFor="address2">Address 2</Label>
                <Input id="address2" type="text" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="city">City</Label>
                <Input id="city" type="text" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="state">State</Label>
                <Select id="state" required>
                  <option value="">Select State</option>
                </Select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="zip">Zip Code</Label>
                <Input id="zip" type="text" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="country">Country</Label>
                <Select id="country" required>
                  <option value="">Select Country</option>
                </Select>
              </div>
            </form>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">Billing Address</h2>
            <div className="flex items-center gap-2">
              <Checkbox id="sameAsShipping" />
              <Label htmlFor="sameAsShipping">Same as shipping address</Label>
            </div>
            <form className="grid grid-cols-2 gap-4 mt-4">
              <div className="col-span-2">
                <Label htmlFor="billingAddress1">Address 1</Label>
                <Input id="billingAddress1" type="text" required />
              </div>
              <div className="col-span-2">
                <Label htmlFor="billingAddress2">Address 2</Label>
                <Input id="billingAddress2" type="text" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="billingCity">City</Label>
                <Input id="billingCity" type="text" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="billingState">State</Label>
                <Select id="billingState" required>
                  <option value="">Select State</option>
                </Select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="billingZip">Zip Code</Label>
                <Input id="billingZip" type="text" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="billingCountry">Country</Label>
                <Select id="billingCountry" required>
                  <option value="">Select Country</option>
                </Select>
              </div>
            </form>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" type="text" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="expirationDate">Expiration Date</Label>
                <Input id="expirationDate" type="text" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" type="text" required />
              </div>
            </form>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <Card>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div>Subtotal</div>
                  <div className="text-right">$1,500.00</div>
                  <div>Shipping</div>
                  <div className="text-right">$50.00</div>
                  <div>Tax</div>
                  <div className="text-right">$120.00</div>
                  <Separator className="col-span-2 my-2" />
                  <div className="font-bold">Total</div>
                  <div className="text-right font-bold">$1,670.00</div>
                </div>
              </CardContent>
            </Card>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">Promo Code</h2>
            <div className="flex gap-2">
              <Input id="promoCode" type="text" placeholder="Enter promo code" />
              <Button>Apply</Button>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">Shipping Options</h2>
            <RadioGroup name="shippingMethod" defaultValue="standard">
              <div className="space-y-2">
                <Label htmlFor="standard" className="flex items-center gap-2">
                  <RadioGroupItem id="standard" value="standard" />
                  Standard Shipping - Free
                </Label>
                <Label htmlFor="express" className="flex items-center gap-2">
                  <RadioGroupItem id="express" value="express" />
                  Express Shipping - $20.00
                </Label>
              </div>
            </RadioGroup>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">Account Options</h2>
            <div className="space-y-2">
              <Label htmlFor="createAccount" className="flex items-center gap-2">
                <Checkbox id="createAccount" />
                Create an account
              </Label>
              <Label htmlFor="subscribeNewsletter" className="flex items-center gap-2">
                <Checkbox id="subscribeNewsletter" />
                Subscribe to newsletter
              </Label>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">Review and Submit</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="agreeTerms" required />
                <Label htmlFor="agreeTerms">
                  I agree to the{" "}
                  <Link href="#" className="text-primary" prefetch={false}>
                    Terms and Conditions
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Place Order
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}