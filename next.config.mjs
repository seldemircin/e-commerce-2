/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Harici URL'nin ana bilgisayarı buraya eklenir
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/home",
      permanent: true, // SEO için true yapabilirsiniz.
    },
  ],
};

export default nextConfig;
