import Link from 'next/link'
import styles from '../styles/Home.module.css'
import FAQ from '../components/faq'
import Getapp from '../components/getapp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  return (
   <>
    

    <div className={styles.body}>
      <Container className={styles.container1}>
        <Row className={styles.subcontainer}>
          <Col className={styles.textContainer}>
            <h1 className={styles.headerText}>Move your money freely</h1>
            <p className={styles.paraText}>Here at Revovely, we focus on making
              seamless ways for you to send and recieve
              money locally & internationally.
            </p>
            <button className={` ${styles.button}`}>Get started</button>
          </Col>
          <Col className={styles.imageContainer}>
            <img className='img-fluid' src="right-image.png" width='448px' />
          </Col>
        </Row>
      </Container>
      <div className={styles.container2}>
        <div className={styles.subcontainer2}>
          
          <div className={styles.textContainer2}>
            <h6 className={styles.colorText}>Trusted Worldwide</h6>
            <h1 className={styles.mainHeader}>Trusted by over 600 million users</h1>
            <p className={styles.texts}>A ac venenatis quis malesuada. Duis quis bibendum laoreet euismod elementum commodo. 
              Massa aliquet habitasse cursus diam ipsum.
            </p>
            <hr className={styles.line}/>
            <Link href=''><a className={`mt-3 ${styles.colorLink}`}>Explore our Terms of use <img className='img-fluid' src='line.png'/></a></Link>
            <Link href=''><a className={`mt-3 ${styles.colorLink}`}>See the Privacy policy <img className='img-fluid' src='line.png'/></a></Link>
          </div>
          <div  className={styles.userContainer}>
        
            <div className={styles.flexContainer}>
              <div className={styles.columns}>
                <img  src="server.png" className={`img-fluid mb-2`} width='38.4px' height='33.6px'/>
                <h3 className={styles.topText} >99.99% uptime</h3>
                <p className={` ${styles.paraSize} ${styles.textWidth }`}>On Revovely, there's zero 
                  maintenance downtime
                </p>
              </div>
              <div className={` ${styles.columns}`}>
                <img src='users.png' className={`img-fluid mb-2 ${styles.tabMargin}`} width='43.2px' height='33.6px'/>
                <h3 className={styles.topText}>600M+ Users</h3>
                <p className={styles.paraSize}>trusted by over 600 million users
                  around the world 
                </p>
              </div>
            </div>
            <div className={`${styles.tabmargin} ${styles.flexContainer}`}>
              <div className={styles.columns2}>
                <img src="vector5.png" className={`img-fluid mb-2`} width='38.4px' height='40.8px'/>
                <h3 className={styles.topText}>Millions</h3>
                <p className={styles.paraSize}>transaction per day</p>
              </div>
              <div className={styles.columns}>
                <img src='globe.png' className={`img-fluid mb-2`} width='38.4px'/>
                <h3 className={styles.topText}>10+ countries</h3>
                <p className={` ${styles.paraSize} ${styles.textWidth }`}>have used Revovely to send & receive money</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className={styles.container3}>
        <div className={`me-3 ${styles.subcontainer3}`}>
          <div className={styles.imageContainer}><img src='phone1.png' width='401px' className={`img-fluid ${styles.imageMargin}`}/></div>
          <div className={styles.rightContent}>
            <h2 className={styles.leftHeader}>Send money to friends & family seamlessly</h2>
            <p className={styles.leftText}>Blandit eget tellus nam leo in lacinia
              sed. Velit magna sed ornare tellus. Tempor
              amet egestas a nunc sapien.
            </p>
            <button className={styles.button}>Learn more <img src='arrow.png' width='16px' className={`img-fluid ms-1`} /></button>
          </div>
        </div>
        
      </div>
      <div className={styles.container4}>
        <div className={`me-1 ${styles.subcontainer4}`}>
          <div className={styles.rightContent}>
            <h2 className={styles.leftHeader}>Pay your bills instantly with a few taps</h2>
            <p className={styles.leftText}>Blandit eget tellus nam leo in lacinia
            sed. Velit magna sed ornare tellus. Tempor
            amet egestas a nunc sapien.
          </p>
          <button className={styles.button}>Learn more <img src='arrow.png' width='16px' className={`img-fluid ms-1`} /></button>
          </div>
          <div className={styles.imageContainer2}><img src='phone2.png' width='321px' className={`img-fluid mt-3`} /></div>
        </div>
      </div>

      <div className={styles.containerNew}>
        <div className={`me-1 ${styles.subcontainer5}`}>
           <div className={styles.imageContainer5}><img src='phone3.png' width='401px' className={`img-fluid mt-5 ${styles.phoneImage}`}/></div>
        <div className={`${styles.rightContent5}`}>
          <h2 className={styles.leftHeader5}>Set goals and track your spendings</h2>
          <p className={styles.leftText5}>Blandit eget tellus nam leo in lacinia
            sed. Velit magna sed ornare tellus. Tempor
            amet egestas a nunc sapien.
          </p>
          <button className={styles.button}>Learn more <img src='arrow.png' width='16px' className={`img-fluid ms-1`} /></button>
        </div>
        </div>
        
      </div>
      <div className={styles.container4}>
        <div className={`me-1 ${styles.subcontainer4}`}>
        <div className={styles.rightContent}>
            <h2 className={styles.leftHeader}>Unlock rewards when you use the Revovely app</h2>
            <p className={styles.leftText}>Blandit eget tellus nam leo in lacinia
            sed. Velit magna sed ornare tellus. Tempor
            amet egestas a nunc sapien.
          </p>
          <button className={styles.button}>Learn more <img src='arrow.png' width='16px' className={`img-fluid ms-1`} /></button>
          </div>
          <div className={styles.imageContainer2}><img src='phone4.png' width='321px' className={`img-fluid mt-3`} /></div>
        </div>
      </div>

      <div className={styles.faq}>
        <h6 className={styles.smallHeading}>Frequently asked questions</h6>
        <h3 className={styles.largeHeader}>Let's answer some of your questions</h3>
        <div className={styles.faqContents}>
          <FAQ />
        </div>
      </div>
      
      
      <div className={styles.container5}>
        <h6 className={styles.smallHeading}>Testimonials</h6>
        <h3 className={styles.largeHeader}>What our customers are saying</h3>
        <div className={styles.containerbox2}>
          <img className='img-fluid' src="leftArrow.png" width='56px' />
          <p className={styles.textSize}>Quam mattis volutpat elementum eget ac mollis ac congue. 
            Congue a sodales vel pharetra, risus. Est nullam eu orci 
            platea felis quis ante duis sit. Sagittis posuere at sed 
            lobortis id. Aliquam.
          </p>
          <img className='img-fluid' src="rightArrow.png" width='56px' />
        </div>
        <div className={styles.imageFlex}>
          <img className='img-fluid' src="avatar.png" height='24px' />
          <p>Majek Durosimi </p>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src="logos.png" height='40px' className={`img-fluid ${styles.logos}`} />
      </div>
      
        <Getapp />
    </div>
  </>  
  );
}



Home.layout = "Default";
export default Home;