import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...coreWebVitals,
  ...nextTs,
  { ignores: [".next/**", "next-env.d.ts"] },
];

export default config;
