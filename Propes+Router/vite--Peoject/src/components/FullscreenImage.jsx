
import { useParams ,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import styles from '../styles/FullscreenImage.module.css';

const FullscreenImage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const images = [
    { id: 1, src: 'https://www.shutterstock.com/image-photo/fashionable-clothes-boutique-store-london-600nw-589577570.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg', alt: 'Image 2' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH3ko5StfXnhOefIdjYNQGYD6xdy-anKkHg&s', alt: 'Image 3' },
    { id: 4, src: 'https://www.shutterstock.com/image-photo/clothes-on-clothing-hanger-260nw-2338282257.jpg', alt: 'Image 4' },
  ];

  const image = images.find((img) => img.id === parseInt(id));

  return (
    <div>
      <Navbar />
      <div className={styles.fullscreenImage}>
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
          <i className="fas fa-arrow-left"></i> Back to Gallery
        </button>
        <img src={image?.src} alt={image?.alt} />
        <p>{image?.alt}</p>
      </div>
    </div>
  );
};

export default FullscreenImage;
