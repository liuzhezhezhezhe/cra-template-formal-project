/**
 * get url query
 * @param {string} key
 * @returns {string | null}
 */
export function query(key: string): string | null {
    const search = window.location.search.substring(1);
    const kv = search.split("&");
    for (let i = 0; i < kv.length; i++) {
      const item = kv[i].split("=");
      if (item[0] === key) return item[1];
    }
    return null;
  }
  