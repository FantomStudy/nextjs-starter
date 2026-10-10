import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["react", "nextjs", "typescript", "oxc", "import"],
  categories: {
    correctness: "error",
    suspicious: "warn",
  },
  options: {
    typeAware: true,
  },
  rules: {
    "react/rules-of-hooks": "error",
    "react/react-in-jsx-scope": "off",
    "react/exhaustive-deps": "off",
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/no-unassigned-import": "off",
  },
  ignorePatterns: [".next/**", "out/**", "build/**", "next-env.d.ts"],
});
