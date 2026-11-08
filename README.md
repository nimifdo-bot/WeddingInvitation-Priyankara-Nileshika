# Nileshika & Priyankara — Wedding Invitation

A React + Vite invitation website with wedding media assets and an RSVP form configured for Netlify Forms.

## Local development

1. Install Node.js (Node 24 recommended).
2. In this folder run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## GitHub upload

- Create a **Private** repository if you do not want other people to view the source.
- Upload this project folder to that repository.
- Do not commit `.env` files, passwords, API keys, or private information.

## Netlify deployment

Import the repository into Netlify. The build settings are included in `netlify.toml`.

The RSVP form uses Netlify Forms. After deployment, check the site's Forms section in Netlify to confirm submissions are enabled.

## Guest personalization

The invitation reads either `?guest=Name` or `?to=Name`.

Example: `https://your-site.netlify.app/?guest=Mr%20Sulara%20%26%20Family`

## Media files

Images and the wedding animation video supplied in the uploaded archive are in `public/`.
