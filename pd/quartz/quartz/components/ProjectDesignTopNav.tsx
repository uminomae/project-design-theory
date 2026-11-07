import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// @ts-ignore shared site data is authored as browser-friendly ESM
import { getMenuItems, TRANSLATIONS } from "../../../src/content/site-data.mjs"

type SupportedLang = "ja" | "en"
type MenuItem =
  | { type: "separator" }
  | { type: "label"; labelKey: string }
  | { type: "link"; href: string; labelKey: string; className?: string }

function getLang(locale?: string): SupportedLang {
  return locale?.toLowerCase().startsWith("ja") ? "ja" : "en"
}

function translate(key: string, lang: SupportedLang): string {
  return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.ja[key] ?? key
}

export default (() => {
  const ProjectDesignTopNav: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
    const lang = getLang(cfg.locale)
    const items = getMenuItems({ currentSite: "wiki", context: "wiki" }) as MenuItem[]

    return (
      <div class="pd-top-nav">
        <details class="pd-top-nav__details">
          <summary class="pd-top-nav__summary">{translate("menu.toggle", lang)}</summary>
          <nav class="pd-top-nav__menu" aria-label="Site menu">
            {items.map((item) => {
              if (item.type === "separator") {
                return <hr />
              }

              if (item.type === "label") {
                return <span class="pd-top-nav__label">{translate(item.labelKey, lang)}</span>
              }

              return (
                <a class={item.className} href={item.href}>
                  {translate(item.labelKey, lang)}
                </a>
              )
            })}
          </nav>
        </details>
      </div>
    )
  }

  ProjectDesignTopNav.afterDOMLoaded = `
    document.addEventListener("click", (e) => {
      const details = document.querySelector(".pd-top-nav__details");
      if (!details || !details.open) return;
      if (!e.target.closest(".pd-top-nav__details")) {
        details.open = false;
      }
    });
  `

  ProjectDesignTopNav.css = `
.pd-top-nav {
  width: 100%;
}

.pd-top-nav__details {
  position: relative;
  display: inline-block;
}

.pd-top-nav__summary {
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.95rem;
  border: 1px solid color-mix(in srgb, var(--secondary) 18%, var(--lightgray));
  border-radius: 999px;
  background: color-mix(in srgb, var(--light) 92%, white 8%);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
  color: var(--darkgray);
  cursor: pointer;
  font-family: var(--headerFont);
  font-size: 0.98rem;
  line-height: 1;
}

.pd-top-nav__summary::-webkit-details-marker {
  display: none;
}

.pd-top-nav__summary::after {
  content: "▾";
  font-size: 0.8rem;
  color: var(--secondary);
}

.pd-top-nav__details[open] .pd-top-nav__summary::after {
  content: "▴";
}

.pd-top-nav__menu {
  position: absolute;
  top: calc(100% + 0.65rem);
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  min-width: min(19rem, calc(100vw - 2rem));
  padding: 0.75rem 0;
  border: 1px solid color-mix(in srgb, var(--secondary) 14%, var(--lightgray));
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--light) 94%, white 6%);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(18px);
}

.pd-top-nav__menu a {
  display: block;
  padding: 0.58rem 1.1rem;
  color: var(--darkgray);
  background: transparent;
  font-weight: 500;
}

.pd-top-nav__menu a:hover {
  background: var(--highlight);
  color: var(--secondary);
}

.pd-top-nav__menu a.menu-current {
  color: var(--secondary);
}

.pd-top-nav__label {
  display: block;
  padding: 0.3rem 1.1rem 0.45rem;
  color: var(--gray);
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pd-top-nav__menu hr {
  width: calc(100% - 2.2rem);
  margin: 0.45rem auto;
  border: none;
  border-top: 1px solid color-mix(in srgb, var(--lightgray) 70%, var(--secondary) 10%);
}

@media all and (max-width: 800px) {
  .pd-top-nav__details {
    display: block;
  }

  .pd-top-nav__summary {
    width: 100%;
    justify-content: space-between;
  }

  .pd-top-nav__menu {
    min-width: 100%;
  }
}
`

  return ProjectDesignTopNav
}) satisfies QuartzComponentConstructor
