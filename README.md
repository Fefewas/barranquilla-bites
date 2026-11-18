Welcome to your new TanStack Start app!

# Getting Started

To run this application:

```bash
npm install
npm run dev
```

# Building For Production

To build this application for production:

```bash
npm run build
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### Removing Tailwind CSS

If you prefer not to use Tailwind CSS:

1. Remove the demo pages in `src/routes/demo/`
2. Replace the Tailwind import in `src/styles.css` with your own styles
3. Remove `tailwindcss()` from the plugins array in `vite.config.ts`
4. Remove `@tailwindcss/vite` and `tailwindcss` from `package.json`

## Linting & Formatting

This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
npm run lint
npm run format
npm run check
```

## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from '@tanstack/react-router'
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you render `{children}` in the `shellComponent`.

Here is an example layout that includes a header:

```tsx
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My App' },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  ),
})
```

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Server Functions

TanStack Start provides server functions that allow you to write server-side code that seamlessly integrates with your client components.

```tsx
import { createServerFn } from '@tanstack/react-start'

const getServerTime = createServerFn({
  method: 'GET',
}).handler(async () => {
  return new Date().toISOString()
})

// Use in a component
function MyComponent() {
  const [time, setTime] = useState('')

  useEffect(() => {
    getServerTime().then(setTime)
  }, [])

  return <div>Server time: {time}</div>
}
```

## API Routes

You can create API routes by using the `server` property in your route definitions:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: () => json({ message: 'Hello, World!' }),
    },
  },
})
```

## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  loader: async () => {
    const response = await fetch('https://swapi.dev/api/people')
    return response.json()
  },
  component: PeopleComponent,
})

function PeopleComponent() {
  const data = Route.useLoaderData()
  return (
    <ul>
      {data.results.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  )
}
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).

For TanStack Start specific documentation, visit [TanStack Start](https://tanstack.com/start).

## Google Places API

The curated ranking remains fixed at five Fast Food and five Gourmet restaurants. To fetch current Google Maps details on demand, configure `GOOGLE_MAPS_API_KEY` and a private `GOOGLE_PLACES_API_TOKEN` using `.env.example`. Enable Places API (New) and billing for the Google Cloud project, and restrict the Google key to Places API. Send the private token as a bearer token when invoking the endpoint.

- `GET /api/restaurants` looks up all named restaurants in the research file.
- `GET /api/restaurants?slug=porthos-steakhouse-pub-53` looks up one restaurant.

```bash
curl -H "Authorization: Bearer $GOOGLE_PLACES_API_TOKEN" \
  http://localhost:3000/api/restaurants
```

Each restaurant lookup makes one billable Google Text Search request. Google data is not cached or stored; the API returns `Cache-Control: no-store`. The API returns Google Maps attribution and live place details. This endpoint is separate from the website's local research data and is not called by the pages.

The endpoint does not request or store review text. Any client displaying the live Google fields must visibly display the returned `Google Maps` attribution. Set Google Cloud quotas and monitor billing because every request performs a live lookup.

## Manual restaurant research

`src/data/restaurant-research.ts` is the live source for the restaurant pages. Changes to this file appear in the site without copying records into another dataset. Fill in each slot's facts and add a source entry with the URL, the date checked (`YYYY-MM-DD`), and the fields supported by that source, for example:

```ts
{
  url: 'https://restaurant.example/about',
  checkedAt: '2026-11-18',
  supports: ['name', 'address', 'openingHours'],
}
```

Only entries with a restaurant name are shown; blank slots remain hidden until completed. Empty fields are omitted from the page. Only use sources whose terms permit reuse; the source list records provenance but is not a rights clearance. Do not copy Google Maps ratings, review counts, reviews, names, or addresses. Write descriptions in your own words.

Add the photos for each entry in its `photoUrls` array. For local files, put them under `public/images/restaurants/<restaurant-id>/` and use a root-relative URL:

```ts
photoUrls: [
  '/images/restaurants/porthos-steakhouse-pub-53/porthos-01.webp',
  '/images/restaurants/porthos-steakhouse-pub-53/porthos-02.webp',
],
```

External `https://` image URLs are also supported. Photos appear in the restaurant profile and the first photo is used on ranking cards. The site displays only researched restaurant details and links.

The `personalRanking` object in each entry contains the group's own 1–5 scores for `food`, `service`, `atmosphere`, and `value`. Set it to `null` until the group has rated a restaurant; its displayed ranking position will be marked provisional. These editorial opinions are displayed separately from sourced restaurant details and are never taken from external ratings.

Enter an estimated per-person cost in each entry's `pricePerPerson` field, for example `'35.000–60.000 COP'`. The restaurant profile displays this in its “Price per person” section when the field is filled; keep `priceRange` for a general price category if you also use one.
