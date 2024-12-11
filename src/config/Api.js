// export const RestAPI = "https://api.middle-east-music.com/api";
// export const RestAPI = "https://lgbl2b34-3000.inc1.devtunnels.ms/api";
// export const RestAPI = "http://88.222.212.243/api";
// export const RestAPI = "http://127.0.0.1:3005/api";
export const RestAPI = "https://ideax.in/api";
// https://lgbl2b34-3000.inc1.devtunnels.ms/
import axios from 'axios';
const savePostDesign = async (postData) => {
  const formData = new FormData();
  formData.append('brandName', postData.brandName);
  formData.append('selectedPostType', postData.selectedPostType);
  formData.append('selectedPostFor', postData.selectedPostFor);
  formData.append('productType', postData.productType);
  formData.append('outlineTechnicalDetails', postData.outlineTechnicalDetails);
  formData.append('productTheme', postData.productTheme);
  formData.append('productDimensions', postData.productDimensions);
  formData.append('productMaterial', postData.productMaterial);
  formData.append('productMarketingHighlights', postData.productMarketingHighlights);
  formData.append('notesToDesigner', postData.notesToDesigner);
  formData.append('selectedPlatform',postData.selectedPlatform);
  postData?.uploadedFiles?.forEach((file) => {
    formData.append(`uploadedFiles`, file);
  });
  try {
    const response = await axios.post(`${RestAPI}/post-design`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error saving post design:', error);
    return null;
  }
};
export default  savePostDesign;