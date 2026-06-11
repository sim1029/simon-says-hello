# Simon Says Hello

Portfolio website and blog of Simon Schueller, built with Next.js and deployed on Netlify.

## Tech stack

* Next.js 15 (App Router, fully static export)
* React 19
* Tailwind CSS 4 (+ typography plugin)
* Markdown content in `content/` rendered with `next-mdx-remote`
* [Simple Icons](https://simpleicons.org) for skill logos
* Netlify Functions + SendGrid for the contact form

## Development

```sh
npm install
npm run dev        # site only, at http://localhost:3000
npx netlify dev    # site + contact-form function
```

`npm run build` produces the static site in `out/`.

## Content

Each collection is a folder of markdown files with frontmatter — no CMS, just edit the files:

* `content/blogs/` — blog posts (`featuredpost: true` picks the spotlight post)
* `content/projects/` — projects (`featuredProject: true` vs. archived)
* `content/organizations/` — the timeline on the home page
* `content/skills/` — the skill shelf; set `icon: <simple-icons slug>` to use a
  [Simple Icons](https://simpleicons.org) logo in its brand color, or `logo: /img/...`
  as an image fallback. Images live in `public/img/`.

## Contact form

`netlify/functions/email.mjs` sends submissions via SendGrid. It needs
`SENDGRID_API_KEY`, `SENDGRID_TO_EMAIL`, and `SENDGRID_FROM_EMAIL` set in the
Netlify environment.
