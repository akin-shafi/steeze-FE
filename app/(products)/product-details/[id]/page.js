"use client";
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

export default function DressProductPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("m")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [expressService, setExpressService] = useState(false)
  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length)
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission logic here
    setIsModalOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={images[currentImage]}
              alt="Dress"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 ${
                  currentImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Dress thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Elegant Evening Gown</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(125 reviews)</span>
          </div>
          <p className="text-2xl font-bold">$299.99</p>
          <p className="text-muted-foreground">
            This stunning evening gown features a fitted bodice, flowing skirt, and delicate
            embroidery. Perfect for formal events and special occasions.
          </p>
          
          {/* Size Selection */}
          <div className="space-y-2">
            <Label htmlFor="size">Size</Label>
            <RadioGroup id="size" value={selectedSize} onValueChange={setSelectedSize} className="flex space-x-2">
              {["xs", "s", "m", "l", "xl"].map((size) => (
                <div key={size}>
                  <RadioGroupItem
                    value={size}
                    id={`size-${size}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                  >
                    {size.toUpperCase()}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Dialog open={isModalOpen}  onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="w-full">Fit Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
              <DialogHeader>
                <DialogTitle>Enter Your Measurements</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bust">Bust (inches)</Label>
                    <Input id="bust" placeholder="Enter bust size" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="waist">Waist (inches)</Label>
                    <Input id="waist" placeholder="Enter waist size" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hips">Hips (inches)</Label>
                    <Input id="hips" placeholder="Enter hip size" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input id="height" placeholder="Enter height" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="express" checked={expressService} onCheckedChange={setExpressService} />
                  <Label htmlFor="express">
                    Express Service (+$50, 3-day delivery)
                  </Label>
                </div>
                <Button type="submit" className="w-full">Submit Measurements</Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* Tailor Profile */}
          <Card>
            <CardContent className="flex items-center space-x-4 py-4">
              <div className="rounded-full bg-muted p-2">
                <User className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">Tailor: Emma Stitches</h3>
                <p className="text-sm text-muted-foreground">Master Seamstress, 10 years experience</p>
              </div>
              <Button variant="outline">View Profile</Button>
            </CardContent>
          </Card>

          {/* Additional Product Details */}
          <div className="space-y-4">
            <Separator />
            <h2 className="text-xl font-semibold">Product Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Material</h3>
                <p className="text-sm text-muted-foreground">100% Silk</p>
              </div>
              <div>
                <h3 className="font-semibold">Fit</h3>
                <p className="text-sm text-muted-foreground">Slim fit, true to size</p>
              </div>
              <div>
                <h3 className="font-semibold">Color</h3>
                <p className="text-sm text-muted-foreground">Midnight Blue</p>
              </div>
              <div>
                <h3 className="font-semibold">Care</h3>
                <p className="text-sm text-muted-foreground">Dry clean only</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Description</h3>
              <p className="text-sm text-muted-foreground">
                This elegant evening gown is crafted from luxurious silk, featuring a fitted bodice 
                and a flowing A-line skirt. The bodice is adorned with intricate beadwork and 
                embroidery, creating a stunning focal point. The dress has a concealed back zip 
                fastening and is fully lined for comfort.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Size Guide</h3>
              <p className="text-sm text-muted-foreground">
                XS (0-2), S (4-6), M (8-10), L (12-14), XL (16-18)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Link key={i} href="#" className="group">
              <div className="aspect-square relative mb-2 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/placeholder.svg"
                  alt={`Recommended dress ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold">Cocktail Dress</h3>
              <p className="text-sm text-muted-foreground">$199.99</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}