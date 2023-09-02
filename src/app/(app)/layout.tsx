import { Sidebar } from '@/components/ui/sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-smallApp gap-x-4 p-2 sm:grid-cols-mediumApp sm:gap-x-8 sm:p-5 md:grid-cols-app md:gap-x-24">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
