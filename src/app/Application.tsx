import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Music,
  Play,
  Headphones,
  Radio,
  Mic2,
  ListMusic,
  Download,
  Share2,
  Heart,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import  AutoSuggestSearch from "@/components/custom/AutoSuggestSearch";
 
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

const images = [
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg",
  "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Application = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex gap-2 items-center text-xl font-bold">
              <Music className="h-6 w-6" />
              <span>SoundWave</span>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-2">
                <Link
                  to="/features"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Pricing
                </Link>
                <Link
                  to="/testimonials"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Testimonials
                </Link>
                <Button asChild size="sm" className="ml-4">
                  <Link to="/login">Login</Link>
                </Button>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          {/* Hero Section */}
            <AutoSuggestSearch />
          {/* <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
        
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover> */}


          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
            {/* <div className="mx-auto max-w-xs relative w-full h-[300px] overflow-hidden rounded-xl"> */}
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xs ml-20"
                // onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
              >
                <CarouselPrevious />
                <CarouselContent>
                  {images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <img
                              key={index}
                              src={img}
                              alt={`Slide ${index + 1}`}
                              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out`}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext />
              </Carousel>
            {/* </div> */}
          </section>
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need in One App</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  SoundWave brings you the best music experience with powerful features designed for music lovers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Headphones className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">High Quality Audio</h3>
                  <p className="text-muted-foreground">
                    Experience crystal clear sound with our HD audio streaming technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Radio className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Personalized Radio</h3>
                  <p className="text-muted-foreground">
                    Discover new music with custom radio stations based on your taste.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mic2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Live Concerts</h3>
                  <p className="text-muted-foreground">Watch exclusive live performances from your favorite artists.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <ListMusic className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Smart Playlists</h3>
                  <p className="text-muted-foreground">
                    Create and share playlists that automatically update with your preferences.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Offline Listening</h3>
                  <p className="text-muted-foreground">
                    Download your favorite tracks and listen without an internet connection.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Share2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Social Sharing</h3>
                  <p className="text-muted-foreground">
                    Share your favorite music with friends across social platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        </main>
      </div>
    </>
  );
};

export default Application;
