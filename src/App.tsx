import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { ContactPage } from './pages/ContactPage'
import { DesprePage } from './pages/DesprePage'
import { GaleriePage } from './pages/GaleriePage'
import { HomePage } from './pages/HomePage'
import { ProgramariPage } from './pages/ProgramariPage'
import { ServiciiPage } from './pages/ServiciiPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="despre" element={<DesprePage />} />
          <Route path="servicii" element={<ServiciiPage />} />
          <Route path="galerie" element={<GaleriePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="programari" element={<ProgramariPage />} />
          <Route path="recenzii" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
