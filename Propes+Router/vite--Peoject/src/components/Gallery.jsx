
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../styles/Gallery.module.css';


const Gallery = () => {
  const images = [
    { id: 1, src: 'https://www.shutterstock.com/image-photo/fashionable-clothes-boutique-store-london-600nw-589577570.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg', alt: 'Image 2' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH3ko5StfXnhOefIdjYNQGYD6xdy-anKkHg&s', alt: 'Image 3' },
    { id: 4, src: 'https://www.shutterstock.com/image-photo/clothes-on-clothing-hanger-260nw-2338282257.jpg', alt: 'Image 4' },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.gallery}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageItem}>
            <Link to={`/image/${image.id}`}>
              <img src={image.src} alt={image.alt} />
              <div className={styles.imageOverlay}>
                <i className="fas fa-search-plus"></i>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
