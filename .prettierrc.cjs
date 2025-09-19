// Prettier configuration for Hugo templates and Tailwind class sorting
module.exports = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-go-template"],
  overrides: [
    {
      files: ["layouts/**/*.html"],
      options: { parser: "go-template" },
    },
  ],
};
