# Alexander Kane — Portfolio & Resume

Personal portfolio site hosted on GitHub Pages.

**Live:** [troodon7.github.io/Alexander_Kane](https://troodon7.github.io/Alexander_Kane/)

## Pages

- **Landing Page** — Links to resume, GitHub, and LinkedIn with animated background and floating skill bubbles
- **Resume** — Interactive resume with dark mode toggle and PDF export
- **404** — Custom error page

## Tech Stack

- Vanilla HTML/CSS/JS (landing page, 404)
- React 18 + Vite 5 (resume)
- GitHub Pages

## Security

This site follows security best practices including CSP, referrer policy, permissions policy, PGP key disclosure, and RFC 9116 `security.txt`.

If you're a security professional reading the source code — there may or may not be a small recon challenge hidden in the site. Start where you'd start any engagement. View source is your friend.

## Build

```bash
cd resume
npm install
npm run build   # outputs to ../docs/resume/
```

## Export as PDF

1. Open the resume page in your browser.
2. Click the **"Export PDF"** button in the header (or press `Ctrl+P`).
3. In the print dialog:
   - **Destination:** Save as PDF
   - **Paper size:** Letter or A4
   - **Margins:** Default
   - **Background graphics:** Enabled (required for the colored header)
4. Click **Save**.

Dark mode toggle is automatically hidden during export — PDF output is always light.

## Customization

All resume data lives in a single object at the top of `resume/src/App.jsx`:

- **Contact info** — `resumeData.contact`
- **Summary** — `resumeData.summary`
- **Skills** — `resumeData.skills` (array of categories)
- **Experience** — `resumeData.experience` (array of jobs with bullet points)
- **Education** — `resumeData.education`

Styles are in `resume/src/styles.css`.

## Project Structure

```
Alexander_Kane/
├── README.md
├── docs/                    # GitHub Pages root
│   ├── index.html           # Landing page
│   ├── 404.html             # Custom 404
│   ├── favicon.png          # GitHub avatar
│   ├── og-banner.png        # Open Graph social preview
│   ├── .well-known/
│   │   ├── security.txt     # RFC 9116 disclosure policy
│   │   └── pgp-key.asc      # PGP public key
│   └── resume/              # Built resume output
└── resume/                  # Resume source
    ├── index.html           # HTML entry point
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx          # All components and resume data
        └── styles.css       # Styles (screen + print + dark mode)
```
