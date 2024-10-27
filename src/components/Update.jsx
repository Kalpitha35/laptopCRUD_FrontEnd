import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getSingleProductAPI, updateProductDetailAPI } from '../services/allApi';
// import { addProductDetailsAPI } from '../services/allApi';


const Update = () => {

    const {id} = useParams();
    const [productDetails,setProductDetails] = useState({
        productName:'',
        brand:'',
        category:'',
        price:'',
        url:''
    });

    useEffect(() => {
        if (id) {
            getSingleProduct(id);
        }
      }, [id]);

    const getSingleProduct = async (id)=>{
        try {
            const response = await getSingleProductAPI(id);
            setProductDetails(response.data)
            
        } catch (error) {
            console.log("Error in Fetching Product Details");
            
            
        }
    };

    const updateProductDetails = async ()=>{
        const {productName, brand, category, price, url} = productDetails;
        if(productName && brand  && category && price && url){
            try{
                await updateProductDetailAPI(id,productDetails);
                alert("Updated Successfully!!!")
            }catch(error){
                console.error("An error occurred. Please try again.")
            }
        }else{
            alert("Please fill the details completely!!!")
        }
    }

  return (
    <>
          <div className="d-flex justify-content-center align-items-center">
      <div style={{ position: 'absolute', top: "60px", backgroundColor: 'white' }} className="d-flex justify-content-evenly align-items-center flex-column border rounded shadow p-5">
        <h3 className="m-3" style={{ color: 'black' }}>UPDATE PRODUCT</h3>

        <Form.Floating className="mb-3">
          <Form.Control value={productDetails.productName} onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })} id="productName" type="text" style={{ width: '400px' }} placeholder="Product Name" />
          <label style={{ color: 'white' }} htmlFor="productName">Product Name</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control value={productDetails.brand} onChange={(e) => setProductDetails({ ...productDetails, brand: e.target.value })} id="brand" type="text" style={{ width: '400px' }} placeholder="Brand" />
          <label style={{ color: 'white' }} htmlFor="brand">Brand</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control value={productDetails.category} onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })} id="category" type="text" style={{ width: '400px' }} placeholder="Category" />
          <label style={{ color: 'white' }} htmlFor="category">Category</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control value={productDetails.price} onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })} id="price" type="number" style={{ width: '400px' }} placeholder="Price" />
          <label style={{ color: 'white' }} htmlFor="price">Price</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control value={productDetails.url} onChange={(e) => setProductDetails({ ...productDetails, url: e.target.value })} id="link" type="text" style={{ width: '400px' }} placeholder="URL of the Product" />
          <label style={{ color: 'white' }} htmlFor="price">URL</label>
        </Form.Floating>

        <div className="d-flex justify-content-evenly flex-row mt-3">
          <Link onClick={updateProductDetails} style={{ width: '200px', color: 'black' }} className="btn btn-warning me-2">UPDATE PRODUCT DETAILS</Link>
          <Link to={'/'} style={{ width: '200px', color: 'black' }} className="btn btn-warning" >BACK</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Update