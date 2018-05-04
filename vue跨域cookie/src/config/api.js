/**
 * Created by Z97 on 2017/6/15.
 */
var ENV = "dev"; // 控制开关,dev 开发环境，release,master环境时改为prod
export default {
  pathUrl:function() {
    var URLS = {
      dev: {
        MJK: '/apis',
        WEB_URL: {
          WEB_MIAO: 'https://webtest.miaomore.com/test'
        }
      },
      prod: {
        MJK: 'https://web.miaomore.com',
        WEB_URL: {
          WEB_MIAO: 'https://web.miaomore.com/online'
        }
      }
    }
    return URLS[ENV];
  }
}
