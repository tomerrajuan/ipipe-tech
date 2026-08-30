import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Nav } from "./Nav"

export function Layout() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
