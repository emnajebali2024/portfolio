# Emna Jbeli | Portfolio

Personal portfolio of Emna Jbeli, software engineering student, built with [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) (Next.js and Once UI).

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit

| What | File |
| --- | --- |
| Name, bio, experience, education, certifications, community | `src/resources/content.tsx` |
| Skills explorer (home page) | `src/resources/skills.ts` |
| Theme, colors, fonts, enabled pages, site URL | `src/resources/once-ui.config.ts` |
| Projects | `src/app/work/projects/*.mdx` |
| Project cover images | `public/images/projects/<project>/cover.jpg` |
| Profile photo | `public/images/avatar.jpg` |
| CV download | `public/Emna_Jbeli_CV_PFE_2027.pdf` |

## Deploy

Push the repository to GitHub, import it on [Vercel](https://vercel.com/new) and deploy. Then set `baseURL` in `src/resources/once-ui.config.ts` to the final Vercel URL.

## Credits

Built on Magic Portfolio by Once UI, distributed under the CC BY-NC 4.0 license. Attribution is required and the footer link to Once UI must stay. See `LICENSE`.
