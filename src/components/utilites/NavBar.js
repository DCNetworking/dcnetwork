
import styles from './NavBar.module.scss';
import { NavBarItems } from './NavBarItems';






function NavBar(props) {



    return (
        <nav className={styles.navContainer}>
            <div className={styles.navItems}>
                <div className={styles.navTitle}>
                    <div><span className={styles.accent}>DC</span>Network</div>
                    <div className={styles.sloganTitle}>programmers.skills ++</div>
                </div>
                <div className={styles.navIcons}>
                    {NavBarItems.map(item =>
                        <div className={styles.navIconsElement}>
                            <div className={styles.navIconsElementIcon}> {item.icon}    </div>
                            <div className={styles.navIconsElementName}>
                                {item.name}
                            </div>
                        </div>
                    )

                    }
                </div>
            </div>
        </nav>
    )


}


export default NavBar;