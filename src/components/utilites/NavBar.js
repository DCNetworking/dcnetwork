
import styles from './NavBar.module.scss';







function NavBar(props) {



    return (
        <nav className={styles.navContainer}>
            <div className={styles.navItems}>
                <div className={styles.navTitle}>
                    <div><span className={styles.accent}>DC</span>Network</div>
                    <div className={styles.sloganTitle}>programmers.skills ++</div>
                </div>
            </div>
        </nav>
    )


}


export default NavBar;