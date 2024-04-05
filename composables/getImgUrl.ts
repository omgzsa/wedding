export const useGetImgUrl = (dir: string, name: string) => {
  return new URL(`../assets/${dir}/${name}`, import.meta.url).href;
};
