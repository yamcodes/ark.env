<p align="center">
  <a href="https://yam.codes/ark.env">
    <img alt="ark.env - Typesafe Environment Variables" src="https://og.tailgraph.com/og?titleFontFamily=JetBrains+Mono&textFontFamily=Inter&title=ark.env&titleTailwind=text-[%23e9eef9]%20font-bold%20relative%20decoration-%5Brgb(180,215,255)%5D%20decoration-wavy%20decoration-[5px]%20underline%20underline-offset-[16px]%20text-5xl%20mb-8&text=Typesafe%20Environment%20Variables&textTailwind=text-[%238b9dc1]%20text-3xl&bgTailwind=bg-gradient-to-b%20from-[%23061a3a]%20to-black" width="645px">
  </a>
  <br />
  <a href="https://github.com/yamcodes/ark.env/actions/workflows/tests.yml?query=branch%3Amain"><img alt="Tests Status" src="https://github.com/yamcodes/ark.env/actions/workflows/tests.yml/badge.svg?event=push&branch=main"></a>
  <a href="https://www.npmjs.com/package/ark.env"><img alt="Total Downloads" src="https://badgen.net/npm/dt/ark.env/total?icon=npm&color=blue"></a>
  <a href="https://www.npmjs.com/package/ark.env"><img alt="Bundle Size" src="https://badgen.net/bundlephobia/min/ark.env?icon=npm&color=blue&label=bundle%20size"></a>
  <a href="https://www.npmjs.com/package/ark.env"><img alt="Dependency Count" src="https://badgen.net/bundlephobia/dependency-count/ark.env?icon=npm&color=blue&label=dependencies"></a>
  <a href="https://arktype.io/"><img alt="Powered By ArkType" src="https://badgen.net/static/powered by/ArkType"></a>
</p>

## Installation

<details open>
<summary>npm</summary>

```sh
npm install ark.env arktype
```
</details>

<details>
<summary>pnpm</summary>

```sh
pnpm add ark.env arktype
```
</details>

<details>
<summary>Yarn</summary>

```sh
yarn add ark.env arktype
```
</details>

<details>
<summary>Bun</summary>

```sh
bun add ark.env arktype
```
</details>

## Quickstart

> [!TIP]
> Find more examples in the [examples](https://github.com/yamcodes/ark.env/tree/main/examples) directory.

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

- 🔒 **Typesafe**: Full TypeScript support with inferred types
- 🚀 **Runtime validation**: Catch missing or invalid environment variables early
- 💪 **Powered by ArkType**: Leverage ArkType's powerful type system
- 🪶 **Lightweight**: Only a single dependency ([5.6 kB](https://bundlephobia.com/package/chalk@5.4.1))
- ⚡ **Fast**: Optimized for performance with minimal overhead

## Documentation

For detailed documentation and examples, please visit our [documentation site](https://yam.codes/ark.env).

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](https://github.com/yamcodes/ark.env/blob/main/CONTRIBUTING.md) for more information.

## Thanks / Inspiration

Find projects and people who helped or inspired the creation of `ark.env` in [THANKS.md](https://github.com/yamcodes/ark.env/blob/main/THANKS.md). Thank you 🙏
