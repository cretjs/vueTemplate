const isWeiXin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  let matches = ua.match(/MicroMessenger/i)
  if (matches && matches.length > 0) {
    return true
  } else {
    return false
  }
}

export {
  isWeiXin
}
