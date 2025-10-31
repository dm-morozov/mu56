// src/App.tsx
import './App.css'
import Header from './components/Header'
import PriceSection from './components/PriceSection'
import BookletSection from './components/BookletSection'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import CallToAction from './components/CallToAction'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>
          Мир Улыбок — Новогодние праздники для детей в Оренбурге | Аниматоры
          Дед Мороз и Снегурочка
        </title>
        <meta
          name="description"
          content="Организуем незабываемые новогодние праздники для детей в Оренбурге: Дед Мороз на дом, программы от 3500₽, азотное шоу. Выезд по городу +500₽."
        />
        <meta
          name="keywords"
          content="новогодние праздники Оренбург, Дед Мороз на дом, аниматоры для детей, Снегурочка Оренбург, цена Новый год дети"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mu56.ru/" />
        {/* === Open Graph (для Facebook/VK/Telegram) === */}
        <meta
          property="og:title"
          content="Мир Улыбок — Лучшие аниматоры Нового года в Оренбурге"
        />
        <meta
          property="og:description"
          content="Дед Мороз, Снегурочка, сладкая вата и азотное шоу для вашего праздника!"
        />
        <meta property="og:image" content="https://mu56.ru/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Дед Мороз и Снегурочка — Мир Улыбок, новогодний праздник в Оренбурге"
        />
        <meta property="og:url" content="https://mu56.ru/" />
        <meta property="og:type" content="website" />
        {/* === TWITTER CARDS (ОБЯЗАТЕЛЬНО ДЛЯ X/TWITTER) === */}
        <meta name="twitter:card" content="summary_large_image" />{' '}
        {/* summary_large_image — для большой картинки */}
        <meta name="twitter:site" content="@DemMorozov" /> {/* Твой аккаунт */}
        <meta
          name="twitter:title"
          content="Мир Улыбок — Лучшие аниматоры Нового года в Оренбурге"
        />
        <meta
          name="twitter:description"
          content="Дед Мороз, Снегурочка, сладкая вата и азотное шоу для вашего праздника!"
        />
        <meta name="twitter:image" content="https://mu56.ru/og-image.jpg" />
        <meta
          name="twitter:image:alt"
          content="Дед Мороз и Снегурочка — Мир Улыбок, Оренбург"
        />
        {/* === Schema.org === */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Мир Улыбок',
            description: 'Аниматоры Нового года для детей в Оренбурге',
            url: 'https://mu56.ru',
            telephone: '+79033922229',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Оренбург',
              addressCountry: 'RU',
            },
            priceRange: '₽3500–17000',
            openingHours: 'Пн–Вс 9:00–22:00',
            image: 'https://mu56.ru/logo.svg',
          })}
        </script>
        {/* === Yandex Metrika (ID: 105020810) === */}
        <script type="text/javascript">
          {`(function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(105020810, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ecommerce: "dataLayer"
    });`}
        </script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105020810"
              style={{ position: 'absolute', left: -9999 }}
              alt=""
            />
          </div>
        </noscript>
      </Helmet>
      <Header />
      <main className="container">
        <CallToAction showPhoto={true} />
        <Gallery />
        <section id="prices">
          <PriceSection />
        </section>
        <CallToAction />
        <BookletSection />
        <p className="note">
          * Цены действительны в пределах города.
          <br />
          Выезд в удалённый район ≈ 500 ₽ (договорная).
        </p>
      </main>
      <Footer />
    </>
  )
}

export default App
