# Medium-priority fixes — 26 November 2026

## Design and plan

Preserve the existing site design and prominent Wallpapers navigation. Bound wallpaper request/body waits to 30 seconds; support Cancel, retry and partial success; suppress empty ZIPs and show dependency/failure feedback. Bound compact menus to short viewports; close same-document menus and move focus to the destination. Group preview now has an accessible Play/Pause action that preserves user pause and respects reduced motion, visibility and page lifecycle.

## Validation and handover

57 actual-function gallery cases and 14 menu/preview cases passed; all 29 known pages and six repeat generator passes validated. Representative browser checks covered all three short landscape menus and keyboard access, same-page focus, Group real video pause/offscreen behavior, Consulting images and one-image failure recovery. A real JSZip synthetic fixture verified decodable packaging and cancellation without any wallpaper download.

Validation evidence is retained in the separate private website review repository.

Not deployed. Existing two low-priority cleanup items, archive capacity/CDN hardening risks and inherited policy-template content remain separate. No app/device work, legacy deletion, legal-body changes or full bulk-load test.
