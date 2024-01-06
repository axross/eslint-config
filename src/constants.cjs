const ignoredMagicNumbers = [-1, 0, 1];
const indent = 2;
const maxComplexity = 50;
const baseNamingConvention = [
  {
    selector: "default",
    format: ["camelCase"],
    leadingUnderscore: "forbid",
    trailingUnderscore: "forbid",
  },
  {
    selector: "typeLike",
    format: ["PascalCase"],
    leadingUnderscore: "forbid",
    trailingUnderscore: "forbid",
  },
  {
    selector: "import",
    format: ["camelCase", "PascalCase"],
  },
];

module.exports = {
  baseNamingConvention,
  ignoredMagicNumbers,
  indent,
  maxComplexity,
};
