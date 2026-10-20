import { Outlet } from "react-router-dom"
import { CookieBanner } from "./CookieBanner"
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
      <CookieBanner />
    </div>
  )
}
