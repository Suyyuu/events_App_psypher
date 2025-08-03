# events_App_psypher
an tier based events showcase app. assignment for psypher ai.

# 🎭 Tier-Based Event Showcase

This project is a responsive event listing web app built using **Next.js 14 (App Router)**, **Clerk.dev** for authentication, **Supabase (PostgreSQL)** for event storage, and **Tailwind CSS** for styling.

Users can sign in and view events available to their **tier** or any lower tier. For example, a Gold user can see Free, Silver, and Gold events — but not Platinum.

---

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Auth**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS

---

## 🧪 Demo Users

You can use the following demo accounts to test tier-specific behavior:

| Email                  | Password      | Tier      |
|------------------------|---------------|-----------|
| free@example.com       | 1705free@     | Free      |
| silver@example.com     | 1705silver@   | Silver    |
| gold@example.com       | 1705gold@     | Gold      |
| platinum@example.com   | 1705platinum@ | Platinum  |

➡️ Log in with any of the above to see how the event list changes per tier.

---

## 📸 Features

- ✅ Clerk-powered login & sign-up
- ✅ Supabase-backed event storage
- ✅ Tier-based event filtering (user sees events for their tier and below)
- ✅ Clean, mobile-friendly UI with Tailwind CSS
- ✅ Full support for public metadata via Clerk
- ✅ Loading and error handling states
- ✅ Demo users per tier with pre-seeded metadata

---

## 📂 Project Structure

```bash
/src
  /app
    /events        # Auth-protected events page
    /api           # API route for future extension (e.g., tier updates)
  /lib
    supabase.js    # Supabase client

I was low on time as i was on family vacation to hyderabad.. which is why i had to rush the development within 3 hours. and i cam up with this project.

