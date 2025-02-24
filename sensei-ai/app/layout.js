import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subset:['latin']});


export const metadata = {
  title: "Sensei-AI Career Coach",
  description: "Sensei-AI is an advanced AI-powered career coaching platform built with React 19, Next.js 15, and Tailwind CSS to provide personalized guidance for job seekers and professionals. It leverages the Gemini API to deliver intelligent career advice, resume reviews, and interview preparation.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider 
         attribute="class"
         defaultTheme="dark"
         enableSystem
         disableTransitionOnChange >
          <Header/>
          <main className=" min-h-screen">
        {children}
          </main>
          <footer className="bg-muted/50 py12 ">
          <div className="container mx-auto px-4 text-center text-gray-200">
            <p>Made with by AK</p>
          </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
