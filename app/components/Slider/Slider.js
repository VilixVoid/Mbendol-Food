import styles from './Slider.module.css'
const Slider = () => {
    return (
        <div className={styles.slider}>
        <div className={styles.sliderWrapper}>
            <div className={styles.sliderItem}>
                    <img src="/img/Bakso.png"   alt="Bakso" className={styles.sliderImg}/>
                <div className={styles.sliderBg}></div>
                <h1 className={styles.sliderTitle}>BAKSO <br/>NEW<br/>SEASON</h1>  
                <h2 className={styles.sliderPrice}>12K</h2>
                <a href="#product">
                    <button className={styles.buyButton}>PESAN!</button>
                </a>
            </div>
            <div className={styles.sliderItem}>
                    <img src="/img/mie_ayam.png" alt="" className={styles.sliderImg}/>
                <div className={styles.sliderBg}></div>
                <h1 className={styles.sliderTitle}>MIE AYAM<br/> NEW<br/> SEASON</h1>
                <h2 className={styles.sliderPrice}>12K</h2>
                <a href="#product">
                    <button className={styles.buyButton}>PESAN!</button>
                </a>
            </div>
            <div className={styles.sliderItem}>
                    <img src="/img/mie ayam bakso.png" alt="" className={styles.sliderImg}/>
                <div className={styles.sliderBg}></div>
                <h1 className={styles.sliderTitle}>MIE AYAM BAKSO<br/> NEW<br/> SEASON</h1>
                <h2 className={styles.sliderPrice}>14K</h2>
                <a href="#product">
                    <button className={styles.buyButton}>PESAN!</button>
                </a>
            </div >
            <div className={styles.sliderItem}>
                    <img src="/img/bakso_telor.png" alt="" className={styles.sliderImg}/>
                <div className={styles.sliderBg}></div>
                <h1 className={styles.sliderTitle}>BAKSO TELOR<br/> NEW<br/> SEASON</h1>
                <h2 className={styles.sliderPrice}>Rp.14K</h2>
                <a href="#product">
                    <button className={styles.buyButton}>PESAN!</button>
                </a>
            </div >
            <div className={styles.sliderItem}>
                    <img src="/img/Es-Campur.png" alt="" className={styles.sliderImg}/>
                <div className={styles.sliderBg}></div>
                <h1 className={styles.sliderTitle}>CAMPUR<br/> NEW<br/> SEASON</h1>
                <h2 className={styles.sliderPrice}>12K</h2>
                <a href="#product">
                    <button className={styles.buyButton}>PESAN!</button>
                </a>
            </div >
        </div >
    </div >
    )
}

export default Slider;