// write button card hereimport React from 'react';

const Button = () => {
  return (
    <button style={styles.button}>
      View Product
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Button;
