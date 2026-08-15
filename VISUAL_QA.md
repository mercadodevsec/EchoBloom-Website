# EchoBloom Visual QA Checklist

Compare the running app against the Figma file [IPMD Work](https://www.figma.com/design/OR313UKdTDvkkILsbdl8vb/IPMD-Work?node-id=1-7967) at these breakpoints:

- Desktop: 1440px
- Tablet: 768px
- Mobile: 375px

## Global

- [ ] Header height, logo size (44px), nav labels, active state color `#0064FF`
- [ ] Primary button size ~200×56px, radius 4px, brand blue background
- [ ] Footer columns, link opacity, copyright bar
- [ ] Fonts: Inclusive Sans body, Archivo headings
- [ ] Page gutters ~80px desktop, stacked mobile nav with menu icon

## Routes

| Route | Figma node | Checks |
|-------|------------|--------|
| `/` | `25:471` | Hero, stats row, 3 feature cards, program tabs, intern CTA |
| `/about` | `75:1481` | Values icons, IPMD accordion, video placeholder, team carousel, dark CTA |
| `/programs` | `91:702` | Hub sections, XR gallery, inclusive AI cards |
| `/programs/creative-art-sessions` | `179:4325` | Session steps, program showcase, mini-nav chips |
| `/impact` | `207:6166` | Art gallery hero, stats placeholders, expression section |
| `/artworks` | `212:6423` | Featured artwork, filter pills, grid layout |
| `/contact` | `239:973` | Form layout, social links, gallery strip |
| `/contact/success` | `239:1168` | Success message and CTA buttons |
| `/intern` | `178:3446` | Highlights list, application form, intern carousel |
| `/intern/:slug` | `207:5873` | Profile hero, quote, artwork card |
| `404` | `260:1888` | Large 404 treatment |

## Forms

- [ ] Input labels, borders, focus ring
- [ ] Alert states for API errors
- [ ] Contact success redirect
- [ ] Intern CV upload control and validation message

## Notes / Known Deviations

- Impact and artwork stat values use placeholders (`—`) until real metrics are supplied.
- Some secondary images reuse exported Figma hero assets where separate exports were not available.
- Video block on About is a placeholder play button without embedded media.
- Responsive layouts are derived from desktop frames; no dedicated mobile Figma frames exist.
