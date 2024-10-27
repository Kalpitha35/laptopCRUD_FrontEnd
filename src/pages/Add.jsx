import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addProductDetailsAPI } from '../services/allApi';


const Add = () => {
    const [itemDetails,setItemDetails] =  useState({
        productName:'',
        brand:'',
        category:'',
        price:'',
        url:''
        

    })

    const addProductDetails = async ()=>{
        const {productName, brand, category, price, url} = itemDetails

        if(productName && brand && category && price && url ){
            try{
                const response = await addProductDetailsAPI(itemDetails);
                console.log(response);
                
                if (response.status >= 200 && response.status < 300){
                    alert("Products are Added Successfully!!!")
                    setItemDetails({productName: '',brand:'',category:'',price:'', url})
                }
        }catch (err){
            console.error(err)
        }
    }else{
        alert("Please Add The Details Completely!!!")
    }
};

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div style={{ position: 'absolute', top: "60px", backgroundColor: 'white' }} className="d-flex justify-content-evenly align-items-center flex-column border rounded shadow p-5">
        <h3 className="m-3" style={{ color: 'black' }}>ADD PRODUCT</h3>

        <Form.Floating className="mb-3">
          <Form.Control value={itemDetails.productName} onChange={(e)=> setItemDetails({...itemDetails, productName:e.target.value})} id="productName" type="text" style={{ width: '400px' }} placeholder="Product Name" />
          <label style={{ color: 'white' }} htmlFor="productName">Product Name</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control value={itemDetails.brand} onChange={(e)=> setItemDetails({...itemDetails, brand:e.target.value})} id="brand" type="text" style={{ width: '400px' }} placeholder="Brand" />
          <label style={{ color: 'white' }} htmlFor="brand">Brand</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control value={itemDetails.category} onChange={(e)=> setItemDetails({...itemDetails, category:e.target.value})} id="category" type="text" style={{ width: '400px' }} placeholder="Category" />
          <label style={{ color: 'white' }} htmlFor="category">Category</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control value={itemDetails.price} onChange={(e)=> setItemDetails({...itemDetails, price:e.target.value})} id="price" type="number" style={{ width: '400px' }} placeholder="Price" />
          <label style={{ color: 'white' }} htmlFor="price">Price</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control value={itemDetails.url} onChange={(e)=> setItemDetails({...itemDetails, url:e.target.value})} id="link" type="text" style={{ width: '400px' }} placeholder="URL of the Product" />
          <label style={{ color: 'white' }} htmlFor="price">URL</label>
        </Form.Floating>

        <div className="d-flex justify-content-evenly flex-row mt-3">
          <Link onClick={addProductDetails} style={{ width: '200px', color: 'black' }} className="btn btn-warning me-2">ADD PRODUCT</Link>
          <Link to={'/'} style={{ width: '200px', color: 'black' }} className="btn btn-warning" >BACK</Link>
        </div>
      </div>
    </div>
  );
};

export default Add;
