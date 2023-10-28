import styles from './Product.module.css';
import Image from 'next/image';

const Product = () => {
    return (
        <div className={styles.product} id="product">
            <div className={styles.productImg}>
                <Image src="/img/Bakso.png" alt="" width={1300} height={1300} />
            </div>
            <div className={styles.productDetails}>
                <h1 className={styles.productTitle}>BAKSO</h1>
                <h2 className={styles.productPrice}>12K</h2>
                <p className={styles.productDesc}>
                    Proses pembuatan bakso dimulai dengan mencampurkan daging sapi yang sudah dicincang halus dengan bahan-bahan lainnya. Setelah itu, adonan bakso dibentuk menjadi bola-bola kecil dan dimasak dalam air mendidih hingga matang. Biasanya bakso disajikan dengan kuah kaldu, mie, tahu, bihun, sayuran, dan bumbu tambahan seperti saus sambal atau kecap.
                </p>
                <button className={styles.productButton}>PESAN!!</button>
                {/* <button onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=6281310913732'} className={styles.productButton}> PESAN SEKARANG</button> */}
            </div>
            <div className={styles.payment}>
                <h1 className={styles.payTitle}>Personal Information</h1>
                <label>Name dan Surname</label>
                <input type="text" placeholder="John Doe" className={styles.payInput} />
                <label>Nomor Telepon</label>
                <input type="text" placeholder="+1 234 5678" className={styles.payInput} />
                <label>Alamat</label>
                <input type="text" placeholder="Elton St 21 22-145" className={styles.payInput} />
                <h1 className={styles.payTitle}>Kartu Kredit</h1>
                <div className={styles.cardIcons}>
                    <Image src="/img/visa.png" alt="" width={40} height={40} className={styles.cardIcon} />
                    <Image src="/img/master.png" alt="" width={40} height={40} className={styles.cardIcon} />
                </div>
                <input type="password" className={styles.payInput} placeholder="Card Number" />
                <div className={styles.cardInfo}>
                    <label>Tanggal Pemesanan</label>
                    <input type="text" placeholder="mm" className={`${styles.payInput} ${styles.sm}`} />
                    <input type="text" placeholder="yyyy" className={`${styles.payInput} ${styles.sm}`} />
                    <input type="text" placeholder="cvv" className={`${styles.payInput} ${styles.sm}`} />
                </div>
                <button className={styles.payButton}>Checkout!</button>
                <span className={styles.close}>X</span>
            </div>
        </div>
    );
};

export default Product;
