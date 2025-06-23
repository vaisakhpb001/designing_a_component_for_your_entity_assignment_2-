// write product card here
import React from 'react';
import Button from '../components/button'; // Adjust path if needed

const Productcard = () => {
  // Static product details
  const productImage = 'https://via.placeholder.com/150';
  const productName = 'Sample Product';
  const productPrice = '$99.99';

  return (
    <div style={styles.card}>
      <img src={productImage} alt={productName} style={styles.image} />
      <h2>{productName}</h2>
      <p>Price: {productPrice}</p>
      <Button />
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    width: '250px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  }
};

export default Productcard;
