import { Sidebar } from '@/components/Sidebar'
// import { Menu } from 'lucide-react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid-cols-smallApp sm:grid-cols-mediumApp grid gap-x-4 p-2 sm:gap-x-8 sm:p-5 md:grid-cols-app md:gap-x-24">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
