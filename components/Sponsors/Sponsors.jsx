import styles from './Sponsors.module.css';

const logos = [
    '/sponsors/CDC-Logo.png',
    '/sponsors/Ug.png',
    '/sponsors/bill2.jpg',
    '/sponsors/ncbi.png',
    '/sponsors/nih2-pro.jpg',
    '/sponsors/who2.png',
];

export default function Sponsors() {
    return (
        <div className={styles.carouselContainer}>
            <p className={styles.sponsorsTitle}>Supported by</p>
            <div className={styles.carouselTrack}>
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                    <div className={styles.logoWrapper} key={index}>
                        {/* Using standard img tag for simplicity within a carousel */}
                        <img src={logo} alt={`Sponsor ${index}`} className={styles.logo} />
                    </div>
                ))}
            </div>
        </div>
    );
}
