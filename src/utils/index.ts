export const generateUniqueId = () => {
  return Math.floor(Math.random() * Date.now()).toString();
};
