import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Savings.module.css";
import Getapp from '../components/getapp';


const Savings = () => {
  return (
    <div className={styles.savingSection}>
      <div className="pt-5 container">
        <div className={styles.goalSection}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className={styles.goalContent}>
                <h4>Set goals and track your spendings</h4>
                <p>
                  Blandit eget tellus nam leo in lacinia sed. Velit magna sed
                  ornare tellus. Tempor amet egestas a nunc sapien.
                </p>
                <br></br>
                <Link href="">
                  <a href="">Get started</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className={styles.mobApp}>
                <img src="/assets/mobileapp.png" width="541px" height="589px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className="container">
          <div className={styles.featureRow}>
            <div className={styles.card}>
              <div className={styles.iconborder}>
                <img
                  src="/assets/automatic.png"
                  width="18px"
                  height="20px"
                ></img>
              </div>
              <h4>Save automatically</h4>
              <p>
                Morbi tristique lorem condimentum et proin nulla etiam tellus
                morbi. Rutrum congue semper id nisl neque, mauris sed. Eget
                aenean adipiscing integer facilisi purus sit tortor integer.{" "}
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconborder}>
                <img src="/assets/save.png" width="18px" height="18px"></img>
              </div>
              <h4>Save on the go</h4>
              <p>
                Et suscipit non lacus, quis. Morbi egestas justo faucibus eu.
                Congue diam sodales ultrices lectus rhoncus. Sed posuere
                tristique.{" "}
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconborder}>
                <img
                  src="/assets/build.png"
                  width="20.44px"
                  height="14.16px"
                ></img>
              </div>
              <h4>Build discipline</h4>
              <p>
                Elementum nunc ac euismod maecenas aliquam feugiat ornare fusce.
                At in faucibus dignissim fusce eu eu, arcu. Dictum nullam at.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Getapp />
    </div>
  );
};
Savings.layout = "Default";
export default Savings;
