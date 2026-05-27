---
version: "alpha"
name: "Aura - Curation Flow"
description: "Aura Curation Dashboard Section is designed for demonstrating application workflows and interface hierarchy. Key features include clear information density, modular panels, and interface rhythm. It is suitable for product showcases, admin panels, and analytics experiences."
colors:
  primary: "#7A9E7E"
  secondary: "#4A634D"
  tertiary: "#79A9A0"
  neutral: "#2C3B31"
  background: "#181C19"
  surface: "#E1E5DF"
  text-primary: "#2C3B31"
  text-secondary: "#E1E5DF"
  border: "#7A9E7E"
  accent: "#7A9E7E"
typography:
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: "45px"
    letterSpacing: "-0.025em"
  body-md:
    fontFamily: "Geist"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "22.75px"
spacing:
  base: "4px"
  sm: "1px"
  md: "2px"
  lg: "4px"
  xl: "8px"
  gap: "8px"
  card-padding: "16px"
  section-padding: "24px"
---

## Overview

- **Composition cues:**
  - Layout: Grid
  - Content Width: Bounded
  - Framing: Open
  - Grid: Strong

## Colors

The color system uses light mode with #7A9E7E as the main accent and #2C3B31 as the neutral foundation.

- **Primary (#7A9E7E):** Main accent and emphasis color.
- **Secondary (#4A634D):** Supporting accent for secondary emphasis.
- **Tertiary (#79A9A0):** Reserved accent for supporting contrast moments.
- **Neutral (#2C3B31):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #181C19; Surface: #E1E5DF; Text Primary: #2C3B31; Text Secondary: #E1E5DF; Border: #7A9E7E; Accent: #7A9E7E

- **Gradients:** bg-gradient-to-br from-white/10 to-transparent, bg-gradient-to-b from-transparent to-[#181C19] via-[#181C19]/80, bg-gradient-to-br from-white/60 to-white/10, bg-gradient-to-br from-[#4A634D]/30 to-transparent

## Typography

Typography pairs Playfair Display for display hierarchy with Geist for supporting content and interface copy.

- **Headlines (`headline-lg`):** Playfair Display, 36px, weight 400, line-height 45px, letter-spacing -0.025em.
- **Body (`body-md`):** Geist, 14px, weight 300, line-height 22.75px.

## Layout

Layout follows a grid composition with reusable spacing tokens. Preserve the grid, bounded structural frame before changing ornament or component styling. Use 4px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a grid / bounded composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Grid
- **Content width:** Bounded
- **Base unit:** 4px
- **Scale:** 1px, 2px, 4px, 8px, 16px, 24px, 32px, 40px
- **Section padding:** 24px, 32px
- **Card padding:** 16px, 32px
- **Gaps:** 8px, 12px, 16px, 24px

## Elevation & Depth

Depth is communicated through elevated, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as elevated first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Elevated
- **Borders:** 1px #7A9E7E; 1px #2C3B31; 1px #E1E5DF; 1px #4A634D
- **Shadows:** rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px

### Techniques
- **Gradient border shell:** Use a thin gradient border shell around the main card. Wrap the surface in an outer shell with 1px padding and a 2px radius. Drive the shell with linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0)) so the edge reads like premium depth instead of a flat stroke. Keep the actual stroke understated so the gradient shell remains the hero edge treatment. Inset the real content surface inside the wrapper with a slightly smaller radius so the gradient only appears as a hairline frame.

## Shapes

Shapes rely on a tight radius system anchored by 2px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 2px
- **Icon treatment:** Linear
- **Icon sets:** Solar

## Components

Component styling should inherit the shared button, icon, spacing, and surface rules instead of inventing one-off treatments. Favor a small family of repeatable patterns for actions, content containers, and fields.

### Iconography
- **Treatment:** Linear.
- **Sets:** Solar.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 4px rhythm.
- Do reuse the Elevated surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 2px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't mix unrelated shadow or blur recipes that break the current depth system.
- Don't exceed the detected moderate motion intensity without a deliberate reason.

## Motion

Motion feels controlled and interface-led across text, layout, and section transitions. Timing clusters around 300ms and 150ms. Easing favors ease and cubic-bezier(0.4. Hover behavior focuses on text and color changes.

**Motion Level:** moderate

**Durations:** 300ms, 150ms

**Easings:** ease, cubic-bezier(0.4, 0, 0.2, 1)

**Hover Patterns:** text, color, stroke, transform

## WebGL

Reconstruct the graphics as a full-bleed background field using webgl, custom shaders. The effect should read as technical, meditative, and atmospheric: dot-matrix particle field with light gray and sparse spacing. Build it from dot particles + soft depth fade so the effect reads clearly. Animate it as slow breathing pulse. Interaction can react to the pointer, but only as a subtle drift. Preserve dom fallback.

**Id:** webgl

**Label:** WebGL

**Stack:** WebGL

**Insights:**
  - **Scene:**
    - **Value:** Full-bleed background field
  - **Effect:**
    - **Value:** Dot-matrix particle field
  - **Primitives:**
    - **Value:** Dot particles + soft depth fade
  - **Motion:**
    - **Value:** Slow breathing pulse
  - **Interaction:**
    - **Value:** Pointer-reactive drift
  - **Render:**
    - **Value:** WebGL, custom shaders

**Techniques:** Dot matrix, Breathing pulse, Pointer parallax, Shader gradients, Noise fields

**Code Evidence:**
  - **HTML reference:**
    - **Language:** html
    - **Snippet:**
      ```html
      <!-- Background WebGL Canvas -->
      <canvas id="webgl-bg" class="fixed inset-0 w-full h-full -z-10 pointer-events-none"></canvas>

      <!-- Snap Flow Container -->
      ```
  - **JS reference:**
    - **Language:** js
    - **Snippet:**
      ```
      // WebGL Earth-Tone Gradient Background
      const initWebGLBackground = () => {
          const canvas = document.getElementById('webgl-bg');
          const gl = canvas.getContext('webgl');
          if (!gl) return;

          const resize = () => {
              canvas.width = window.innerWidth;
      …
      ```
  - **Renderer setup:**
    - **Language:** js
    - **Snippet:**
      ```
      // WebGL Earth-Tone Gradient Background
      const initWebGLBackground = () => {
          const canvas = document.getElementById('webgl-bg');
          const gl = canvas.getContext('webgl');
          if (!gl) return;

          const resize = () => {
              canvas.width = window.innerWidth;
      ```
