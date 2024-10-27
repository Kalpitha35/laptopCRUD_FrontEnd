import commonAPI from "./commonApi"
import SERVER_URL from "./serverUrl"

// upload productDetails 
export const addProductDetailsAPI = async (details)=>{
    return await commonAPI("POST",`${SERVER_URL}/productDetails`,details)
}

//  getProductdetailsAPI api 
export const getProductdetailsAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/productDetails`,"")
}

// deleteProductDetailsAPI - called by VideoCard
export const deleteProductDetailsAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/productDetails/${id}`,{})
}

export const getSingleProductAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/productDetails/${id}`,'')
}

export const updateProductDetailAPI = async(id,updatedDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/productDetails/${id}`,updatedDetails)
}