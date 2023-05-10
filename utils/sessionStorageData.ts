export const allSessionStorageData = () => {
    if (typeof window !== 'undefined') {
        return Object.keys(sessionStorage).map(key => {
  return {
    key: key,
    value: sessionStorage.getItem(key)
  }
});
    }
}