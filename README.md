# Student Profile Exercise — Setup Guide

This is the starter repo for the HighTicket fullstack engineer interview exercise.

## Quick Start

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The server will start at `http://localhost:3000`.

## What's Included

```
├── data/
│   ├── students.json    # Student records (from Airtable)
│   ├── courses.json     # Course progress (from Kajabi)
│   └── payments.json    # Payment history (from Stripe)
├── src/
│   ├── index.ts         # Express server (starter)
│   └── types.ts         # TypeScript interfaces
├── frontend/
│   ├── index.html       # HTML shell
│   └── app.tsx          # React component (empty)
└── REQUIREMENTS.md      # What you're building
```

## The Data

You have anonymized data from 3 different systems:

| File | Source | Key Field | Records |
|------|--------|-----------|---------|
| `students.json` | Airtable | `email` | 10 |
| `courses.json` | Kajabi | `user_email` | 21 |
| `payments.json` | Stripe | `customer_email` | 24 |

**Note:** The email field is the common identifier across all three sources.

## Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **Frontend:** React 18, Vite
- **Data:** JSON files (no database needed)

## Your Task

See `REQUIREMENTS.md` for what to build.

## Tips

- Use whatever AI tools you normally use
- Ask questions if anything is unclear
- It's fine to not finish — we're watching how you work
