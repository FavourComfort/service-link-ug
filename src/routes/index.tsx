import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Become a Provider | ServiceLink Uganda" },
      {
        name: "description",
        content:
          "ServiceLink connects Ugandan experts with local clients. Grow your business across Kampala and beyond with easy scheduling and secure UGX payments.",
      },
      { property: "og:title", content: "Become a Provider | ServiceLink Uganda" },
      {
        property: "og:description",
        content:
          "Scale your service business across Kampala and beyond. Easy scheduling, local visibility, and secure UGX payments.",
      },
    ],
  }),
  component: Index,
});

const Icon = ({ children, className = "", style }: { children: string; className?: string; style?: React.CSSProperties }) => (
  <span className={`material-symbols-outlined ${className}`} style={style}>
    {children}
  </span>
);

function Index() {
  return (
    <div className="bg-background text-on-surface">
      {/* Top Navigation Bar */}
      <header className="bg-surface sticky top-0 z-50 shadow-sm">
        <nav className="flex justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto h-16">
          <div className="flex items-center gap-space-lg">
            <a className="text-headline-md font-headline-md font-bold text-primary" href="#">
              ServiceLink
            </a>
            <div className="hidden md:flex gap-space-md">
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                Browse
              </a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
                How it Works
              </a>
              <a className="font-body-md text-body-md text-primary border-b-2 border-primary font-bold pb-1" href="#">
                Become a Provider
              </a>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <button className="font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-low px-4 py-2 rounded-lg transition-colors">
              Login
            </button>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full py-space-xl overflow-hidden bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row items-center gap-gutter">
            <div className="flex-1 space-y-space-md z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                FOR PROFESSIONALS IN UGANDA
              </span>
              <h1 className="font-headline-lg text-headline-lg text-primary leading-tight">
                Scale Your Business Across Kampala and Beyond
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                ServiceLink connects Ugandan experts with local clients. Focus on your craft while we
                handle the logistics of discovery and UGX payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-space-md pt-space-sm">
                <button className="bg-primary text-on-primary h-[48px] px-8 rounded-lg font-bold hover:opacity-95 transition-all text-body-md">
                  Start Your Business
                </button>
                <button className="border-2 border-secondary text-secondary h-[48px] px-8 rounded-lg font-bold hover:bg-secondary-fixed transition-all text-body-md">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[10px] font-bold" title="Personal Trainer">PT</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-fixed-dim flex items-center justify-center text-[10px] font-bold text-on-primary-fixed" title="Photographer">PH</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-fixed-dim flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed" title="Pet Groomer">PG</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container" title="House Cleaner">HC</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container" title="Tech Support">TS</div>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Join 5,000+ experts in Entebbe, Jinja, and Kampala
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  className="w-full h-[500px] object-cover"
                  alt="A professional Ugandan business owner holding a tablet showing the ServiceLink dashboard with growth charts in UGX."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4gpGLdUyK4cF0NkIJhnPL8eeM1bTky40qQoJiYWJYSYtgYTqONJrUQLtL61nZuqq3QlImHlXBC0fs47DzkX03Ng1OJ8R81VGhPp99QMN0D0R8GakHsQhPWPx754JU4BLeUE-lDpXidgdYneP2sRGJlf_nW15mH7R_jtMdUdPS8qjYa9VkP_3KFOhu1Rqx3OXmAK9rTpIpGXnnbaC3A5-vq4DKwAon0Ahbkg7ztX4uEKE2c49dgkqmFE7fVMktSSEMJbHTUpMDo6Q"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-space-md rounded-xl space-y-1 hidden lg:block">
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Avg. Growth</p>
                <p className="font-headline-md text-headline-md text-primary font-bold">+42% Yearly</p>
              </div>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-10 opacity-5">
            <svg fill="none" height="600" viewBox="0 0 600 600" width="600" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" fill="url(#paint0_radial)" r="300" />
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(300 300) rotate(90) scale(300)" gradientUnits="userSpaceOnUse" id="paint0_radial" r="1">
                  <stop stopColor="#00236F" />
                  <stop offset="1" stopColor="#00236F" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-space-xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-space-xl space-y-space-sm">
              <h2 className="font-headline-lg text-headline-lg text-primary">Everything you need to thrive</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                We built the tools so you can focus on providing the best service possible in Uganda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Feature 1: Easy Scheduling */}
              <div className="md:col-span-8 bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-highest shadow-sm hover-lift flex flex-col md:flex-row gap-space-lg items-center">
                <div className="flex-1 space-y-space-sm">
                  <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg text-primary">
                    <Icon style={{ fontVariationSettings: "'opsz' 40" }}>calendar_month</Icon>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Easy Scheduling</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Sync your calendar and let clients book you 24/7. Set your own hours, buffer times, and
                    availability with a few taps.
                  </p>
                </div>
                <div className="flex-1 bg-surface-container p-space-md rounded-lg w-full">
                  <div className="space-y-3">
                    <div className="bg-surface-container-lowest p-3 rounded shadow-sm flex justify-between items-center border-l-4 border-primary">
                      <span className="text-label-md font-label-md">House Call: 10:00 AM</span>
                      <span className="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">Confirmed</span>
                    </div>
                    <div className="bg-surface-container-lowest p-3 rounded shadow-sm flex justify-between items-center border-l-4 border-outline-variant opacity-60">
                      <span className="text-label-md font-label-md">Consultation: 1:30 PM</span>
                      <span className="text-xs bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-full">Available</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Feature 2: Local Visibility */}
              <div className="md:col-span-4 bg-primary text-on-primary p-space-lg rounded-xl shadow-sm hover-lift relative overflow-hidden">
                <div className="relative z-10 space-y-space-sm">
                  <div className="w-12 h-12 bg-on-primary-container flex items-center justify-center rounded-lg text-primary">
                    <Icon style={{ fontVariationSettings: "'opsz' 40" }}>location_on</Icon>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm">Local Visibility</h3>
                  <p className="font-body-sm text-body-sm opacity-90">
                    Rank at the top of local searches in Kampala. Our SEO-optimized profiles ensure you're
                    found by clients in your neighborhood.
                  </p>
                </div>
                <div className="absolute bottom-[-20px] right-[-20px] opacity-20 transform rotate-12">
                  <Icon className="text-[120px]">explore</Icon>
                </div>
              </div>
              {/* Feature 3: Secure Payments */}
              <div className="md:col-span-5 bg-secondary-container text-on-secondary-container p-space-lg rounded-xl shadow-sm hover-lift space-y-space-sm">
                <div className="w-12 h-12 bg-on-secondary-container flex items-center justify-center rounded-lg text-secondary-container">
                  <Icon style={{ fontVariationSettings: "'opsz' 40" }}>payments</Icon>
                </div>
                <h3 className="font-headline-sm text-headline-sm">Secure UGX Payments</h3>
                <p className="font-body-md text-body-md">
                  Get paid instantly via Mobile Money or Bank Transfer once the job is done. Integrated escrow
                  and fraud protection keep your earnings safe.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <Icon className="text-on-secondary-fixed">verified_user</Icon>
                  <span className="font-label-sm text-label-sm">Uganda Financial Compliance Standards</span>
                </div>
              </div>
              {/* Feature 4: Analytics */}
              <div className="md:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-highest shadow-sm hover-lift flex flex-col justify-between">
                <div className="space-y-space-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Income Insights (UGX)</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Track your revenue in Shillings, profile views, and customer satisfaction ratings with
                    professional-grade analytics.
                  </p>
                </div>
                <div className="mt-space-md h-24 flex items-end gap-1">
                  <div className="flex-1 bg-primary h-[40%] rounded-t-sm opacity-40" />
                  <div className="flex-1 bg-primary h-[60%] rounded-t-sm opacity-60" />
                  <div className="flex-1 bg-primary h-[50%] rounded-t-sm opacity-50" />
                  <div className="flex-1 bg-primary h-[85%] rounded-t-sm opacity-90" />
                  <div className="flex-1 bg-primary h-[70%] rounded-t-sm opacity-70" />
                  <div className="flex-1 bg-primary h-[95%] rounded-t-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-space-xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="bg-surface-container-low rounded-3xl p-margin-desktop md:p-space-xl flex flex-col md:flex-row items-center gap-space-xl relative overflow-hidden">
              <div className="w-full md:w-2/5 aspect-square rounded-2xl overflow-hidden shadow-xl z-10">
                <img
                  className="w-full h-full object-cover"
                  alt="A portrait of a professional Ugandan nurse, Sarah Nabirye, with a warm, confident smile in a modern Kampala clinic environment."
                  src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                />
              </div>
              <div className="flex-1 space-y-space-md z-10">
                <div className="flex text-secondary mb-2">
                  <Icon style={{ fontVariationSettings: "'FILL' 1" }}>star</Icon>
                  <Icon style={{ fontVariationSettings: "'FILL' 1" }}>star</Icon>
                  <Icon style={{ fontVariationSettings: "'FILL' 1" }}>star</Icon>
                  <Icon style={{ fontVariationSettings: "'FILL' 1" }}>star</Icon>
                  <Icon style={{ fontVariationSettings: "'FILL' 1" }}>star</Icon>
                </div>
                <p className="font-headline-md text-headline-md italic text-primary">
                  "ServiceLink completely transformed how I run my private nursing practice in Kampala.
                  Within three months, my bookings increased by 60%, and I no longer worry about payment
                  delays."
                </p>
                <div>
                  <p className="font-headline-sm text-headline-sm text-on-surface">Sarah Nabirye</p>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                    Licensed Registered Nurse | Kampala
                  </p>
                </div>
              </div>
              {/* Decorative Icon */}
              <div className="absolute top-10 right-10 opacity-5 select-none">
                <Icon className="text-[200px]">format_quote</Icon>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-space-xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row items-center gap-space-xl">
              <div className="flex-1 space-y-space-md">
                <h2 className="font-headline-lg text-headline-lg text-primary">Let clients book you in seconds.</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Give your clients a seamless scheduling experience that syncs with your availability in
                  Uganda.
                </p>
                <ul className="space-y-space-sm pt-space-sm">
                  <li className="flex items-center gap-2 text-on-surface font-body-md">
                    <Icon className="text-primary">notifications_active</Icon>
                    Instant Notifications
                  </li>
                  <li className="flex items-center gap-2 text-on-surface font-body-md">
                    <Icon className="text-primary">sync</Icon>
                    Calendar Sync
                  </li>
                  <li className="flex items-center gap-2 text-on-surface font-body-md">
                    <Icon className="text-primary">event_available</Icon>
                    Automatic Reminders
                  </li>
                </ul>
                <div className="pt-space-md">
                  <button className="border-2 border-primary text-primary h-[48px] px-8 rounded-lg font-bold hover:bg-primary-fixed transition-all text-body-md">
                    Explore All Features
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-surface-container-highest overflow-hidden">
                  <div className="p-space-md border-b border-surface-container flex justify-between items-center bg-surface">
                    <span className="font-headline-sm text-headline-sm text-on-surface">Select a Time</span>
                    <div className="flex gap-2">
                      <button className="p-1 rounded hover:bg-surface-container-high"><Icon>chevron_left</Icon></button>
                      <button className="p-1 rounded hover:bg-surface-container-high"><Icon>chevron_right</Icon></button>
                    </div>
                  </div>
                  <div className="p-space-md grid grid-cols-3 gap-space-sm">
                    <div className="text-center space-y-2">
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Mon</p>
                      <p className="font-bold text-on-surface">12</p>
                      <button className="w-full py-2 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-fixed transition-colors">9:00 AM</button>
                      <button className="w-full py-2 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-fixed transition-colors">11:30 AM</button>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Tue</p>
                      <p className="font-bold text-on-surface">13</p>
                      <button className="w-full py-2 rounded-lg bg-primary text-on-primary font-label-md shadow-md">10:00 AM</button>
                      <button className="w-full py-2 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-fixed transition-colors">2:00 PM</button>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Wed</p>
                      <p className="font-bold text-on-surface">14</p>
                      <button className="w-full py-2 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-fixed transition-colors">1:00 PM</button>
                      <button className="w-full py-2 rounded-lg border border-primary text-primary font-label-md hover:bg-primary-fixed transition-colors">4:30 PM</button>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low text-center">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Times shown in East Africa Time (EAT)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators / Chips */}
        <section className="py-space-md border-y border-surface-container">
          <div className="max-w-container-max mx-auto px-margin-desktop flex flex-wrap justify-center gap-space-md">
            <span className="px-4 py-2 bg-secondary-container/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20 flex items-center gap-2">
              <Icon className="text-[18px]">verified</Icon> Background Checked
            </span>
            <span className="px-4 py-2 bg-secondary-container/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20 flex items-center gap-2">
              <Icon className="text-[18px]">shield</Icon> Insurance Coverage
            </span>
            <span className="px-4 py-2 bg-secondary-container/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20 flex items-center gap-2">
              <Icon className="text-[18px]">support_agent</Icon> 24/7 Provider Support
            </span>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-space-xl bg-surface-container-lowest relative">
          <div className="max-w-container-max mx-auto px-margin-desktop text-center">
            <div className="max-w-3xl mx-auto space-y-space-md">
              <h2 className="font-headline-lg text-headline-lg text-primary">Ready to reach more clients in Uganda?</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Setting up your profile takes less than 10 minutes. Start growing your professional footprint
                today.
              </p>
              <div className="pt-space-md">
                <button className="bg-primary text-on-primary text-headline-sm font-bold px-12 py-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 flex items-center gap-4 mx-auto">
                  Start Your Business <Icon>arrow_forward</Icon>
                </button>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">
                No hidden fees to sign up. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest mt-space-xl">
        <div className="w-full py-space-xl px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter max-w-container-max mx-auto">
          <div className="space-y-space-sm max-w-xs">
            <h2 className="text-headline-sm font-headline-sm font-bold text-primary">ServiceLink Uganda</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              The premier marketplace for certified service professionals and discerning clients across
              Uganda.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-label-md text-label-md text-on-surface font-bold mb-2">Platform</h3>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">About</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">How it Works</a>
              <a className="font-label-md text-label-md text-primary font-bold" href="#">Become a Provider</a>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-label-md text-label-md text-on-surface font-bold mb-2">Legal</h3>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-label-md text-label-md text-on-surface font-bold mb-2">Contact</h3>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Kampala Office</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Support Center</a>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop py-space-md border-t border-surface-container-high flex justify-between items-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-90">
            © 2024 ServiceLink Uganda. All rights reserved.
          </p>
          <div className="flex gap-space-md opacity-70">
            <Icon className="text-[20px]">public</Icon>
            <Icon className="text-[20px]">share</Icon>
            <Icon className="text-[20px]">verified</Icon>
          </div>
        </div>
      </footer>
    </div>
  );
}
