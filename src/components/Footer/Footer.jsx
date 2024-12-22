import styles from './Footer.module.css'
import { ButtonImage } from '../ButtonImage/ButtonImage'


export function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__container}>
                <li className={styles.footer__element}>
                    <button className={styles.footer__FAQ}>
                        faq
                    </button>
                </li>
                <li className={styles.footer__element}>
                    <ul className={styles.footer__socials_container}>
                        <li className={styles.footer__socials_element}>
                            <ButtonImage                         
                                image_src = '../public/icons/socials-icons/vk_svg.svg'
                                image_alt = 'Логотип Вк'
                                button_span = 'Открыть сообщество в Вк'
                            />
                        </li>
                        <li className={styles.footer__socials_element}>
                            <ButtonImage                         
                                image_src = '../public/icons/socials-icons/email_svg.svg'
                                image_alt = 'Иконка электронной почты'
                                button_span = 'Скопировать адрес почты для связи'
                            />
                        </li>
                        <li className={styles.footer__socials_element}>
                            <ButtonImage                         
                                image_src = '../public/icons/socials-icons/telegram_svg.svg'
                                image_alt = 'Логотип Телеграмма'
                                button_span = 'Открыть телеграмм канал'
                            />
                        </li>
                    </ul>
                </li>
                <li className={styles.footer__element}>
                    <button className={styles.footer__AboutUs}>
                        about us
                    </button>
                </li>
            </ul>
        </footer>

    )
}