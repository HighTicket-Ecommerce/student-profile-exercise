# Live Build: Unified Student Profile

## Context

You've been discussing the fragmented student experience. Now build a piece of it.

## The Data

You have anonymized data from 3 systems:

- `data/students.json` — Basic info from Airtable (name, email, coach, status)
- `data/courses.json` — Course progress from Kajabi (modules, completion %)
- `data/payments.json` — Payment history from Stripe (amounts, dates)

**The join key is email** (it appears as `email`, `user_email`, or `customer_email` depending on the source).

## Your Task

Build a simple internal tool that shows a unified profile for a single student.

### Required

1. **API endpoint:** `GET /api/students/:email`
   - Returns unified student data from all three sources

2. **Simple UI** that displays the profile
   - Doesn't need to be pretty — functional is fine

### The Profile Should Show

- Student name and status
- Their coach
- Course progress (which courses, completion %)
- Payment history (total paid, last payment date)

## Time

20 minutes. Work however you normally work.

## Notes

- Use any AI tools you want — we want to see your real workflow
- Ask questions if something is unclear
- It's fine to not finish — we're watching how you work, not just the output
- The starter code is minimal on purpose — build it your way

## Bonus (if you have time)

- List all students with a way to click into each profile
- Show "at risk" indicator (e.g., no course activity in 30+ days)
- Calculate total revenue per student
