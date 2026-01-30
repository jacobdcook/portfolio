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

## 4. Email you when someone submits the contact form (free: Resend + Edge Function)

Contacts are stored in the `contacts` table. To get an **email to jacobcookofficial@gmail.com** every time someone submits, use Resend (free tier: 100 emails/day) and a Supabase Edge Function.

### 4.1 Resend (free signup)

1. Go to [resend.com](https://resend.com) and sign up (free).
2. In the dashboard, go to **API Keys** and create an API key. Copy it (starts with `re_`).
3. You’ll add this as a secret in Supabase in step 4.3.

### 4.2 Install Supabase CLI and link project

**Do not use `npm install -g supabase`** — global install is not supported. Use one of these:

**Option A — Project-local (recommended, no global install):**

```bash
cd portfolio
npm install supabase --save-dev
npx supabase login
npx supabase link --project-ref mlmoptojfgkbreqxnccj
```

**Option B — Linux binary:** Download the `.deb` from [Supabase CLI releases](https://github.com/supabase/cli/releases), then `sudo dpkg -i supabase_*.deb`. Then run `supabase login` and `supabase link --project-ref mlmoptojfgkbreqxnccj` from the portfolio folder.

**Option C — Homebrew (macOS/Linux):** `brew install supabase/tap/supabase`, then `supabase login` and `supabase link` from the portfolio folder.

Use the project ref that matches your Supabase project URL (e.g. `mlmoptojfgkbreqxnccj`).

### 4.3 Set Resend API key in Supabase

```bash
# From portfolio folder; use npx if you installed Supabase as dev dependency
npx supabase secrets set RESEND_API_KEY=re_your_key_here
```

Replace `re_your_key_here` with your real Resend API key (from Resend → API Keys). Do **not** commit it or paste it in this file.

### 4.4 Deploy the Edge Function

From the **portfolio** folder (where `supabase/functions/send-contact-email` lives):

```bash
npx supabase functions deploy send-contact-email
```

The function will be live at:

`https://mlmoptojfgkbreqxnccj.supabase.co/functions/v1/send-contact-email`

### 4.5 Create a Database Webhook (so each new contact triggers the email)

1. In **Supabase Dashboard** → **Database** → **Webhooks** (or **Integrations** → **Webhooks**).
2. Click **Create a new webhook**.
3. **Name:** e.g. `contact-form-email`.
4. **Table:** `contacts`.
5. **Events:** check **Insert** only.
6. **Type:** HTTP Request.
7. **URL:**  
   `https://mlmoptojfgkbreqxnccj.supabase.co/functions/v1/send-contact-email`
8. **HTTP method:** POST.
9. **Headers:** add one header so the function can be called:
   - **Name:** `Authorization`  
   - **Value:** `Bearer YOUR_ANON_KEY`  
   (Use your project’s anon key from **Settings** → **API** → anon public.)
10. Save.

After this, every new row in `contacts` will trigger the webhook, and the Edge Function will send an email to **jacobcookofficial@gmail.com** via Resend. Emails are sent from `onboarding@resend.dev` (Resend’s free sender); you can later verify your own domain in Resend if you want a custom “from” address.

---

## 5. Summary

| What            | Where to put it        | Where NOT to put it   |
|-----------------|------------------------|------------------------|
| Vercel token    | `.env.local`           | Repo, SETUP.md, chat  |
| Supabase anon   | `.env.local`           | Repo, SETUP.md, chat  |
| Resend API key  | Supabase secrets       | Repo, SETUP.md, chat  |
| Domain DNS      | Namecheap Advanced DNS | —                      |

- **Run site locally:** `npm run dev` → http://localhost:3002  
- **Deploy:** Connect GitHub repo in Vercel, or use `npx vercel --prod` with `VERCEL_TOKEN` in `.env.local`.  
- **Domain:** Add jacobdcook.com + www in Vercel, then set CNAME (www) and A (@) in Namecheap as above.
