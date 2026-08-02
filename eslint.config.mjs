// ESLint 9 flat config. eslint-config-next v16 ships flat configs only, so the
// old .eslintrc.json could no longer load it.
import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "design/**"],
  },
  ...coreWebVitals,
];

export default config;
