import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'



const Footer = () => {
    return (  
        
        <div className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-10 col-sm-12 linkContents" >
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 logo">
                                <img src="/assets/Logo.png" width="126px" height="30px" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 footerlinks">
                                <h6 className={styles.linkTitle}>Company</h6>
                                <ul className={styles.navList}>
                                    <li><Link className={styles.link} href="/aboutus"><a href="/" > about us </a></Link></li>
                                    <li><Link className={styles.link} href="/contactus"><a href="/" > contact us </a></Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 footerlinks">
                            <h6 className={styles.linkTitle}>App Feautures</h6>
                                <ul className={styles.navList}>
                                    <li><Link className={styles.link} href="/"><a href="/" > payments </a></Link></li>
                                    <li><Link className={styles.link} href="/"><a href="/" > bill payments </a></Link></li>
                                    <li><Link className={styles.link} href="/"><a href="/" > savings </a></Link></li>
                                    <li><Link className={styles.link} href="/"><a href="/" > rewards </a></Link></li>

                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 footerlinks">
                            <h6 className={styles.linkTitle}>Help</h6>
                                <ul className={styles.navList}>
                                    <li><Link className={styles.link} href="/"><a href="/" > FAQs </a></Link></li>
                                    <li><Link className={styles.link} href="/"><a href="/" > customer support </a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 download">
                        <div className={styles.dowloadLinks}>
                            <img src="/assets/apple.png" width="100px" height="32px" />
                            <img src="/assets/android.png" width="100px" height="32px" />
                        </div>
                    </div>
                </div>

                <div className={styles.socials}>
                    <img src="/assets/facebook.png" width="7px" height="12px" />
                    <img src="/assets/ig.png" width="13px" height="13px" />
                    <img src="/assets/linkedin.png" width="13px" height="11px" />
                    <img src="/assets/twitter.png" width="13px" height="11px" />
                </div>
                <hr className={styles.footerLine}/>
                <h6 className={styles.copyright}>Copyright © 2022 Revovely. All rights reserved</h6>
            </div>
        </div>

    );
}
export default Footer;