'use client'

import { ThemeProvider } from 'next-themes'

const Provider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme={"system"} enableSystem disableTransitionOnChange  >
        {children}
    </ThemeProvider>
  )
}

export default Provider;