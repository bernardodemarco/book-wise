import { Sidebar } from '@/components/Sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-app gap-x-24 p-5">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
