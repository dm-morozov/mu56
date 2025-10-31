// src/components/Footer.tsx
import {
  FaTelegram,
  FaWhatsapp,
  FaVk,
  FaPhoneAlt,
  FaSnowflake,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        {/* Левая колонка — Контакты */}
        <div className="footer-column">
          <h3 className="footer-title">
            <FaSnowflake className="snowflake-icon" /> Мир Улыбок
          </h3>
          <p className="footer-phone">
            <FaPhoneAlt /> <a href="tel:+79033922229">+7 (903) 392-22-29</a>
          </p>
        </div>

        {/* Правая колонка — Соцсети */}
        <div className="footer-column">
          <h3 className="footer-title">Мы в соцсетях</h3>
          <div className="social-links">
            <a
              href="https://t.me/dem2014"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link telegram"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://wa.me/79033922229"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link whatsapp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://vk.com/mu_56"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link vk"
              aria-label="VK"
            >
              <FaVk />
            </a>
          </div>
        </div>
      </div>

      {/* Нижняя строка */}
      <div className="footer-bottom">
        <p>&copy; 2025 Мир Улыбок. Все права защищены.</p>
      </div>
    </footer>
  )
}
