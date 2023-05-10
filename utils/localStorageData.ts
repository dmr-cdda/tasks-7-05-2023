export const allLocalStorageData = () => {
    if (typeof window !== 'undefined') {
        return Object.keys(localStorage).map(key => {
  return {
    key: key,
    value: localStorage.getItem(key)
  }
});
    }
}