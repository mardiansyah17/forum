import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from "@/components/SideBar";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-[#FCFBFD] overflow-y-hidden  h-screen pb-3 dark:bg-[#161820]  dark:text-sky-100 ">
        {/* <TopNav /> */}
        <div className="lg:flex mt-10 lg:px-5">
          <SideBar />
          <div className="basis-[90%]">{children}</div>
        </div>
        <div className="lg:hidden absolute bottom-0 right-0 left-0 ">
          <BottomNav />
        </div>
      </div>
      </body>

    </html>
  )
}
