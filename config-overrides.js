const paths = require("react-scripts/config/paths");
const path = require("path");

// Make the "src/frontend" folder be treated as the "src" folder
paths.appSrc = path.resolve(__dirname, "src/frontend");
// Tell the app that "src/index.tsx" has moved to "src/frontend/index.tsx"
paths.appIndexJs = path.resolve(__dirname, "src/frontend/index.tsx");
