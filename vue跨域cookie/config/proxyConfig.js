module.exports = {
  proxyList: {
		'/apis': {
			// 测试环境
			target: 'https://apitest.miaomore.com',
			changeOrigin: true,
			pathRewrite: {
				'^/apis': ''
			}
		}
  }
}