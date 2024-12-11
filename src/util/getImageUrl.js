export function getImageUrl(image) {
  const baseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  if (!baseURL) {
    throw new Error("Base URL is not defined. Check your .env.local file.");
  }
  return `${baseURL}${image}`;
}
