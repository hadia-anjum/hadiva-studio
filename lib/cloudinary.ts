import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
  api_key: process.env.CLOUDINARY_API_KEY || '',
  api_secret: process.env.CLOUDINARY_API_SECRET || '',
  secure: true,
});

export default cloudinary;

/**
 * Uploads a base64 image string or file buffer to Cloudinary
 * @param fileStr Base64 string or file path
 * @param folder Target folder in Cloudinary
 */
export async function uploadImage(fileStr: string, folder = 'hadiva-studio') {
  try {
    const response = await cloudinary.uploader.upload(fileStr, {
      folder,
      resource_type: 'auto',
    });
    return response.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}
