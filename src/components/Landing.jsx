import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProductDetailsAPI, getProductdetailsAPI } from '../services/allApi';

const Landing = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await getProductdetailsAPI();
    setProductDetails(response.data);
    setFilteredProducts(response.data); // Set initial filter to all products
  };

  const deleteProduct = async (id) => {
    await deleteProductDetailsAPI(id);
    getAllProducts();
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = productDetails.filter(product => 
      product.productName.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
    
    setFilteredProducts(filtered);
  };

  return (
    <>
      <h1 style={{ marginTop: '50px' }} className='text-light text-center'>ALL PRODUCTS</h1>
      
      {/* Search input */}
      <input className="form-control "
        type="text"
        placeholder="Search by name, brand, or category"
        value={searchTerm}
        onChange={handleSearch}
        style={{ margin: '20px auto', display: 'block', width: '300px', padding: '10px' }}
      />

  
      
      <table style={{ width: '100%', marginLeft: '0px', marginTop: '50px' }} className="table border shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>BRAND</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <tr  key={item?.id}>
                <td >{index + 1}</td>
                <td>
                  <Link to={'https://www.amazon.in/s?k=laptop+of&adgrpid=54415150930&ext_vrnc=hi&hvadid=398041345339&hvdev=c&hvlocphy=9149272&hvnetw=g&hvqmt=b&hvrand=15436866227392901503&hvtargid=kwd-299699527827&hydadcr=3785_1993866&tag=googinhydr1-21&ref=pd_sl_6l850wl5j3_b'} target='_blank'>
                    <img
                      src={item?.url || 'https://via.placeholder.com/80'}
                      alt={item?.productName}
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                  </Link>
                </td>
                <td>{item?.productName}</td>
                <td>{item?.brand}</td>
                <td>{item?.category}</td>
                <td>$ {item?.price}</td>
                <td>
                  <Link to={`/update/${item?.id}`} style={{ width: '120px', backgroundColor: 'green', color: 'white' }} className="btn btn-success">EDIT</Link>
                  <button onClick={() => deleteProduct(item?.id)} style={{ width: '120px', backgroundColor: 'red', color: 'white' }} className="btn btn-danger">DELETE</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className='text-danger fw-bolder text-center'>No Products Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Landing;
