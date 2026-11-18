# Flavor Barranquilla

An English-language guide to restaurants in Barranquilla, featuring Fast Food and Gourmet rankings, restaurant profiles, group ratings, and comparisons.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project commands

```bash
npm run build       # Build for production
npm run preview     # Preview the production build
npm run lint        # Run ESLint
npm run typecheck   # Run TypeScript checks
npm run check       # Check formatting with Prettier
```

## Restaurant data

Edit [`src/data/restaurant-research.ts`](./src/data/restaurant-research.ts) to update restaurant profiles. The site reads this file directly. Entries without a restaurant name are hidden, and empty fields are omitted from the page.

For each researched restaurant:

- Record the source URL, the date checked (`YYYY-MM-DD`), and the fields supported by that source.
- Write descriptions in your own words. A citation records where information came from; it does not grant permission to reuse it. Only use sources and content whose terms permit reuse.
- Add photo URLs to `photoUrls`. You can use local files under `public/images/restaurants/<restaurant-id>/` with root-relative paths, or external image URLs if their terms permit it. The first photo is also used on ranking cards.
- Add the group's own scores from 1–5 for `food`, `service`, `atmosphere`, and `value` to `personalRanking`. Use `null` until the group has rated the restaurant.
- Enter an estimated cost per person in `pricePerPerson`, for example `'$35.000–$60.000 COP'`. Use `priceRange` for a general price category if needed.

Personal scores and ranking positions are the group's opinions, separate from sourced restaurant details. Do not copy Google Maps ratings, review counts, reviews, names, or addresses.
