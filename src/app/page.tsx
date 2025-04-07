import {Link} from "react-router-dom"
import { Music, Play, Headphones, Radio, Mic2, ListMusic, Download, Share2, Heart, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Music className="h-6 w-6" />
            <span>SoundWave</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link to="/features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                Pricing
              </Link>
              <Link to="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Music, Your Way
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover, stream, and share a constantly expanding mix of music from emerging and major artists
                    around the world.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    <Play className="h-4 w-4" />
                    Start Listening
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                  <img
                    src="/placeholder.svg?height=550&width=850"
                    width={850}
                    height={550}
                    alt="App screenshot"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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

        {/* Music Player Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Immersive Music Experience
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our intuitive player puts you in control with powerful features and a beautiful interface.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Create favorite collections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ListMusic className="h-5 w-5 text-primary" />
                    <span>Organize with smart playlists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-primary" />
                    <span>Adjust audio quality settings</span>
                  </li>
                </ul>
                <div>
                  <Button className="gap-1">
                    Try It Now <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/placeholder.svg?height=400&width=500"
                      width={500}
                      height={400}
                      alt="Music player interface"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Play className="h-4 w-4" />
                      </Button>
                      <div className="text-sm">
                        <div className="font-medium">Summer Vibes</div>
                        <div className="text-xs text-muted-foreground">Chill Artists</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Loved by Music Fans</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  See what our users have to say about their SoundWave experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Alex Johnson</h3>
                      <p className="text-sm text-muted-foreground">Music Producer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "The sound quality is incredible. I can hear details in my music that I've never noticed before."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Sarah Miller</h3>
                      <p className="text-sm text-muted-foreground">Music Enthusiast</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "The personalized playlists are spot on! It's like the app knows exactly what I want to hear."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Michael Chen</h3>
                      <p className="text-sm text-muted-foreground">DJ</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "As a DJ, I need reliable music access. SoundWave's offline mode is a game-changer for my sets."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Choose Your Plan</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Select the perfect plan for your music needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-col items-center">
                    <h3 className="text-2xl font-bold">Free</h3>
                    <div className="mt-4 text-4xl font-bold">$0</div>
                    <p className="text-sm text-muted-foreground">Forever</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Ad-supported listening
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Basic audio quality
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Limited skips
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-col items-center">
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <div className="mt-4 text-4xl font-bold">$9.99</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Ad-free listening
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      High quality audio
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Unlimited skips
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Offline listening
                    </li>
                  </ul>
                  <Button className="w-full">Subscribe Now</Button>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-col items-center">
                    <h3 className="text-2xl font-bold">Family</h3>
                    <div className="mt-4 text-4xl font-bold">$14.99</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Up to 6 accounts
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Premium for everyone
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Parental controls
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      All Premium features
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Family Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Music Experience?
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  Download SoundWave today and start discovering your next favorite song.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  <Download className="h-4 w-4" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="secondary" className="gap-1">
                  <Download className="h-4 w-4" />
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="flex items-center gap-2 text-lg font-bold">
            <Music className="h-5 w-5" />
            <span>SoundWave</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} SoundWave. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

