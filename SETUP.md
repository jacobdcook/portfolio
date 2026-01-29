# Setup: Vercel, Namecheap, Supabase

Use this doc to wire up jacobdcook.com, Vercel deploy, and the contact form. **Never put real API keys or tokens in this file or in the repo.**

---

## 1. Vercel

### Get a token (for CLI deploy only)

1. Go to [Vercel Account → Tokens](https://vercel.com/account/tokens).
2. Create a token (e.g. “Portfolio deploy”).
3. Put it in **`.env.local`** only:
   ```env
   VERCEL_TOKEN=your_token_here
   ```
4. Do **not** commit `.env.local`. If you ever pasted a token in chat or in a file, **regenerate the token** in Vercel and use the new one.

### Deploy

- **Preferred:** Push repo to GitHub, then in Vercel: **Add New** → **Project** → Import the repo. Connect the repo for auto-deploy.
- **CLI:** With `VERCEL_TOKEN` in `.env.local`, run from project root: `npx vercel --prod`.

---

## 2. Namecheap DNS (jacobdcook.com)

Domain: **jacobdcook.com**. Do this **after** the first Vercel deploy.

### In Vercel

1. Project → **Settings** → **Domains**.
2. Add **jacobdcook.com** and **www.jacobdcook.com**.
3. Vercel will show the exact DNS records to use (they may show a different A record IP; use what Vercel shows).

### In Namecheap

1. **Domain List** → jacobdcook.com → **Manage** → **Advanced DNS**.
2. **Remove or change** existing records that conflict:
   - **URL Redirect Record** for `@` (e.g. pointing to http://www.jacobdcook.com/) — remove it so the root can use an A record.
   - **CNAME** for `www` that points to `parkingpage.namecheap.com` — you will replace this.
3. **Add/update:**
   - **CNAME:** Host = `www`, Value = `cname.vercel-dns.com` (or the value Vercel shows for www). TTL 30 min or Automatic.
   - **A Record:** Host = `@`, Value = `76.76.21.21` (or the A record value Vercel shows for the root). TTL 30 min or Automatic.
4. Save. DNS can take a few minutes to 48 hours to propagate. Vercel will issue SSL once DNS is correct.

---

## 3. Supabase (contact form)

Project URL (already in `.env.example`):  
`https://mlmoptojfgkbreqxnccj.supabase.co`

### API key (anon, public)

1. Supabase dashboard → your project → **Settings** → **API**.
2. Copy the **anon public** key (safe for browser; RLS protects data).
3. Put it only in **`.env.local`**:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://mlmoptojfgkbreqxnccj.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```
4. Do **not** put the key in this file or in the repo. If you ever pasted it somewhere, consider rotating it in Supabase.

### Create the `contacts` table

The contact form expects a table named **`contacts`**. In Supabase:

1. Go to **SQL Editor** and run:

```sql
create table contacts (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text not null,
  message text,
  created_at timestamptz default now()
);

-- RLS: allow anonymous insert only (no read/update/delete for anon)
alter table contacts enable row level security;

create policy "Allow anonymous insert"
  on contacts for insert
  to anon
  with check (true);
```

2. Optional: add a policy so only authenticated users (or service role) can read contacts later. For now, anon can only insert.

---

## 4. Summary

| What            | Where to put it        | Where NOT to put it   |
|-----------------|------------------------|------------------------|
| Vercel token    | `.env.local`           | Repo, SETUP.md, chat  |
| Supabase anon   | `.env.local`           | Repo, SETUP.md, chat  |
| Domain DNS      | Namecheap Advanced DNS | —                      |

- **Run site locally:** `npm run dev` → http://localhost:3002  
- **Deploy:** Connect GitHub repo in Vercel, or use `npx vercel --prod` with `VERCEL_TOKEN` in `.env.local`.  
- **Domain:** Add jacobdcook.com + www in Vercel, then set CNAME (www) and A (@) in Namecheap as above.
