import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "./components/Layout"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { News } from "./pages/News"
import { Products } from "./pages/Products"
import { Technology } from "./pages/Technology"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
