import Link from 'next/link'
import styles from '../styles/Payments.module.css'
import Getapp from '../components/getapp';





const Savings = () => {
    return ( 
            <div className={styles.paymentSection}>
                <div className="pt-5 container">
                    <div className={styles.sendSection}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className={styles.sendContent}>
                                    <h4>Send money to friends & family seamlessly</h4>
                                    <p>Blandit eget tellus nam leo in lacinia sed. Velit magna sed ornare tellus. Tempor amet egestas a nunc sapien.</p><br></br>
                                    <Link href=""><a href="">Get started</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className={styles.sendApp}>
                                    <img src="/assets/sendapp.png" width="541px" height="589px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className={styles.features}>
                    <div className="container">
                        <div className={styles.featureRow}>
                            <div className={styles.card}>
                                <div className={styles.iconborder}><img src="/assets/send.png" width="18px" height="20px"></img></div>
                                <h4>Send money without an account number.</h4>
                                <p>There’s more than one way to send money for free to anyone who has a smartphone.</p>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.iconborder}><img src="/assets/securely.png" width="18px" height="18px"></img></div>
                                <h4>Pay securely</h4>
                                <p>Et suscipit non lacus, quis. Morbi egestas justo faucibus eu. Congue diam sodales ultrices lectus rhoncus. Sed posuere tristique. </p> 
                            </div>
                            <div className={styles.card}>
                                <div className={styles.iconborder}><img src="/assets/card.png" width="20.44px" height="14.16px"></img></div>
                                <h4>Access your virtual cards</h4>
                                <p>Pay for goods & services online at any time without stress.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Getapp />
            </div>

            
    );
}
Savings.layout = "Default"
export default Savings;