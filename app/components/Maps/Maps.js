import styles from './Maps.module.css';

const Maps = () => {
  return (
    <div className={styles.maps}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d361.7749124084605!2d106.59658083721438!3d-6.1481241531300554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff648751ddcd%3A0xf91b45e14659cefb!2sBakso%20Dan%20Mie%20Ayam%20Mbendol!5e0!3m2!1sid!2sid!4v1697815113868!5m2!1sid!2sid"
        width="1519" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default Maps;
