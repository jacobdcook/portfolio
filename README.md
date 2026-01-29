# Jacob Cook — Portfolio

Next.js portfolio for jacobdcook.com. Single-page site: Hero, About, Experience, Projects, Contact, Resume.

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open **http://localhost:3002**. (Port 3002 is used so it doesn’t conflict with other apps on 3000.)

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com): **Add New** → **Project** → Import your GitHub repo.
3. Add env vars in Vercel if you use the contact form: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Deploy. After the first deploy, add your domain (see below).

**CLI deploy (optional):** Put `VERCEL_TOKEN` in `.env.local` and run `npx vercel --prod` from the project root. Do not commit `.env.local`.

## Custom domain (jacobdcook.com)

After your first Vercel deploy:

1. **Vercel:** Project → **Settings** → **Domains** → Add `jacobdcook.com` and `www.jacobdcook.com`. Note the DNS values Vercel shows.
2. **Namecheap:** Domain List → jacobdcook.com → **Manage** → **Advanced DNS**. Update records per [SETUP.md](./SETUP.md#namecheap-dns).
3. Wait for DNS propagation; Vercel will issue SSL.

## Contact form (Supabase)

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_ANON_KEY` (from Supabase → Settings → API). Create the `contacts` table and RLS in Supabase — see [SETUP.md](./SETUP.md#supabase-contact-form).

## Assets

- `public/headshot.jpg` and `public/resume.pdf` are already in the repo (copied from `jacobdcook dot com/assets/`).

---

Full setup steps (Namecheap DNS, Vercel token, Supabase table) are in **[SETUP.md](./SETUP.md)**.
