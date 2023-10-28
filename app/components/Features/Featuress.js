import styles from './Featuress.module.css'

const Features = () => {
    return (
        <div className={styles.features}>
            <div className={styles.feature}>
                <img src="./img/shipping.png" alt="" className={styles.featureIcon}/>
                    <span className={styles.featureTitle}>GRATIS ONGKIR</span>
                    <span className={styles.featureDesc}>20 pesanan akan mendapatkan voucher gratis ongkir</span>
            </div>
            {/*<div className={styles.feature}>
                <img className={styles.featureIcon} src="./img/return.png" alt=""/>
                    <span className={styles.featureTitle}>30 DAYS RETURN</span>
                    <span className={styles.featureDesc}>No question return and easy refund in 14 days.</span>
                </div> */}
            <div className={styles.feature}>
                <img className={styles.featureIcon} src="./img/gift.png" alt=""/>
                    <span className={styles.featureTitle}>DAPATKAN DISKON</span>
                    <span className={styles.featureDesc}>50 pesanan akan mendapatkan potongan harga 5%.</span>
            </div>
            <div className={styles.feature}>
                <img className={styles.featureIcon} src="./img/contact.png" alt=""/>
                    <span className={styles.featureTitle}>HUBUNGI KAMI</span>
                    <span className={styles.featureDesc}>Tetap berhubungan melalui email dan sistem dukungan.</span>
            </div>
        </div>
    )
}

export default Features;