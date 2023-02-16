# Boilerplate and Starter for Next JS 13+, Tailwind CSS 3.2.4 and TypeScript

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
</p>

🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript

⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, PostCSS, Tailwind CSS, Sequelize.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project.

### Features

Includes:

- ⚡️ [Next.js](https://nextjs.org) for Static Site Generator
- 🔍 Type checking [TypeScript](https://www.typescriptlang.org)
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 🚨 Strict Mode for TypeScript and React 18
- ✅ Linter with [ESLint](https://eslint.org) (default NextJS Core Web Vitals)
- 🧹 Code Formatter with [Prettier](https://prettier.io)
- 🐶 Husky for Git Hooks
- 💾 Sequelize as an ORM for connecting to PostgreSQL, MySQL, MariaDB, SQLite databases, and more

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/guptabhaskar/nextjs-boilerplate
cd nextjs-boilerplate
npm install
cp .env.local.example .env
```

Open `.env` and add the `DATABASE_URL`(which should be a link to PostgreSQL DB), you can change it to any database(like MySQL, MariaDB, SQLite databases, and more) of your choice in `server/config/database.js`.

Commands to seed the database(Database seeding):

```shell
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```

This will seed the database with objects in `server/seeders`.

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

Go to http://localhost:3000/api/profiles to see the data in the profiles table.
