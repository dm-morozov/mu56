// src/App.tsx
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import CallToAction from './components/CallToAction/CallToAction'
import { Helmet } from 'react-helmet-async'
import WhyUsSection from './components/WhyUsSection/WhyUsSection'
import GuaranteeSection from './components/GuaranteeSection/GuaranteeSection'
import BookletSection from './components/BookletSection/BookletSection'
import PriceSection from './components/PriceSection/PriceSection'

function App() {
  return (
    <>
      {/* Оставляем только то, что МЕНЯЕТСЯ динамически */}
      <Helmet>
        {/* Можно оставить для JS-пользователей, но не обязательно */}
        <meta name="theme-color" content="#1E40AF" />
      </Helmet>

      <Header />
      <main>
        <CallToAction showPhoto={true} />
        <Gallery />
        <WhyUsSection />
        <PriceSection />
        <GuaranteeSection />
        <BookletSection />
        <CallToAction />
        {/* <PriceNote /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
