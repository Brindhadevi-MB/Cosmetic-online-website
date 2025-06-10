import React, { useContext } from 'react';
import './ProductList.css';
import { CartContext } from '../context/CartContext'; // import context
import { useNavigate } from 'react-router-dom'; // import useNavigate

const Makeup = () => {
  const { addToCart } = useContext(CartContext); // access addToCart function
  const navigate = useNavigate(); // initialize navigate

  const makeupCategories = [
    {
      category: 'Face',
      products: [
        {
          id: 1,
          name: 'Dewy Foundation',
          price: 1099,
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmWSjngiTY6saJ25x2NC5J3kIfulka-9SmU5qtyUi-LOIAmVnEus-DUvZebYKsB1fmUjxCmj-Mh5M8UinjyCb7TRDWDr6ZM2_SOvxHpQhJ&usqp=CAE',
        },
        {
          id: 2,
          name: 'Liquid Highlighter',
          price: 899,
          image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfXnc7CxuKWzhCzh3NAdHFETITKDD2YBTGNyqHusKW_bqReQBy-hHj5opT9LbpIqcxEEWsnrlBO0AqjOzOGxgRHzPXm4QK7_d8MYAZkF7KvPkXXNhrx0O3RA&usqp=CAE',
        },
        {
          id: 3,
          name: 'Compact Powder',
          price: 699,
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRi8m2qRnKNX3K_M84Bkn8moDCtob3YzlGfG1fYxHj8JCfCOj_6rZIl4TyiamCjThNm_Rwpxf_kANYLkgQWyBeoKQzmCb62aYWj33znHPq2-oIbo8CsHgllfjs&usqp=CAE',
        },
        {
          id: 4,
          name: 'BB Cream',
          price: 599,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwAlY3SzgI60c4P0JpTBlPiXhjESmcTq58ZWL3qeC_Qh3k8rskz23XOCgcDqEhF1Gz5viyer28P5nOhfelpdhsz5P27jXfMcn7nG3TxBfvDJGCJHCJgJQS&usqp=CAE',
        },
      ],
    },
    {
      category: 'Lips',
      products: [
        {
          id: 5,
          name: 'Matte Lipstick',
          price: 499,
          image: 'https://www.havin.in/cdn/shop/files/51WZ7QGxw0L.jpg?v=1712855417',
        },
        {
          id: 6,
          name: 'Lip Gloss',
          price: 599,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKWXgVGpy1oXc24nar9tPhpHOXQfEFoB38jBHOoq_l5a2GSiXzoXVWIXOkMyTzg5Nw-7qE577_YDUR0q2vOaphFT_1agBvXOS0hPtlCN5_JkVBdwZ2FS6EBA&usqp=CAE',
        },
        {
          id: 7,
          name: 'Lip Crayon',
          price: 399,
          image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsggrnrSUQayxdsJg884cQiilDpmWI80NDhLbk6zERthyRrIXRqRnLcVk4ujKmx4-l7udn-_bZlY5BYGRChI2qssfdXaZLA_ecWlHXhsMj6Un8DTi1Tf1w&usqp=CAE',
        },
        {
          id: 8,
          name: 'Liquid Lipstick',
          price: 699,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNuhRf8wvpfkXDt5wGY8y4xBQ3dLsBvcl2YwXoVJ_zmbLxEFCACfVW6WUSRauSIV_Jbs1REy8pNw_5kdPJjs2riU9i6O4EuP7U30SbGGF2&usqp=CAE',
        },
      ],
    },
    {
      category: 'Cheeks',
      products: [
        {
          id: 9,
          name: 'Blush Palette',
          price: 799,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQTiC3eVTyHVkfRp_FLznZysMMunzo0xgObnfsHpL-WbC013i2dcCVj1Ott7fPZAq_0F7w7MHXEuo9QPf3fidWueFxaUFKUhWTthq45yL00kWPeEoSej9Sx&usqp=CAE',
        },
        {
          id: 10,
          name: 'Cream Contour',
          price: 699,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXd4ubwjI1hOH3MTfCqaN_UIeu4DDVmAhXLX0WlkJ2cAV2iyEeszUmRlSoPnLIqSMVGiw8vb8U0yCLgtZ_QcT4P16uJobhWsvCa0gfqoh4rj9je8Ah-eEv&usqp=CAE',
        },
        {
          id: 11,
          name: 'Highlighter Stick',
          price: 799,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9m9fev9GSMl_RTr3MMwbRpnEUp7BzrttlvvS-ME9l5ptT3NjN670npxwyVv_IBNY9pPK3tmj0JOLSpODdNXzsTttw2ksusKR-LMx94QA&usqp=CAE',
        },
        {
          id: 12,
          name: 'Cheek Tint',
          price: 699,
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR87FWcVJBNQrpnFjsihFpP8fD6YAoRnxyf0K6ve8Y-oPwL8_KJXYcD5WqUHQDLlqym_-DTB4xiGDg11b8C3Bdte7JEraMe_9NS7JB57rVFMjGmX20Cm3mUVw&usqp=CAE',
        },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);         // ✅ Add product to cart
    navigate('/cart');          // ✅ Redirect to cart page
  };

  return (
    <div className="product-page">
      <h2 className="section-heading">Makeup Products</h2>
      {makeupCategories.map((categoryData, index) => (
        <div key={index} className="category-section">
          <h3>{categoryData.category}</h3>
          <div className="product-list">
            {categoryData.products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Makeup;
