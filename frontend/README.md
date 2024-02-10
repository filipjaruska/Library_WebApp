# Project Set uped

Setup

```bash
 npx create-next-app@14.1
```

settings

```bash
 eslint and so on yes
 app-router yes
```

### Styling

```bash
 npm i sass
```

rename globals.css to globals.scss
change import in layout.tsx to import "./globals.scss";

Font

```ts
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
```

### Eslint and Prettier

default

```json
{
  "extends": "next/core-web-vitals"
}
```

```bash
 npx eslint --init
```

Select To check syntax, find problems, and enforce code style
Select JavaScript modules (import/export)
Select React
Does your project use TypeScript Yes
Select Browser
Select popular style guide
Select Standard
Select JSON

add to plugins
"plugin:@next/next/recommended"

"rules": {
"react/react-in-jsx-scope": "off"
}

```bash
npm install eslint eslint-config-next prettier eslint-plugin-prettier eslint-config-prettier --save-dev
```

[prettier](https://www.youtube.com/watch?v=DqfQ4DPnRqI)
create .prettierrc

```json
{
  "singleQuote": true
}
```

rules!!

in setting preferences
select workspace
search on save
select formatting
check Format a file on save

#### how to use

npm run lint
to format with prettier
npm run format

ctrl + shift + p
ESLint: Fix all auto-fixable Problems

npm run lint --fix
[sdf

### GraphQL

```bash
 npm i @apollo/client graphql
```

Apollo client in Provider.tsx

```tsx
"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
```

use in layout.tsx

```tsx
<Provider>
  <html lang="en">
    <body className={inter.className}>
      <Navbar />
      {children}
    </body>
  </html>
</Provider>
```

### English and Czech

```bash
 npm install next-i18next
```

# App

## Styling

importing

using on

using and adding extra tailwind

```html
 <ul className={styles.list}>
    <li className={styles.listItem}>
        <Link href="/" className={`${styles.link} text-2xl`}>Home</Link>
    </li>
</ul>
```

## Components

# Generated at start

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
