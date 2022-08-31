import styles from '../styles/contactus.module.css'

const contactus = () => {
    return ( 
        <>
         <div className={styles.mainBody}>
            <div className={styles.container1}>
                <div className={styles.subContainer1}>
                    <h3 className={styles.header1}>Send us a message</h3>
                    <p className={styles.texts}>we'd love to hear from you</p>
                    <form className={styles.formContainer} action="">
                      <div className={styles.input1}>   
                        <div className={styles.columnFlex}>
                            <label className={styles.labelText} htmlFor="">First name</label>
                            <input className={styles.field} type="text" placeholder="Your" />
                        </div>

                        <div className={styles.columnFlex}>
                            <label className={styles.labelText} htmlFor="">Last name</label>
                            <input className={styles.field} type="text" placeholder="Name" />
                        </div>
                      </div>  

                      <div className={styles.input1}>   
                        <div className={styles.columnFlex}>
                            <label className={styles.labelText2} htmlFor="">Email</label>
                            <input className={styles.field} type="email" placeholder="Your Email" />
                        </div>

                        <div className={styles.columnFlex}>
                            <label className={styles.labelText2} htmlFor="">Phone</label>
                            <input className={styles.field} type="tel" placeholder="+234" />
                        </div>
                      </div>

                      <div className={`mt-3 ${styles.responsive}`}>
                      <label className={styles.labelText3} htmlFor="">Message</label>
                        <textarea className={styles.Textarea} name="" id="" cols="30" rows="10" placeholder='Type Your Message Here...' />
                      </div>
                      <button className={styles.Button}>Send Message</button>
                    </form>
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.miniContainer}>
                    <img src="customercare.png" className='img-fluid' width='50px'/>
                    <h4 className={styles.smallheader}>Call Support</h4>
                    <p className={styles.paragraph}>Platea volutpat in vitae volutpat vitae in commodo vulputate nulla. </p>
                </div>
                <div className={styles.miniContainer}>
                <img src="message.png" className='img-fluid' width='50px'/>
                    <h4 className={styles.smallheader}>Chat With Us</h4>
                    <p className={styles.paragraph}>Platea volutpat in vitae volutpat vitae in commodo vulputate nulla. </p>
                </div>
                <div className={styles.miniContainer}>
                <img src="location.png" className='img-fluid' width='50px'/>
                    <h4 className={styles.smallheader}>Address</h4>
                    <p className={styles.paragraph}>4517 Washington Ave. Manchester
                        Kentucky 39495 
                    </p>
                </div>
            </div>
         </div>
        </>
     );
}
 

contactus.layout = 'Default'
export default contactus;