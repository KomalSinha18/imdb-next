// "use client";

// import React from "react";
// import { ThemeProvider as NextThemeProvider } from "next-themes";

// function Providers({ children }) {
//   return;
//   <NextThemeProvider defaultTheme="system" attribute="class">
//     <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
//       {children}
//     </div>
//   </NextThemeProvider>;
// }

// export default Providers;

"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div
        className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300
"
      >
        {children}
      </div>
    </ThemeProvider>
  );
}

// className =
//   "text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300";
