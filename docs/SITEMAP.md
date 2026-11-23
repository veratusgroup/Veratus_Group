# Veratus — Sitemap

**Last updated:** 2026-11-23
**Scope:** All three live domains after the Nov 2026 homepage redesign.

---

## At a glance

| Domain | Role | Homepage theme | Redesigned? |
|--------|------|----------------|-------------|
| [veratusgroup.com](https://veratusgroup.com) | Parent brand — software + games holding | **Boot** — terminal boot sequence, "Software. Games. Shipped." | ✅ Homepage live |
| [veratusgames.com](https://veratusgames.com) | Games studio | **Arcade** — "Nine worlds. One word.", animated ALTERNATE | ✅ Homepage live |
| [veratusconsulting.com](https://veratusconsulting.com) | Consulting / build-for-hire | **Blueprint** — "Built end to end.", big VC logo | ✅ Homepage live |

> **Note:** Only the **homepages** are on the new design. Inner pages below are still the previous design (redesign pending).

---

## veratusgroup.com (Group)

| Page | Path | Status |
|------|------|--------|
| Home | `/` (`index.html`) | 🟢 Redesigned |
| About | `/about.html` | ⚪ Old design |
| Subsidiaries | `/subsidiaries.html` | ⚪ Old design |
| Games (overview) | `/games.html` | ⚪ Old design |
| Olympus | `/olympus.html` + `/olympus/` | ⚪ Old design |
| Contact | `/contact.html` | ⚪ Old design |
| Wallpapers | `/wallpapers/` | ⚪ Old design |
| Privacy | `/privacy.html` | ⚪ Legal |
| Refunds | `/refunds.html` | ⚪ Legal |
| Terms | `/terms.html` | ⚪ Legal |

**Assets:** `/assets/` (legacy), `/assets-v2/` (redesign: posters, icons, previews, badges, logos)

---

## veratusgames.com (Games)

| Page | Path | Status |
|------|------|--------|
| Home | `/` (`index.html`) | 🟢 Redesigned |
| Games lineup | `/games.html` | ⚪ Old design |
| ALTERNATE experience | `/alternate.html` | ⚪ Old design |
| Studio | `/studio.html` | ⚪ Old design |
| Contact | `/contact.html` | ⚪ Old design |
| Play (hub) | `/play/` | ⚪ Old design |
| Wallpapers | `/wallpapers/` | ⚪ Old design |
| Game landing folders | `/crosshatch/`, `/discover/`, `/slipnine/`, `/yardside/` | ⚪ Per-title |

**Assets:** `/assets/` (legacy), `/assets-v2/` (logos, posters, previews)
**Other:** `app-ads.txt`

### The ALTERNATE acrostic (A·L·T·E·R·N·A·T·E)
9 titles spelling the word, featured on the homepage marquee:

| Letter | Game | Status |
|--------|------|--------|
| **A** | Apex | Live |
| **L** | Lost | In dev |
| **T** | Triagles | Live |
| **E** | Eclipse Run | Live |
| **R** | Rune Rogue | Live |
| **N** | Nibwell | Live |
| **A** | Anagrail | Live |
| **T** | Tott. | Live |
| **E** | Echo | Live |

Full lineup on the homepage = **11 cards** (the 9 above + TidePost + Signal Room "coming soon").

---

## veratusconsulting.com (Consulting)

| Page | Path | Status |
|------|------|--------|
| Home | `/` (`index.html`) | 🟢 Redesigned |
| About | `/about.html` | ⚪ Old design |
| Support | `/support.html` | ⚪ Old design |
| Contact | `/contact.html` | ⚪ Old design |
| Wallpapers | `/wallpapers/` | ⚪ Old design |
| Privacy | `/privacy.html` | ⚪ Legal |
| Refunds | `/refunds.html` | ⚪ Legal |
| Terms | `/terms.html` | ⚪ Legal |

**Assets:** `/assets/` (legacy), `/assets-v2/` (filecura, reflow, icons, logos, posters)

---

## Open items

- **tott. poster** — baked image reads "Tott", not "tott." (needs re-export).
- **Tott Play Store** — links to the developer page, not a direct listing.
- **TidePost / Signal Room** — link to the games page, no direct store links yet.
- **Inner pages** — all still on the old design; redesign pending.
- **sitemap.xml** — this is the human-readable map. SEO `sitemap.xml` files can be generated + deployed per domain on request.

---

## Hosting

- **Platform:** GoDaddy cPanel (shared) — `sxb1plzcpnl507794.prod.sxb1.secureserver.net`
- **Deploy:** manual zip upload → Extract per docroot (`public_html/veratusgroup`, `public_html/veratusgames.com`, `public_html/veratusconsulting.com`)
- **Repos:** `github.com/veratusgroup/` → `Veratus_Group`, `Veratus-Games`, `Veratus_Consulting`
- **File perms:** files `644`, dirs `755` (non-world-readable files 403 on Apache).
