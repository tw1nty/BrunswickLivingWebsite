"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building,
  Calendar,
  Check,
  Dumbbell,
  Fork,
  HomeIcon,
  Mail,
  Phone,
  Scissors,
  Stethoscope,
  Tag
} from "@/components/icons";

const SECTION_IDS = ["home", "opportunity", "advertise", "exclusive", "contact"];
const BOOKING_CALENDAR_URL = "https://calendar.app.google/iY4moyuz71H4ZA67A";

const CATEGORIES = [
  {
    n: "Plumbing & Drain",
    d: "One plumber. One column. The first call when the line backs up on a Sunday.",
    status: "open"
  },
  { n: "HVAC & Heating", d: "Owns 'when the furnace dies in February.'", status: "last" },
  {
    n: "Roofing & Exterior",
    d: "Storm season makes this category move quickly.",
    status: "open"
  },
  {
    n: "Family & Cosmetic Dentistry",
    d: "New-family households booking first appointments.",
    status: "claimed"
  },
  {
    n: "Real Estate Attorney",
    d: "Closings, refinances, estate planning - high-trust category.",
    status: "open"
  },
  {
    n: "Pediatric & Family Care",
    d: "1,000 new residents a year, half of them under 18.",
    status: "last"
  },
  {
    n: "Insurance - Home & Auto",
    d: "Annual renewals across thousands of new policies.",
    status: "open"
  },
  {
    n: "Landscaping & Lawn Care",
    d: "New builds, new yards, new lawn contracts.",
    status: "open"
  },
  {
    n: "Electrical Contracting",
    d: "Panel upgrades and EV-charger installs in the new corridors.",
    status: "open"
  },
  { n: "Financial Advisory", d: "Commuter incomes, local advisors.", status: "claimed" },
  { n: "Veterinary Care", d: "More dogs in Brunswick than ever. Way more.", status: "open" },
  {
    n: "Custom Home Building",
    d: "The category that sits behind every other category.",
    status: "last"
  }
];

const INDUSTRIES = [
  { Icon: HomeIcon, name: "Home Services", c: "HVAC · Plumbing · Roofing · Lawn" },
  { Icon: Stethoscope, name: "Healthcare", c: "Dental · Pediatric · Urgent Care" },
  { Icon: Briefcase, name: "Financial & Legal", c: "Advisors · Attorneys · Insurance" },
  { Icon: Fork, name: "Restaurants & Cafés", c: "Sit-down · Takeout · Coffee" },
  { Icon: Building, name: "Real Estate", c: "Agents · Builders · Inspectors" },
  { Icon: Tag, name: "Retail & Boutique", c: "Main Street merchants" },
  { Icon: Dumbbell, name: "Fitness & Wellness", c: "Studios · Trainers · Therapy" },
  { Icon: Scissors, name: "Personal Services", c: "Salons · Cleaners · Pet Care" }
];

const PERSONAS = [
  {
    img: "/images/farm-alpacas.avif",
    h: "New Homeowners",
    d: "Closed in the last 24 months. Spending big on contractors, lawn services, window treatments, and a regular dentist.",
    tags: ["High spend", "Home services"]
  },
  {
    img: "/images/picnic.jpg",
    h: "Young Families",
    d: "Kids in BCPS, weekends at C&O Canal. Looking for pediatricians, swim lessons, birthday venues, family restaurants.",
    tags: ["Healthcare", "Education", "Sports"]
  },
  {
    img: "/images/train-tunnel.jpg",
    h: "MARC Commuters",
    d: "DC paycheck, Brunswick lifestyle. Time-strapped, value-driven, willing to pay for convenience close to home.",
    tags: ["Premium", "Convenience"]
  },
  {
    img: "/images/bike-trail.jpg",
    h: "Community-Invested",
    d: "On the HOA board, at the school play, in the Facebook group. They drive word of mouth - and they read every issue.",
    tags: ["Influencers", "Word of mouth"]
  }
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Nav({ onBook }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      let current = "home";

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top < 120) current = id;
      }

      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = (id) => (event) => {
    event.preventDefault();
    scrollToId(id);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" onClick={go("home")} className="nav-brand">
          <span className="mark">Brunswick Living</span>
          <span className="tag">Magazine · Advertise</span>
        </a>
        <div className="nav-links">
          <a
            href="#opportunity"
            onClick={go("opportunity")}
            className={active === "opportunity" ? "active" : ""}
          >
            The Opportunity
          </a>
          <a
            href="#advertise"
            onClick={go("advertise")}
            className={active === "advertise" ? "active" : ""}
          >
            Advertise
          </a>
          <a
            href="#exclusive"
            onClick={go("exclusive")}
            className={active === "exclusive" ? "active" : ""}
          >
            Exclusive Sponsorships
          </a>
          <a href="#contact" onClick={go("contact")} className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </div>
        <div className="nav-actions">
          <span className="phone">301 648 0041</span>
          <button className="btn btn-primary" type="button" onClick={() => onBook()}>
            Schedule a Call <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onBook }) {
  return (
    <section id="home" className="hero">
      <div className="hero-topline">
        <span className="eyebrow">
          Vol.<span className="topline-ink">01</span> <span className="dot" /> Issue.
          <span className="topline-ink">01</span> <span className="dot" /> Advertiser Edition
        </span>
        <span className="folio">Brunswick, Maryland · May 2026</span>
      </div>
      <div className="hero-grid">
        <div>
          <h1 className="hero-headline">
            Reach the community
            <br />
            everyone's <em>moving to&nbsp;—</em>
            <br />
            before your competitor does.
          </h1>
          <p className="hero-sub">
            Brunswick, MD is the #1 fastest-growing city in Maryland. Brunswick Living is the only
            media built entirely for this community - print and digital, neighbor to neighbor.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" type="button" onClick={() => onBook()}>
              Reserve Your Ad Space <ArrowRight size={14} />
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => onBook()}>
              Schedule a Call
            </button>
          </div>
          <div className="hero-meta">
            <span>
              <strong>Print + Digital</strong> · delivered to every household
            </span>
            <span>
              <strong>One business per category</strong>
            </span>
            <span>
              <strong>Locally owned</strong> · published in Brunswick
            </span>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image">
            <img src="/images/hero2.png" alt="Brunswick Living advertiser hero" />
            <div className="hero-caption">
              <span>
                Brunswick from the overlook,
                <br />
                looking south across the Potomac.
              </span>
              <span className="geo">39.31°N<br />77.62°W</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-track">
          {Array.from({ length: 3 }).map((_, index) => (
            <span className="ticker-set" key={index}>
              <span>#1 fastest-growing city in Maryland</span>
              <span className="pip">◆</span>
              <span>38.5% population growth since 2010</span>
              <span className="pip">◆</span>
              <span>900 new homes built, 600+ under construction</span>
              <span className="pip">◆</span>
              <span>~1,000 new residents per year</span>
              <span className="pip">◆</span>
              <span>Historic C&O canal town · 12 miles from Frederick</span>
              <span className="pip">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ folio, label, title, children }) {
  return (
    <div className="section-head">
      <div className="meta">
        <span className="folio">§ {folio}</span>
        <span className="eyebrow">{label}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

function Opportunity() {
  return (
    <section id="opportunity" className="section">
      <div className="container">
        <SectionHead
          folio="01"
          label="The Brunswick Opportunity"
          title={
            <>
              A town the rest of Maryland is <em>just now</em> noticing.
            </>
          }
        />

        <div className="stats">
          <div className="stat">
            <div className="num">
              <em>#1</em>
            </div>
            <div className="lbl">Fastest-Growing</div>
            <div className="body">Brunswick now leads every city in Maryland for population growth.</div>
          </div>
          <div className="stat">
            <div className="num">
              38.5<sup>%</sup>
            </div>
            <div className="lbl">Growth Since 2010</div>
            <div className="body">More than triple the state average over the same fifteen-year window.</div>
          </div>
          <div className="stat">
            <div className="num">
              900<sup>+</sup>
            </div>
            <div className="lbl">New Homes Built</div>
            <div className="body">With another 600+ already underway across three active corridors.</div>
          </div>
          <div className="stat">
            <div className="num">1,000</div>
            <div className="lbl">New Neighbors / Year</div>
            <div className="body">Each one needs a plumber, a dentist, a roofer, somewhere to eat.</div>
          </div>
        </div>

        <div className="opportunity-grid">
          <div className="img">
            <img src="/images/advertisers.jpg" alt="Local Brunswick business advertisers" />
          </div>
          <div className="opportunity-body">
            <div>
              <p>
                Brunswick has spent a hundred and thirty years as a quiet canal town - railroad
                workers, river fishermen, brick storefronts on West Potomac Street. <em>That isn't
                changing.</em> What's changing is the rate at which people from Frederick,
                Montgomery County, and DC are choosing it.
              </p>
              <p>
                The corridor from Brunswick Crossing to the new builds off Souder Road has added a
                thousand households in three years. Most of those families don't yet have a regular
                plumber, dentist, lawn guy, or pediatrician. The first name they hear, wins.
              </p>
            </div>
            <div>
              <button className="btn-link" type="button" onClick={() => scrollToId("audience")}>
                See who's moving in →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Isolation() {
  return (
    <section className="section section--paper-2">
      <div className="container">
        <SectionHead
          folio="02"
          label="The Isolation Advantage"
          title={
            <>
              Tucked between the river and the ridge. <em>That's the opportunity.</em>
            </>
          }
        />

        <div className="isolation">
          <div>
            <p className="pullquote">
              <em>"When they need someone, they need someone</em> local.<em>"</em>
            </p>
            <p className="isolation-copy">
              Brunswick isn't a strip-mall suburb of anywhere. It's a tight geographic community
              bounded by the Potomac to the south, the Catoctin ridge to the north, and twelve
              miles of state highway between it and the next thing. That changes how residents
              shop, search, and choose.
            </p>
          </div>
          <div className="iso-points">
            {[
              [
                "i.",
                "Low ad clutter, high attention",
                "National chains haven't shown up yet. Your message lands without competing against a wall of digital noise."
              ],
              [
                "ii.",
                "Geography keeps them close",
                "Residents can't easily run to a competitor in Frederick when the water heater fails on a Sunday. Whoever they know in town wins the job."
              ],
              [
                "iii.",
                "Urgency-driven buying behavior",
                "Home services, healthcare, child care - these are need-it-now categories. They reach for the name they've already seen on the kitchen counter."
              ],
              [
                "iv.",
                "A community that talks to itself",
                "Recommendations travel block-to-block on a Facebook group of 4,200 people. Get into the magazine and the conversation follows."
              ]
            ].map(([num, title, copy]) => (
              <div className="iso-point" key={num}>
                <div className="num">{num}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIs() {
  const items = [
    ["Local Government", "p. 04"],
    ["School Athletics", "p. 12"],
    ["HOA & Neighborhood News", "p. 18"],
    ["Community Events", "p. 24"],
    ["Neighbor Spotlights", "p. 30"],
    ["Local Attractions", "p. 36"],
    ["Expert Columns", "p. 42"],
    ["Around the Town", "p. 50"]
  ];

  return (
    <section id="advertise" className="section">
      <div className="container">
        <SectionHead
          folio="03"
          label="What is Brunswick Living"
          title={
            <>
              A magazine residents <em>keep</em> - not a flyer they throw out.
            </>
          }
        />

        <div className="what-grid">
          <div className="mag-cover">
            <div className="masthead">
              <span>
                Brunswick
                <br />
                <span>Living.</span>
              </span>
              <span className="vol">VOL.01 · No.01</span>
            </div>
            <div className="cover-img">
              <img src="/images/farm-alpacas.avif" alt="Farm at golden hour outside Brunswick" />
            </div>
            <div className="feature-line">
              <strong>Inside this issue</strong>
              The bakery on Potomac Street · The new pediatrician taking patients · HOA elections in
              Brunswick Crossing · Friday-night football at BHS
            </div>
          </div>

          <div className="what-body">
            <h3>
              Print and digital. Mailed to every household. <em>Read at the kitchen table.</em>
            </h3>
            <p>
              Brunswick Living is a community magazine, not a coupon mailer. Every issue is written
              for the people actually living here - covering the school board meeting, the new shop
              on Maple Avenue, the kid who just made the varsity roster - alongside the stories of
              the local businesses serving them. It sits on coffee tables. It gets clipped, saved,
              and referenced.
            </p>
            <p>That's where your ad lives, too.</p>

            <div className="section-list">
              {items.map(([name, page]) => (
                <div className="item" key={name}>
                  <span className="name">{name}</span>
                  <span className="pg">{page}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const cards = [
    {
      n: "i.",
      h: "Print Advertising",
      p: "Reach every household with a tangible, trusted page - kept on the counter for the entire month, not scrolled past in two seconds.",
      tags: ["Direct mail", "Display ad", "Brand awareness"]
    },
    {
      n: "ii.",
      h: "Digital Marketing",
      p: "Online edition, social amplification, and email companion sends - your message moves with residents from kitchen to phone.",
      tags: ["Online edition", "Social", "Email"]
    },
    {
      n: "iii.",
      h: "Online Presence Tools",
      p: "Business-listing management and review monitoring across Google, Yelp, and Facebook - so the first impression matches your magazine ad.",
      tags: ["Listings", "Reviews", "Reputation"]
    },
    {
      n: "iv.",
      h: "Expert Contributor & Content Sponsorship",
      p: "Own your category. One column, one byline, one name residents trust on the topic - for the entire year.",
      tags: ["Bylined column", "Category lock", "Annual"]
    }
  ];

  return (
    <section className="section section--paper-2">
      <div className="container">
        <SectionHead
          folio="04"
          label="A Complete Marketing Solution"
          title={
            <>
              Four products. <em>One name in town.</em>
            </>
          }
        />
        <div className="solution-grid">
          {cards.map((card) => (
            <div className="sol-card" key={card.h}>
              <span className="num">{card.n}</span>
              <h4>{card.h}</h4>
              <p>{card.p}</p>
              <div className="tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Exclusive({ onBook }) {
  const reserve = (name) => onBook(name);

  const handleKeyDown = (event, category) => {
    if (category.status === "claimed") return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      reserve(category.n);
    }
  };

  return (
    <section id="exclusive" className="section cat-section">
      <div className="container">
        <SectionHead
          folio="05"
          label="Exclusive Category Sponsorships"
          title={
            <>
              Only one business per industry. <em>Once it's gone, it's gone.</em>
            </>
          }
        >
          <p className="section-intro">
            Each Expert Contributor spot includes a bylined monthly column, premium display
            placement, a digital business profile, and review-monitoring tools. <strong>The
            categories below are tracked in real time.</strong>
          </p>
        </SectionHead>

        <div className="cat-table">
          {CATEGORIES.map((category, index) => (
            <div
              key={category.n}
              className={`cat-row ${category.status === "claimed" ? "is-claimed" : ""}`}
              onClick={() => category.status !== "claimed" && reserve(category.n)}
              onKeyDown={(event) => handleKeyDown(event, category)}
              role={category.status === "claimed" ? undefined : "button"}
              tabIndex={category.status === "claimed" ? undefined : 0}
            >
              <div className="idx">No. {String(index + 1).padStart(2, "0")}</div>
              <div className="name">{category.n}</div>
              <div className="desc">{category.d}</div>
              <div className={`status ${category.status}`}>
                <span className="dot" />
                {category.status === "open" && "Spot Available"}
                {category.status === "last" && "1 Spot Left - Last Call"}
                {category.status === "claimed" && "Claimed"}
              </div>
              <div className="action">
                {category.status !== "claimed" && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      reserve(category.n);
                    }}
                  >
                    Claim This Category →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cat-legend">
          <span>
            <span className="dot available-dot" />
            Available
          </span>
          <span>
            <span className="dot last-dot" />
            Last spot
          </span>
          <span>
            <span className="dot claimed-dot" />
            Claimed for Vol. 01
          </span>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          folio="06"
          label="Who Advertises in Brunswick Living"
          title={
            <>
              The kinds of businesses <em>your neighbors</em> are already calling.
            </>
          }
        />
        <div className="industries">
          {INDUSTRIES.map(({ Icon, name, c }) => (
            <div className="industry" key={name}>
              <Icon size={26} />
              <div className="name">{name}</div>
              <div className="count">{c}</div>
            </div>
          ))}
        </div>

        <div className="pilot-advertisers">
          <div>
            <div className="eyebrow pilot-label">Pilot Advertisers</div>
            <p>
              Charter advertiser names will appear here as Vol. 01 closes. If you'd like to be
              among them, the conversation starts the same way - a 20-minute walk-through.
            </p>
          </div>
          <div className="logo-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index}>LOGO · {String(index + 1).padStart(2, "0")}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id="audience" className="section section--paper-2">
      <div className="container">
        <SectionHead
          folio="07"
          label="The Audience You're Buying"
          title={
            <>
              Four households. <em>One zip code.</em>
            </>
          }
        />
        <div className="personas">
          {PERSONAS.map((persona) => (
            <div className="persona" key={persona.h}>
              <div className="ph">
                <img src={persona.img} alt="" />
              </div>
              <div className="body">
                <h4>{persona.h}</h4>
                <p className="desc">{persona.d}</p>
                <div className="tags">
                  {persona.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScheduleSection({ onBook }) {
  return (
    <section id="contact" className="section schedule-section">
      <div className="container">
        <div className="schedule-grid">
          <div>
            <span className="eyebrow schedule-label">§ 08 · Get Started</span>
            <h2>
              Let's find <em>the right fit</em> for your business.
            </h2>
            <p>
              No forms to fill out. No packages to guess at. Just a twenty-minute conversation
              where we walk you through everything we publish, who reads it, and what would make
              sense for the way you actually do business.
            </p>
            <div className="promise">
              <div className="row">
                <Check size={16} />
                <div>No commitments - it's a conversation, not a pitch.</div>
              </div>
              <div className="row">
                <Check size={16} />
                <div>In-person, at your shop or over coffee on Potomac Street.</div>
              </div>
              <div className="row">
                <Check size={16} />
                <div>You'll leave with a clear sense of what we'd recommend and what we wouldn't.</div>
              </div>
            </div>
          </div>
          <div className="booking-card">
            <div className="ey">A 20-minute conversation</div>
            <h3>Schedule Your Appointment</h3>
            <p>
              Pick a day that works. We'll confirm the time and the place within a business day.
            </p>
            <button className="btn btn-primary full-button" type="button" onClick={() => onBook()}>
              <Calendar size={16} /> Open the Calendar <ArrowRight size={14} />
            </button>
            <div className="contact-list">
              <div>
                <Phone size={14} /> Or call 301 648 0041
              </div>
              <div>
                <Mail size={14} /> andrew@brunswicklivingmagazine.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterCTA({ onBook }) {
  return (
    <section className="cta-band">
      <div className="container">
        <span className="eyebrow">The Window Is Now</span>
        <h2>
          Brunswick is growing.
          <br />
          Your window to be the <em>go-to name</em>
          <br />
          in your industry is now.
        </h2>
        <p>
          Every category we lock for Vol. 01 takes a name out of the running for the next ten
          issues. The conversation is twenty minutes. The decision is yours.
        </p>
        <div className="cta">
          <button className="btn btn-primary" type="button" onClick={() => onBook()}>
            Reserve My Space <ArrowRight size={14} />
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => onBook()}>
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="mark">Brunswick Living.</div>
            <p className="blurb">
              A community magazine for Brunswick, MD - covering local government, schools,
              neighbors, and the businesses that serve them. Published monthly. Read at the kitchen
              table.
            </p>
          </div>
          <div>
            <h5>Sections</h5>
            <ul>
              <li>
                <a href="#opportunity">The Opportunity</a>
              </li>
              <li>
                <a href="#advertise">Advertise</a>
              </li>
              <li>
                <a href="#exclusive">Exclusive Sponsorships</a>
              </li>
              <li>
                <a href="#audience">Audience</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>301 648 0041</li>
              <li>andrew@brunswicklivingmagazine.com</li>
              <li>
                14 W Potomac St
                <br />
                Brunswick, MD 21716
              </li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Brunswick Living Magazine · Brunswick, Maryland</span>
          <span>Vol. 01 closes for advertisers September 2026.</span>
        </div>
      </div>
    </footer>
  );
}

export function AdvertiserSite() {
  const onBook = () => {
    const opened = window.open(BOOKING_CALENDAR_URL, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = BOOKING_CALENDAR_URL;
  };

  return (
    <div data-screen-label="Advertiser Site - Long Scroll">
      <Nav onBook={onBook} />
      <Hero onBook={onBook} />
      <Opportunity />
      <Isolation />
      <WhatIs />
      <Solution />
      <Exclusive onBook={onBook} />
      <Industries />
      <Audience />
      <ScheduleSection onBook={onBook} />
      <FooterCTA onBook={onBook} />
      <Footer />
    </div>
  );
}
