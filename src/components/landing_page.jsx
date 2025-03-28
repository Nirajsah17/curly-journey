import logo from "../assets/logo/app.png"
export function LandingPage() {
  return (
    <>
      {/* Main Container */}
      <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
        {/* Header Section */}
        <header className="absolute inset-x-0 top-0 z-50 shadow-sm bg-[var(--color-bg-secondary)]">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            {/* Logo Section */}
            <div className="flex lg:flex-1">
              <a href="" className="-m-1.5 p-1.5">
                <span className="sr-only">I-Music</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="btn-secondary"
                aria-label="Open main menu"
              >
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex lg:gap-x-12">
              {["Product", "Features", "Marketplace", "Company"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm/6 font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)]"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="btn-secondary">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* Background Gradient */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-primary-light)] opacity-30 sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
            <h1 className="text-5xl font-semibold text-balance text-[var(--color-text)] sm:text-7xl">
              Data to enrich your online business
            </h1>
            <p className="mt-8 text-lg text-[var(--color-text-secondary)] sm:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="btn-primary hover-glow">
                Get started
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-[var(--color-primary)] hover:underline"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-primary-light)] opacity-30 sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
