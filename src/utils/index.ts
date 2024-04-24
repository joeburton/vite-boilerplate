export const generateUniqueId = () => {
  return Math.floor(Math.random() * Date.now()).toString();
};

export const getImageUrl = (name: string) => {
  return new URL(`../assets/logos/${name}`, import.meta.url).href;
};
