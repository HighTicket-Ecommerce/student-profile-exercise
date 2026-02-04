# Live Build: Unified Student Profile

## Context

You've been discussing the fragmented student experience. Now build a piece of it.

**User:** Internal support staff who need to look up students quickly

**Goal:** Find a student and understand their full journey in one place

---

## The Data

You have anonymized data from 3 systems:

- `data/students.json` — Basic info from Airtable (name, email, coach, status)
- `data/courses.json` — Course progress from Kajabi (modules, completion %)
- `data/payments.json` — Payment history from Stripe (amounts, dates)

**The join key is email** (appears as `email`, `user_email`, or `customer_email` depending on source).

---

## Requirements

### Tier 1: MVP (This is "done")

1. **Student List Page**
   - Shows all students (name, status, coach)
   - Clickable rows to view individual profile

2. **Student Profile Page**
   - Student info: name, email, status, coach
   - Course progress: list of courses with completion %
   - Payment summary: total paid, number of payments

**If you complete Tier 1, you've finished the exercise.**

---

### Tier 2: Better (If you have time)

3. **Search/Filter**
   - Search students by name or email
   - Or filter by status (Active/Inactive)

4. **Richer Profile**
   - Last activity date
   - List of individual payments with dates

---

### Tier 3: Exceptional (Bonus)

5. **At-Risk Indicator**
   - Visual flag for students with no recent course activity

6. **Summary Stats**
   - Total revenue across all students
   - Count of students by status

---

## Time

20 minutes. Work however you normally work.

---

## Notes

- Use any AI tools you want — we want to see your real workflow
- Ask questions if something is unclear
- Completing Tier 1 is success — Tiers 2-3 are bonus
- We're watching how you work, not just the output

---

## Technical Notes

- Server runs at `http://localhost:3000`
- Data is pre-loaded in `src/index.ts`
- Frontend dev server at `http://localhost:5173`
- Run `npm run dev` to start both
