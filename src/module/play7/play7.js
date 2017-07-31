import Vue from 'vue'
import App from './App'
import _ from 'lodash'

import 'common/css/reset.css'
import 'common/css/animate.min.css'
import 'common/js/device.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
