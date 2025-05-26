const { ProxyChain } = require('proxy-chain');

const PORT = 8888; // Bạn có thể thay đổi port

const server = new ProxyChain.Server({
  port: PORT,
  verbose: true,

  // Có thể thêm xác thực proxy nếu muốn
  prepareRequestFunction: ({ request }) => {
    // Ví dụ: chặn theo IP hoặc thêm xác thực
    return {
      // upstreamProxyUrl: 'http://user:pass@other-proxy.com:3128' // nếu muốn dùng proxy gốc
      failMsg: null, // null = cho phép, chuỗi = từ chối
    };
  },
});

server.listen(() => {
  console.log(`🟢 Proxy HTTP đang chạy tại: http://127.0.0.1:${PORT}`);
});
