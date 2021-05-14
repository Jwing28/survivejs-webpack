export default (text = 'Hello world') => {
  const element = document.createElement('button');

  element.className = 'rounded bg-red-100 border max-w-md m-4 p-4';
  element.innerHTML = text;
  element.onclick = () =>
    import('./lazy')
      .then((lazy) => {
        element.textContent = lazy.default;
      })
      .catch((err) => console.error(err));

  return element;
};
