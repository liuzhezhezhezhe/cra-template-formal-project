/**
 * setCookie
 * @param {string} key
 * @param {string} value
 * @param {number?} expireTime
 */
export function setCookie(key: string, value: string, expireTime?: number) {
  if (expireTime !== undefined && expireTime > 0) {
    const expire = new Date(+new Date() + expireTime);
    document.cookie = `${key}=${encodeURIComponent(
      value
    )};expires=${expire.toUTCString()}`;
  } else {
    document.cookie = `${key}=${encodeURIComponent(value)}`;
  }
}

/**
 * getCookie
 * @param {string} key
 * @returns {string | null}
 */
export function getCookie(key: string): string | null {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === key) {
      return cookie[1];
    }
  }
  return null;
}
