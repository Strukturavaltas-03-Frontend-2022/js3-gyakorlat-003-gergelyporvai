const setCookie = (stringToken) => {
  const expires = new Date(Date.now() + 15 * 60 * 1000);
  console.log(expires);
  document.cookie = `token=${stringToken};expires=${expires};path=/`;
};

export default setCookie;
