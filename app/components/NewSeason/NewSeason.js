import styles from './NewSeason.module.css';
import Image from 'next/image';

const NewSeason = () => {
    return (
        <div className={styles.newSeason}>
            <div className={styles.nsItem}>
                <Image src="/img/NewSeason/NS-Bakso.jpg" alt="" className={styles.nsImg} width={300} height={200} />
            </div>
            <div className={styles.nsItem}>
                <h3 className={styles.nsTitleSm}>Menu Pesan Sudah Tersedia</h3>
                <h1 className={styles.nsTitle}>Ayo Pesan Sekarang !!</h1>
                <h1 className={styles.nsTitle}>Klik Di Bawah Ini</h1>
                <a href="#nav">
                    <button className={styles.nsButton}>Pilih Pesanan</button>
                </a>
            </div>
            <div className={styles.nsItem}>
                <Image src="/img/NewSeason/NS-Mie Ayam.jpg" alt="" className={styles.nsImg} width={300} height={200} />
            </div>
        </div>
    );
};

export default NewSeason;
