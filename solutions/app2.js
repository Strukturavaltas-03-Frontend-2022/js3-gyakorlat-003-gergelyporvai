const cookieHandler = {
  getAll() {
    const keyValuePairs = document.cookie
      .split("; ")
      .map((item) => item.split("="));
    console.log(keyValuePairs);
    return Object.fromEntries(keyValuePairs);
  },
  toSessionStorage() {
    const allCookies = this.getAll();
    Object.entries(allCookies).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  },
  flush() {
    const allCookies = this.getAll();
    Object.entries(allCookies).forEach(([entry]) => {
      document.cookie = `${entry}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    });
  },
};

export { cookieHandler };
