import styles from './FilterDirectory.module.css'

export function FilterDirectory() {
    
    return (
        <>
            <nav className={styles.main__filterDirectory}>
                <ul className={styles.main__filterDirectory_list}>
                    <li className={styles.main__filterDirectory_item}>
                        <img src="../icons/filter-directory-icons/bacward-arrow.svg"></img>
                        <a>назад</a>
                        <img src='../icons/filter-directory-icons/vertical-line.svg'></img>
                    </li>
                    <li className={styles.main__filterDirectory_item}>
                        <a>главная</a>
                    </li>
                    <li className={styles.main__filterDirectory_item}>
                        <img src="../icons/filter-directory-icons/slash-line.svg"></img>
                        <a>одежда</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}