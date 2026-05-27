// Brunswick Living — main App

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "forest",
  "heroVariant": "image"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [prefillCategory, setPrefillCategory] = React.useState(null);

  React.useEffect(() => {
    document.documentElement.dataset.palette = t.palette;
  }, [t.palette]);

  const onBook = (category) => {
    setPrefillCategory(typeof category === "string" ? category : null);
    setDrawerOpen(true);
  };

  return (
    <div data-screen-label="Advertiser Site — Long Scroll">
      <Nav onBook={onBook}/>
      <Hero onBook={onBook} variant={t.heroVariant}/>
      <Opportunity onBook={onBook}/>
      <Isolation/>
      <WhatIs/>
      <Solution/>
      <Exclusive onBook={onBook}/>
      <Industries/>
      <Audience/>
      <ScheduleSection onBook={onBook}/>
      <FooterCTA onBook={onBook}/>
      <Footer/>

      <ScheduleDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} prefillCategory={prefillCategory}/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color palette" />
        <TweakRadio
          label="Accent"
          value={t.palette}
          onChange={(v) => setTweak("palette", v)}
          options={[
            { value: "forest", label: "Forest" },
            { value: "iron",   label: "Iron" },
            { value: "canal",  label: "Canal" }
          ]}
        />
        <TweakSection label="Hero" />
        <TweakRadio
          label="Treatment"
          value={t.heroVariant}
          onChange={(v) => setTweak("heroVariant", v)}
          options={[
            { value: "image", label: "Photo" },
            { value: "type",  label: "Note" },
            { value: "wheat", label: "Field" }
          ]}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
