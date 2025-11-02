// src/components/Footer/Footer.tsx
import {
  FaTelegram,
  FaWhatsapp,
  FaVk,
  FaPhoneAlt,
  FaSnowflake,
} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>
            <FaSnowflake className={styles.snowflakeIcon} /> Мир Улыбок
          </h3>
          <p className={styles.footerPhone}>
            <FaPhoneAlt /> <a href="tel:+79033922229">+7 (903) 392-22-29</a>
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Мы в соцсетях</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://t.me/dem2014"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.telegram}`}
              aria-label="Telegram Дмитрия Морозова"
              title="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://wa.me/79033922229"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.whatsapp}`}
              aria-label="WhatsApp +7 (903) 392-22-29"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://vk.com/mu_56"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.vk}`}
              aria-label="ВКонтакте — Мир Улыбок"
              title="ВКонтакте"
            >
              <FaVk />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; 2025 <strong>Мир Улыбок</strong> — детские праздники с Дмитрием
          Морозовым. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
