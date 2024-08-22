/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Điều này sẽ đảm bảo Next.js xuất bản tĩnh
  experimental: {
    appDir: false, // Tắt app directory nếu đang sử dụng
  },
  trailingSlash: true, // Đảm bảo các URL có trailing slash để export tốt hơn
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
//     appDir: false,
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
