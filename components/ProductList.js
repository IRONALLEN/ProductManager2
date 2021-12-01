import React from 'react';
import { Link } from '@reach/router';
const ProductList = (props) => {
  return (
    <div>
      <h1>All Products:</h1>
      {props.product.map((product, idx) => {
        return (
          <div>
            <Link
              style={{ color: 'black', fontWeight: 'bold' }}
              to={'/' + product._id}
            >
              <p key={idx}>{product.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
