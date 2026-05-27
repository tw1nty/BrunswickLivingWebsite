// Brunswick Living — page sections

/* ───────────── NAV ───────────── */
function Nav({ onBook }) {
  const [active, setActive] = React.useState("home");
  React.useEffect(() => {
    const handler = () => {
      const ids = ["home", "opportunity", "advertise", "exclusive", "contact"];
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const go = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" onClick={go("home")} className="nav-brand">
          <span className="mark">Brunswick Living</span>
          <span className="tag">Magazine · Advertise</span>
        </a>
        <div className="nav-links">
          <a href="#opportunity" onClick={go("opportunity")} className={active === "opportunity" ? "active" : ""}>The Opportunity</a>
          <a href="#advertise" onClick={go("advertise")} className={active === "advertise" ? "active" : ""}>Advertise</a>
          <a href="#exclusive" onClick={go("exclusive")} className={active === "exclusive" ? "active" : ""}>Exclusive Sponsorships</a>
          <a href="#contact" onClick={go("contact")} className={active === "contact" ? "active" : ""}>Contact</a>
        </div>
        <div className="nav-actions">
          <span className="phone">(301) 555 · 0190</span>
          <button className="btn btn-primary" onClick={() => onBook()}>Schedule a Call <ArrowRight size={14}/></button>
        </div>
      </div>
    </nav>
  );
}

/* ───────────── HERO ───────────── */
function Hero({ onBook, variant = "image" }) {
  return (
    <section id="home" className="hero">
      <div className="hero-topline">
        <span className="eyebrow">Vol.<span style={{ color: "var(--ink)" }}>01</span> <span className="dot"/> Issue.<span style={{ color: "var(--ink)" }}>01</span> <span className="dot"/> Advertiser Edition</span>
        <span className="folio">Brunswick, Maryland · May 2026</span>
      </div>
      <div className="hero-grid">
        <div>
          <h1 className="hero-headline">
            Reach the community<br/>everyone's <em>moving to —</em><br/>before your competitor does.
          </h1>
          <p className="hero-sub">
            Brunswick, MD is the #1 fastest-growing city in Maryland. Brunswick Living is the only media built entirely for this community — print and digital, neighbor to neighbor.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={onBook}>Reserve Your Ad Space <ArrowRight size={14}/></button>
            <button className="btn btn-ghost" onClick={onBook}>Schedule a Call</button>
          </div>
          <div className="hero-meta">
            <span><strong>Print + Digital</strong> · delivered to every household</span>
            <span><strong>One business per category</strong></span>
            <span><strong>Locally owned</strong> · published in Brunswick</span>
          </div>
        </div>
        <div className="hero-image-wrap">
          {variant === "image" && (
            <div className="hero-image">
              <img src="images/town-overlook.jpg" alt="View of Brunswick from the overlook"/>
              <div className="hero-caption">
                <span>Brunswick from the overlook,<br/>looking south across the Potomac.</span>
                <span style={{ fontFamily: "DM Mono, monospace", fontStyle: "normal", fontSize: 11, letterSpacing: "0.1em" }}>39.31°N<br/>77.62°W</span>
              </div>
            </div>
          )}
          {variant === "type" && (
            <div className="hero-image" style={{ background: "var(--paper-2)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 32, filter: "none" }}>
              <div className="eyebrow">A Note From the Publisher</div>
              <div>
                <p style={{ fontFamily: "Newsreader, serif", fontStyle: "italic", fontSize: "clamp(22px, 2.2vw, 32px)", lineHeight: 1.25, color: "var(--ink-2)" }}>
                  "Every new family that closes on a house in this town needs a plumber, a dentist, a contractor, a place to eat on a Tuesday night. We're putting your name in their hands."
                </p>
                <p style={{ marginTop: 24, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-3)" }}>— The Editors</p>
              </div>
            </div>
          )}
          {variant === "wheat" && (
            <div className="hero-image">
              <img src="images/wheat-field.jpg" alt="Wheat field at sunrise"/>
              <div className="hero-caption">
                <span>The valley west of town,<br/>July.</span>
                <span style={{ fontFamily: "DM Mono, monospace", fontStyle: "normal", fontSize: 11, letterSpacing: "0.1em" }}>EST. 1890</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-track">
          {Array.from({ length: 3 }).map((_, k) => (
            <React.Fragment key={k}>
              <span>#1 fastest-growing city in Maryland</span><span className="pip">◆</span>
              <span>38.5% population growth since 2010</span><span className="pip">◆</span>
              <span>900 new homes built, 600+ under construction</span><span className="pip">◆</span>
              <span>~1,000 new residents per year</span><span className="pip">◆</span>
              <span>Historic C&O canal town · 12 miles from Frederick</span><span className="pip">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── SECTION HEAD ───────────── */
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

/* ───────────── 1 · OPPORTUNITY ───────────── */
function Opportunity({ onBook }) {
  return (
    <section id="opportunity" className="section">
      <div className="container">
        <SectionHead
          folio="01"
          label="The Brunswick Opportunity"
          title={<>A town the rest of Maryland is <em>just now</em> noticing.</>}
        />

        <div className="stats">
          <div className="stat">
            <div className="num"><em>#1</em></div>
            <div className="lbl">Fastest-Growing</div>
            <div className="body">Brunswick now leads every city in Maryland for population growth.</div>
          </div>
          <div className="stat">
            <div className="num">38.5<sup>%</sup></div>
            <div className="lbl">Growth Since 2010</div>
            <div className="body">More than triple the state average over the same fifteen-year window.</div>
          </div>
          <div className="stat">
            <div className="num">900<sup>+</sup></div>
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
            <img src="images/town-overlook.jpg" alt="Aerial of Brunswick town center along the Potomac"/>
          </div>
          <div className="opportunity-body">
            <div>
              <p style={{ marginBottom: 20 }}>
                Brunswick has spent a hundred and thirty years as a quiet canal town — railroad workers, river fishermen, brick storefronts on West Potomac Street. <em>That isn't changing.</em> What's changing is the rate at which people from Frederick, Montgomery County, and DC are choosing it.
              </p>
              <p>
                The corridor from Brunswick Crossing to the new builds off Souder Road has added a thousand households in three years. Most of those families don't yet have a regular plumber, dentist, lawn guy, or pediatrician. The first name they hear, wins.
              </p>
            </div>
            <div>
              <button className="btn-link" onClick={() => document.getElementById("audience")?.scrollIntoView({ behavior: "smooth" })}>
                See who's moving in →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── 2 · ISOLATION ───────────── */
function Isolation() {
  return (
    <section className="section section--paper-2">
      <div className="container">
        <SectionHead
          folio="02"
          label="The Isolation Advantage"
          title={<>Tucked between the river and the ridge. <em>That's the opportunity.</em></>}
        />

        <div className="isolation">
          <div>
            <p className="pullquote">
              <em>"When they need someone, they need someone</em> local.<em>"</em>
            </p>
            <p style={{ marginTop: 32, fontSize: 16.5, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: "50ch" }}>
              Brunswick isn't a strip-mall suburb of anywhere. It's a tight geographic community bounded by the Potomac to the south, the Catoctin ridge to the north, and twelve miles of state highway between it and the next thing. That changes how residents shop, search, and choose.
            </p>
          </div>
          <div className="iso-points">
            <div className="iso-point">
              <div className="num">i.</div>
              <div>
                <h4>Low ad clutter, high attention</h4>
                <p>National chains haven't shown up yet. Your message lands without competing against a wall of digital noise.</p>
              </div>
            </div>
            <div className="iso-point">
              <div className="num">ii.</div>
              <div>
                <h4>Geography keeps them close</h4>
                <p>Residents can't easily run to a competitor in Frederick when the water heater fails on a Sunday. Whoever they know in town wins the job.</p>
              </div>
            </div>
            <div className="iso-point">
              <div className="num">iii.</div>
              <div>
                <h4>Urgency-driven buying behavior</h4>
                <p>Home services, healthcare, child care — these are need-it-now categories. They reach for the name they've already seen on the kitchen counter.</p>
              </div>
            </div>
            <div className="iso-point">
              <div className="num">iv.</div>
              <div>
                <h4>A community that talks to itself</h4>
                <p>Recommendations travel block-to-block on a Facebook group of 4,200 people. Get into the magazine and the conversation follows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── 3 · WHAT IS ───────────── */
function WhatIs() {
  const items = [
    ["Local Government",       "p. 04"],
    ["School Athletics",       "p. 12"],
    ["HOA & Neighborhood News","p. 18"],
    ["Community Events",       "p. 24"],
    ["Neighbor Spotlights",    "p. 30"],
    ["Local Attractions",      "p. 36"],
    ["Expert Columns",         "p. 42"],
    ["Around the Town",        "p. 50"],
  ];
  return (
    <section id="advertise" className="section">
      <div className="container">
        <SectionHead
          folio="03"
          label="What is Brunswick Living"
          title={<>A magazine residents <em>keep</em> — not a flyer they throw out.</>}
        />

        <div className="what-grid">
          <div className="mag-cover">
            <div className="masthead">
              <span>Brunswick<br/><span style={{ fontStyle: "italic" }}>Living.</span></span>
              <span className="vol">VOL.01 · No.01</span>
            </div>
            <div className="cover-img">
              <img src="images/farm-alpacas.avif" alt="Farm at golden hour outside Brunswick"/>
            </div>
            <div className="feature-line">
              <strong>Inside this issue</strong>
              The bakery on Potomac Street · The new pediatrician taking patients · HOA elections in Brunswick Crossing · Friday-night football at BHS
            </div>
          </div>

          <div className="what-body">
            <h3>Print and digital. Mailed to every household. <em>Read at the kitchen table.</em></h3>
            <p>
              Brunswick Living is a community magazine, not a coupon mailer. Every issue is written for the people actually living here — covering the school board meeting, the new shop on Maple Avenue, the kid who just made the varsity roster — alongside the stories of the local businesses serving them. It sits on coffee tables. It gets clipped, saved, and referenced.
            </p>
            <p>That's where your ad lives, too.</p>

            <div className="section-list">
              {items.map(([n, p]) => (
                <div className="item" key={n}>
                  <span className="name">{n}</span>
                  <span className="pg">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── 4 · SOLUTION ───────────── */
function Solution() {
  const cards = [
    {
      n: "i.",
      h: "Print Advertising",
      p: "Reach every household with a tangible, trusted page — kept on the counter for the entire month, not scrolled past in two seconds.",
      tags: ["Direct mail", "Display ad", "Brand awareness"]
    },
    {
      n: "ii.",
      h: "Digital Marketing",
      p: "Online edition, social amplification, and email companion sends — your message moves with residents from kitchen to phone.",
      tags: ["Online edition", "Social", "Email"]
    },
    {
      n: "iii.",
      h: "Online Presence Tools",
      p: "Business-listing management and review monitoring across Google, Yelp, and Facebook — so the first impression matches your magazine ad.",
      tags: ["Listings", "Reviews", "Reputation"]
    },
    {
      n: "iv.",
      h: "Expert Contributor & Content Sponsorship",
      p: "Own your category. One column, one byline, one name residents trust on the topic — for the entire year.",
      tags: ["Bylined column", "Category lock", "Annual"]
    }
  ];
  return (
    <section className="section section--paper-2">
      <div className="container">
        <SectionHead
          folio="04"
          label="A Complete Marketing Solution"
          title={<>Four products. <em>One name in town.</em></>}
        />
        <div className="solution-grid">
          {cards.map((c, i) => (
            <div className="sol-card" key={i}>
              <span className="num">{c.n}</span>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
              <div className="tags">{c.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── 5 · EXCLUSIVE CATEGORIES ───────────── */
const CATEGORIES = [
  { n: "Plumbing & Drain",          d: "One plumber. One column. The first call when the line backs up on a Sunday.",            status: "open" },
  { n: "HVAC & Heating",            d: "Owns 'when the furnace dies in February.'",                                              status: "last" },
  { n: "Roofing & Exterior",        d: "Storm season makes this category move quickly.",                                         status: "open" },
  { n: "Family & Cosmetic Dentistry", d: "New-family households booking first appointments.",                                    status: "claimed" },
  { n: "Real Estate Attorney",      d: "Closings, refinances, estate planning — high-trust category.",                           status: "open" },
  { n: "Pediatric & Family Care",   d: "1,000 new residents a year, half of them under 18.",                                     status: "last" },
  { n: "Insurance — Home & Auto",   d: "Annual renewals across thousands of new policies.",                                      status: "open" },
  { n: "Landscaping & Lawn Care",   d: "New builds, new yards, new lawn contracts.",                                             status: "open" },
  { n: "Electrical Contracting",    d: "Panel upgrades and EV-charger installs in the new corridors.",                           status: "open" },
  { n: "Financial Advisory",        d: "Commuter incomes, local advisors.",                                                      status: "claimed" },
  { n: "Veterinary Care",           d: "More dogs in Brunswick than ever. Way more.",                                            status: "open" },
  { n: "Custom Home Building",      d: "The category that sits behind every other category.",                                    status: "last" },
];

function Exclusive({ onBook }) {
  const reserve = (n) => onBook(n);
  return (
    <section id="exclusive" className="section cat-section">
      <div className="container">
        <SectionHead
          folio="05"
          label="Exclusive Category Sponsorships"
          title={<>Only one business per industry. <em>Once it's gone, it's gone.</em></>}
        >
          <p style={{ marginTop: 20, fontSize: 17, color: "var(--ink-2)", maxWidth: "58ch", lineHeight: 1.6 }}>
            Each Expert Contributor spot includes a bylined monthly column, premium display placement, a digital business profile, and review-monitoring tools. <strong>The categories below are tracked in real time.</strong>
          </p>
        </SectionHead>

        <div className="cat-table">
          {CATEGORIES.map((c, i) => (
            <div
              key={c.n}
              className={"cat-row " + (c.status === "claimed" ? "is-claimed" : "")}
              onClick={() => c.status !== "claimed" && reserve(c.n)}
            >
              <div className="idx">No. {String(i + 1).padStart(2, "0")}</div>
              <div className="name">{c.n}</div>
              <div className="desc">{c.d}</div>
              <div className={"status " + c.status}>
                <span className="dot"/>
                {c.status === "open" && "Spot Available"}
                {c.status === "last" && "1 Spot Left — Last Call"}
                {c.status === "claimed" && "Claimed"}
              </div>
              <div className="action">
                {c.status !== "claimed" && (
                  <button onClick={(e) => { e.stopPropagation(); reserve(c.n); }}>
                    Claim This Category →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cat-legend">
          <span><span className="dot" style={{ background: "var(--forest)" }}/>Available</span>
          <span><span className="dot" style={{ background: "var(--brick)" }}/>Last spot</span>
          <span><span className="dot" style={{ background: "var(--ink-faint)" }}/>Claimed for Vol. 01</span>
        </div>
      </div>
    </section>
  );
}

/* ───────────── 6 · INDUSTRIES ───────────── */
function Industries() {
  const items = [
    { I: Home, name: "Home Services", c: "HVAC · Plumbing · Roofing · Lawn" },
    { I: Stethoscope, name: "Healthcare", c: "Dental · Pediatric · Urgent Care" },
    { I: Briefcase, name: "Financial & Legal", c: "Advisors · Attorneys · Insurance" },
    { I: Fork, name: "Restaurants & Cafés", c: "Sit-down · Takeout · Coffee" },
    { I: Building, name: "Real Estate", c: "Agents · Builders · Inspectors" },
    { I: Tag, name: "Retail & Boutique", c: "Main Street merchants" },
    { I: Dumbbell, name: "Fitness & Wellness", c: "Studios · Trainers · Therapy" },
    { I: Scissors, name: "Personal Services", c: "Salons · Cleaners · Pet Care" },
  ];
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          folio="06"
          label="Who Advertises in Brunswick Living"
          title={<>The kinds of businesses <em>your neighbors</em> are already calling.</>}
        />
        <div className="industries">
          {items.map(({ I, name, c }) => (
            <div className="industry" key={name}>
              <I size={26}/>
              <div className="name">{name}</div>
              <div className="count">{c}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: 32, border: "1px solid var(--rule)", background: "var(--paper-2)", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Pilot Advertisers</div>
            <p style={{ fontFamily: "Newsreader, serif", fontSize: 22, lineHeight: 1.3, fontStyle: "italic", color: "var(--ink-2)" }}>
              Charter advertiser names will appear here as Vol. 01 closes. If you'd like to be among them, the conversation starts the same way — a 20-minute walk-through.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ aspectRatio: "3/2", border: "1px dashed var(--rule)", background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Mono, monospace", fontSize: 10, color: "var(--ink-faint)", letterSpacing: "0.12em" }}>
                LOGO · {String(i+1).padStart(2,"0")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── 7 · AUDIENCE ───────────── */
function Audience() {
  const personas = [
    {
      img: "images/farm-alpacas.avif",
      h: "New Homeowners",
      d: "Closed in the last 24 months. Spending big on contractors, lawn services, window treatments, and a regular dentist.",
      tags: ["High spend", "Home services"]
    },
    {
      img: "images/picnic.jpg",
      h: "Young Families",
      d: "Kids in BCPS, weekends at C&O Canal. Looking for pediatricians, swim lessons, birthday venues, family restaurants.",
      tags: ["Healthcare", "Education", "Sports"]
    },
    {
      img: "images/train-tunnel.jpg",
      h: "MARC Commuters",
      d: "DC paycheck, Brunswick lifestyle. Time-strapped, value-driven, willing to pay for convenience close to home.",
      tags: ["Premium", "Convenience"]
    },
    {
      img: "images/bike-trail.jpg",
      h: "Community-Invested",
      d: "On the HOA board, at the school play, in the Facebook group. They drive word of mouth — and they read every issue.",
      tags: ["Influencers", "Word of mouth"]
    }
  ];
  return (
    <section id="audience" className="section section--paper-2">
      <div className="container">
        <SectionHead
          folio="07"
          label="The Audience You're Buying"
          title={<>Four households. <em>One zip code.</em></>}
        />
        <div className="personas">
          {personas.map((p, i) => (
            <div className="persona" key={i}>
              <div className="ph"><img src={p.img} alt=""/></div>
              <div className="body">
                <h4>{p.h}</h4>
                <p className="desc">{p.d}</p>
                <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── 8 · SCHEDULE ───────────── */
function ScheduleSection({ onBook }) {
  return (
    <section id="contact" className="section schedule-section">
      <div className="container">
        <div className="schedule-grid">
          <div>
            <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--paper), transparent 40%)" }}>§ 08 · Get Started</span>
            <h2 style={{ marginTop: 14 }}>Let's find <em>the right fit</em> for your business.</h2>
            <p style={{ marginTop: 24 }}>
              No forms to fill out. No packages to guess at. Just a twenty-minute conversation where we walk you through everything we publish, who reads it, and what would make sense for the way you actually do business.
            </p>
            <div className="promise">
              <div className="row"><Check size={16}/><div>No commitments — it's a conversation, not a pitch.</div></div>
              <div className="row"><Check size={16}/><div>In-person, at your shop or over coffee on Potomac Street.</div></div>
              <div className="row"><Check size={16}/><div>You'll leave with a clear sense of what we'd recommend and what we wouldn't.</div></div>
            </div>
          </div>
          <div className="booking-card">
            <div className="ey">A 20-minute conversation</div>
            <h3>Schedule Your Appointment</h3>
            <p style={{ fontSize: 14.5, color: "var(--ink-2)", marginTop: 6, marginBottom: 24 }}>
              Pick a day that works. We'll confirm the time and the place within a business day.
            </p>
            <button className="btn btn-primary" onClick={() => onBook()} style={{ width: "100%", justifyContent: "center", padding: "16px 22px", fontSize: 15 }}>
              <Calendar size={16}/> Open the Calendar <ArrowRight size={14}/>
            </button>
            <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--rule)", display: "grid", gap: 10, fontSize: 13, color: "var(--ink-2)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Phone size={14} style={{ color: "var(--forest)" }}/> Or call (301) 555-0190</div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Mail size={14} style={{ color: "var(--forest)" }}/> hello@brunswickliving.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── FOOTER CTA + FOOTER ───────────── */
function FooterCTA({ onBook }) {
  return (
    <section className="cta-band">
      <div className="container">
        <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--paper), transparent 30%)" }}>The Window Is Now</span>
        <h2 style={{ marginTop: 18 }}>Brunswick is growing.<br/>Your window to be the <em>go-to name</em><br/>in your industry is now.</h2>
        <p>Every category we lock for Vol. 01 takes a name out of the running for the next ten issues. The conversation is twenty minutes. The decision is yours.</p>
        <div className="cta">
          <button className="btn btn-primary" onClick={onBook}>Reserve My Space <ArrowRight size={14}/></button>
          <button className="btn btn-ghost" onClick={onBook}>Book Your Consultation</button>
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
            <p className="blurb">A community magazine for Brunswick, MD — covering local government, schools, neighbors, and the businesses that serve them. Published monthly. Read at the kitchen table.</p>
          </div>
          <div>
            <h5>Sections</h5>
            <ul>
              <li><a href="#opportunity">The Opportunity</a></li>
              <li><a href="#advertise">Advertise</a></li>
              <li><a href="#exclusive">Exclusive Sponsorships</a></li>
              <li><a href="#audience">Audience</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>(301) 555 · 0190</li>
              <li>hello@brunswickliving.com</li>
              <li>14 W Potomac St<br/>Brunswick, MD 21716</li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Brunswick Living Magazine · Brunswick, Maryland</span>
          <span style={{ fontFamily: "Newsreader, serif", fontStyle: "italic" }}>Vol. 01 closes for advertisers September 2026.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Opportunity, Isolation, WhatIs, Solution, Exclusive, Industries, Audience, ScheduleSection, FooterCTA, Footer });
