const ignoredMagicNumbers = [
  -1,
  0,
  1,
];
const indent = 2;
const maxLineLength = 120;
const maxComplexity = 50;
const baseNamingConvention = [
  {
    format: ["camelCase"],
    leadingUnderscore: "forbid",
    selector: "default",
    trailingUnderscore: "forbid",
  },
  {
    format: ["PascalCase"],
    leadingUnderscore: "forbid",
    selector: "typeLike",
    trailingUnderscore: "forbid",
  },
  {
    selector: "import",
    format: [
      "camelCase",
      "PascalCase",
    ],
  },
];

module.exports = {
  baseNamingConvention,
  ignoredMagicNumbers,
  indent,
  maxComplexity,
  maxLineLength,
};
