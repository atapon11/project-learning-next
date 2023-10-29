// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/data',
          destination: 'https://muddy-dog-bedclothes.cyclic.app/data', // เปลี่ยนเป็น URL ของ API ของคุณ
        },
      ];
    },
  };
  