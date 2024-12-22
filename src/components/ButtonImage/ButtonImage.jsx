import '../../globalStyles.css'
import styles from './ButtonImage.module.css'

export function ButtonImage (props) {
    
    return (
        <button className={styles.header__nav_button}>
            <img src={props.image_src} alt={props.image_alt}></img>
            <span className="visually-hidden">{props.button_span}</span>
        </button>
    )
}