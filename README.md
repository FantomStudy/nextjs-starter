<h1 align="center">Next.js Starter</h1>

<br>

> This is my personal template. Opinionated, minimal, and tuned to how I like to start projects — feel free to fork it and make it yours.

## Features

- ▲ [Next.js 16](https://nextjs.org/) - App Router in `src/`, Cache Components, partial prefetching and typed routes turned on
- ⚛️ [React 19](https://react.dev/) - just React, nothing bolted on top
- ⚓ [Oxlint](https://oxc.rs/docs/guide/usage/linter) + [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) - lint & format in Rust, ESLint and Prettier are not invited
- 📘 [TypeScript 7](https://www.typescriptlang.org/) - strict, ES2025, `@/*` alias pointing to `src`
- 🍞 [Bun](https://bun.sh) - fast installs, `bun.lock` committed, version pinned via `packageManager`

## Try it now!

```bash
bunx degit FantomStudy/nextjs-starter my-app
cd my-app
bun i
```

## Usage

### Development

Start the dev server and open http://localhost:3000

```bash
bun dev
```

### Build

Type-check and build for production

```bash
bun run build
```

Runs `next build`, which type-checks the project and outputs the production build to `.next`.

### Start

Serve the production build on http://localhost:3000

```bash
bun start
```

### Lint & Format

```bash
bun lint     # oxlint --fix
bun fmt      # oxfmt
```

## License

[MIT](./LICENSE) © [FantomStudy](https://github.com/FantomStudy)
