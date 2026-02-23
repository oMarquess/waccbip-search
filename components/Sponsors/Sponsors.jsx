import styles from './Sponsors.module.css';

const logos = [
    '/sponsors/CDC-Logo.png',
    '/sponsors/Ug.png',
    '/sponsors/billngates.png',
    '/sponsors/ncbi.png',
    '/sponsors/nih-2.jpg',
    '/sponsors/who-logo.jpg',
];

export default function Sponsors() {
    return (
        <div className={styles.carouselContainer}>
            <p className={styles.sponsorsTitle}>Supported by</p>
            <div className={styles.carouselTrack}>
                {[...logos, ...logos].map((logo, index) => (
                    <div className={styles.logoWrapper} key={index}>
                        {/* Using standard img tag for simplicity within a carousel */}
                        <img src={logo} alt={`Sponsor ${index}`} className={styles.logo} />
                    </div>
                ))}
            </div>
        </div>
    );
}
