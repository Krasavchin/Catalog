import { ButtonImage } from "../ButtonImage/ButtonImage"
import styles from './Header.module.css'


export function Header() {
    
    return (
        <header className={styles.header}>
            <ul className={styles.header__nav_list}>
                <li className={styles.header__nav_item}>
                <ButtonImage 
                        image_src = '../public/icons/nav-icons/menu-icon-black.svg'
                        image_alt = 'Иконка выпадающего меню'
                        button_span = 'Открыть выпадающее меню'
                    />
                </li>
                <li className={styles.header__nav_item}>
                    <ButtonImage 
                        image_src = '../public/icons/nav-icons/account-button-black.svg'
                        image_alt = 'Иконка аккаунта'
                        button_span = 'Открыть поле входа в аккаунт'
                    />
                </li>
            </ul>
        </header>
    )
}