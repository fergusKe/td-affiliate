export const setCookie = (cname, cvalue, cexdays) => {
  const d = new Date()
  const exdays = cexdays || 7 // 預設 7 天
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = `expires=${d.toGMTString()}`
  const path = 'path=/'
  document.cookie = `${cname}=${cvalue}; ${expires}; ${path}`
}

// 取得 cookie
export const getCookie = cname => {
  const name = `${cname}=`
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i += 1) {
    const c = ca[i].trim()
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
  return ''
}

export const removeCookie = cname => {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const cval = getCookie(cname)
  if (cval !== null) document.cookie = `${cname}=${cval};expires=${exp.toGMTString()}`
}
