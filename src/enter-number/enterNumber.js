export default {
  inserted(el) {
    el.addEventListener('keydown', function(e) {
      const key = e.key
      if (key === '.' || key === 'e' || key === '-') {
        // 禁止输入框内输入.或者-或者e
        e.preventDefault()
      }
    })
  }
}
