import styles from '../../styles/Documentation.module.css';

function HomePage() {
    return (
        <div className="container">
            <h1 className={styles.docTitle}>Welcome to ShopSync Docs</h1>
            <div className="row">
                <div className="col-12">
                    <h2 className={styles.docSection}>Getting Started</h2>
                    <p className={styles.docText}>
                        Welcome to the ShopSync documentation. This guide will help you get started with our platform.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;