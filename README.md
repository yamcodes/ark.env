<h1 align="center">
  <a href="https://yam.codes/ark.env">
  <img alt="ark.env - Typesafe Environment Variables" src="https://og.tailgraph.com/og?titleFontFamily=JetBrains+Mono&textFontFamily=Inter&title=ark.env&titleTailwind=text-[%23e9eef9]%20font-bold%20relative%20decoration-%5Brgb(180,215,255)%5D%20decoration-wavy%20decoration-8%20underline%20underline-offset-8%20text-5xl%20mb-8&text=Typesafe%20Environment%20Variables&textTailwind=text-[%238b9dc1]%20text-3xl&bgTailwind=bg-gradient-to-b%20from-[%23061a3a]%20to-black" width="600px">
  </a>
</h1>

## Installation

<details open>
<summary>npm</summary>

```sh
npm install ark.env
```
</details>

<details>
<summary>pnpm</summary>

```sh
pnpm add ark.env
```
</details>

<details>
<summary>Yarn</summary>

```sh
yarn add ark.env
```
</details>

<details>
<summary>Bun</summary>

```sh
bun add ark.env
```
</details>

## Quickstart

> [!TIP]
> For comprehensive usage examples, please see [src/sample.ts](./packages/ark.env/src/sample.ts).

```ts
import ark, { host, port } from 'ark.env';

const env = ark.env({
  HOST: host, // valid IP address or localhost
  PORT: port, // valid port number (0-65535)
  NODE_ENV: "'development' | 'production' | 'test'",
});

// Automatically validate and parse process.env
// TypeScript knows the ✨exact✨ types!
console.log(env.HOST);     // (property) HOST: string
console.log(env.PORT);     // (property) PORT: number
console.log(env.NODE_ENV); // (property) NODE_ENV: "development" | "production" | "test"
```

## Features

- 🔒 **Type-safe**: Full TypeScript support with inferred types
- 🚀 **Runtime validation**: Catch missing or invalid environment variables early
- 💪 **Powered by ArkType**: Leverage ArkType's powerful type system
- 🪶 **Lightweight**: Zero dependencies, minimal bundle size
- ⚡ **Fast**: Optimized for performance with minimal overhead

## Documentation

> [!NOTE]
> Our docs are under active construction. Please bear with us while we get everything ready.

For detailed documentation and examples, please visit our [documentation site](https://yam.codes/ark.env).

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more information.

## Thanks / Inspiration

Find projects and people who helped or inspired the creation of `ark.env` in [THANKS.md](./THANKS.md). Thank you 🙏
