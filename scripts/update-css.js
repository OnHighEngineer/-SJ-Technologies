const fs = require("fs");

const css = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-inter: "Inter", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  font-family: var(--font-inter);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: #ffffff;
  color: #111111;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #F5F5F5;
}
::-webkit-scrollbar-thumb {
  background: #E5E5E5;
  border-radius: 9999px;
}

:focus-visible {
  outline: 2px solid #111111;
  outline-offset: 2px;
}
`;

fs.writeFileSync("src/app/globals.css", css, "utf8");
console.log("globals.css updated with standard tailwind directives");
