import { Sidebar } from '@/components/Sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid-cols-app grid p-5">
      <Sidebar />
      <main>{children}</main>
      <aside className="text-gray-300">Side bar</aside>
    </div>
  )
}
