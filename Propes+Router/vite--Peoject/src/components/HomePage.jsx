
import Navbar from './Navbar';  
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <Navbar /> 
      <div className={styles.homePage}>
        <h1>Welcome to the Image Gallery</h1>
        <p>oday, clothing comes in a wide variety of styles, fabrics, and designs, influenced by factors such as climate, profession, social status, and individual tastes.</p>
       
      </div>
    </div>
  );
};

export default HomePage;
