import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav id="nav" className={styles.nav}>
            <div className={styles.navTop}>
                <div className={styles.navItem}>
                     <img src="/img/Logo/Logo Mbendo 69.png" height="20%" width="20%" alt=""/> 
                </div>

                <div className={styles.navItem}>
                    <span className={styles.limitedOffer}>Penawaran Terbatas!</span>
                </div>
            </div>
            <div className={styles.navBottom}>
                <h3 className={styles.menuItem}>BAKSO</h3>
                <h3 className={styles.menuItem}>MIE AYAM</h3>
                <h3 className={styles.menuItem}>MIE AYAM BAKSO</h3>
                <h3 className={styles.menuItem}>BAKSO TELOR</h3>
                <h3 className={styles.menuItem}>ES CAMPUR</h3>
            </div>
        </nav>
    )
}

export default Navbar;
