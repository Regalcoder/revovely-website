import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Faq.module.css";
import FAQ from "../components/faq";

const Faq = () => {
    return (  
        <div>
            <div className={styles.faq}>
                <h3 className={styles.largeHeader}>Frequently asked questions</h3>
                <div className={styles.faqContents}>
                    <FAQ />
                </div>
            </div>

            <div className={styles.help}>
                <div className="container">
                    <div className={styles.helpContents}>
                        <h4 className={styles.title}>still need help</h4>
                        <p className={styles.content}>Lacus, mattis ac, eu, fermentum malesuada. Tempus, non morbi pharetra rhoncus. Sed a mattis id urna. Donec risus, egestas mollis sed elit </p>
                    </div> <br />                
                    <div className={styles.featureRow}>
                        <div className={styles.card}>
                        <div className={styles.iconborder}>
                            <img
                            src="/assets/call.png"
                            width="50px"
                            height="50px"
                            ></img>
                        </div>
                        <h4>Call Support</h4>
                        <p>
                            Morbi tristique lorem condimentum et proin nulla etiam tellus
                            morbi. Rutrum congue semper id nisl neque, mauris sed. Eget
                            aenean adipiscing integer facilisi purus sit tortor integer.{" "}
                        </p>
                        </div>
                        <div className={styles.card}>
                        <div className={styles.iconborder}>
                            <img src="/assets/chat.png" width="50px" height="50px"></img>
                        </div>
                        <h4>Chat With Us</h4>
                        <p>
                            Et suscipit non lacus, quis. Morbi egestas justo faucibus eu.
                            Congue diam sodales ultrices lectus rhoncus. Sed posuere
                            tristique.{" "}
                        </p>
                        </div>
                        <div className={styles.card}>
                        <div className={styles.iconborder}>
                            <img
                            src="/assets/address.png"
                            width="50px"
                            height="50px"
                            ></img>
                        </div>
                        <h4>Address</h4>
                        <p>
                            Elementum nunc ac euismod maecenas aliquam feugiat ornare fusce.
                            At in faucibus dignissim fusce eu eu, arcu. Dictum nullam at.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


Faq.layout = "Default"
export default Faq;