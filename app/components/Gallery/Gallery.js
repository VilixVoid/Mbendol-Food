import styles from './Gallery.module.css';
import Image from 'next/image';

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryItem}>
                <h1 className={styles.galleryTitle}>Anda </h1>
                <Image
                    src="/img/Gallery/Gallery-Bakso 1.jpeg"
                    alt=""
                    className={styles.galleryImg}
                    width={300}
                    height={200}
                />
            </div>
            <div className={styles.galleryItem}>
                <Image
                    src="/img/Gallery/Gallery- Mie Ayam2.jpg"
                    alt=""
                    className={styles.galleryImg}
                    width={300}
                    height={200}
                />
                <h1 className={styles.galleryTitle}>Puas</h1>
            </div>
            <div className={styles.galleryItem}>
                <h1 className={styles.galleryTitle}>Kami pun senang</h1>
                <Image
                    src="/img/Gallery/Galler-Es Campur.jpg"
                    alt=""
                    className={styles.galleryImg}
                    width={300}
                    height={200}
                />
            </div>
        </div>
    );
};

export default Gallery;
