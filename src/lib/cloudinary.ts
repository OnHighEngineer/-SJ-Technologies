import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

export function getCloudinaryUrl(publicId: string, options: { width?: number; height?: number; crop?: string } = {}) {
  if (!publicId) return "/placeholder-laptop.jpg";
  if (publicId.startsWith("http://") || publicId.startsWith("https://")) {
    return publicId;
  }
  
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "demo";
  const { width = 800, height = 600, crop = "fill" } = options;
  return `https://res.cloudinary.com/${cloudName}/image/upload/w_${width},h_${height},c_${crop},f_auto,q_auto/${publicId}`;
}
