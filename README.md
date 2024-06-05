<h1 align="center">
<img src="./frontend/src/assets/react.svg" width="40%" />
<br />

HERO CODE - Searching Books

</h1>

> Status from Project: <img src="https://drive.google.com/uc?export=view&id=1Tak2fjuusuwdzNI_rwhPqLHGVLVKNTm1" alt="" width="32" border="0" /> Under construction <img src="https://drive.google.com/uc?export=view&id=1Tak2fjuusuwdzNI_rwhPqLHGVLVKNTm1" alt="" width="32" border="0" />

## Shields

![Badge](https://img.shields.io/static/v1?label=reactnative&message=FrameWork&color=blue&style=for-the-badge&logo=REACT)

![Badge](https://img.shields.io/github/issues/humbertoromanojr/hero-code?logo=visual-studio-code&style=plastic&logo=appveyor)
![Badge](https://img.shields.io/github/forks/humbertoromanojr/hero-code)
![Badge](https://img.shields.io/github/stars/humbertoromanojr/hero-code)
![Badge](https://img.shields.io/github/license/humbertoromanojr/hero-code)
![Badge](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fhumbertoromanojr%2Fhero-code)

## Libraries

- <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> — A JavaScript library for building user interfaces

- [Vite](https://vitejs.dev/guide/)
- [Tailwindcss](https://tailwindcss.com/docs/installation)
- [Google Fonts](https://fonts.google.com/)

## Important Settings

🇺🇸
These other settings are extremely important, without them, your application will not work, if you do not follow the step by step.

🇧🇷
Estas outras configurações, são de extrema importância, sem elas, a sua aplicação não vai funcionar, se não seguir passo a passo.

- Install ViteJS: `npm create vite@latest`;
- Install Tailwindcss: <br />
  - `npm install -D tailwindcss postcss autoprefixer`; <br />
  - `npx tailwindcss init`; you follow steps in DOC

## Demonstration

<img src="https://drive.google.com/uc?export=view&id=1coHW1KZFmkyZfC1XjCH1Dd9bJ8pbg2SA" alt="ignite-fleet" width="100%" border="0">

## Install

Copy project to repository:<br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" />
git clone `git@github.com:humbertoromanojr/hero-code`

<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> Go to `hero-code` folder <br />

Install node_modules <br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> `npm i`

Run application <br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> `npn run dev`

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

## Sources:

- https://herocode.com.br

## Author

<img src="https://avatars1.githubusercontent.com/u/6500430?s=460&u=42d7e22fa1c77b061505fe1cfc3fcaa3e2a4d1e5&v=4" width="80" alt="linkedin.com/in/junior-dev" />
<img src="https://drive.google.com/uc?export=view&id=1-y6rFrn4uqPfLx3nuUTXh14OeRGSZzHu" alt="" width="42" border="0" /> :guitar: Humberto Jr :guitar:
<br /> <br />

- [Linkedin](https://www.linkedin.com/in/humbertoromanojr) <br />
- [Gitlab](https://gitlab.com/humbertoromanojr) <br />
- <img src="https://drive.google.com/uc?export=view&id=160InxEPlK0IynTEGEmQJDETo_8grncjI" alt="" width="22" border="0" /> astronomi@gmail.com <br />
  <br /> <br />

##

##

<img src="https://drive.google.com/uc?export=view&id=1lAPQY5CLSU4ofNI7-kTS8SMtKo6NZt-B" alt="" width="22" border="0" /> Read more below <img src="https://drive.google.com/uc?export=view&id=1lAPQY5CLSU4ofNI7-kTS8SMtKo6NZt-B" alt="" width="22" border="0" />

##

##

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
