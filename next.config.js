/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "vapa.vn",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ], // Thêm 'vapa.vn' vào danh sách domains cho phép
  },
};

module.exports = nextConfig;
