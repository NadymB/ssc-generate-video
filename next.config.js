/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Điều này sẽ đảm bảo Next.js xuất bản tĩnh
  experimental: {
    // appDir: false, // Tắt app directory nếu đang sử dụng (đã xóa)
  },
  trailingSlash: false, // Đảm bảo các URL có trailing slash để export tốt hơn
  //   async redirects() {
  //     return [
  //       {
  //         source: "/",
  //         destination: "/music-generation",
  //         permanent: true,
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "standalone", // Use standalone instead of export for redirects support
//   experimental: {
//     // appDir: false, // Tắt app directory nếu đang sử dụng (đã xóa)
//   },
//   trailingSlash: true,
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/music-generation",
//         permanent: true,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
