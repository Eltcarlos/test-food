/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'buckettesting21.s3.amazonaws.com/**',
              port: '',
            },
          ],
    }
}

module.exports = nextConfig
