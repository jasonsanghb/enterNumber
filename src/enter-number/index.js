import EnterNumber from './enterNumber'

const install = function(Vue) {
  Vue.directive('EnterNumber', EnterNumber)
}

if (window.Vue) {
  window.enterNumber = EnterNumber
  Vue.use(install); // eslint-disable-line
}

EnterNumber.install = install
export default EnterNumber
