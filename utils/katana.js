const normalizeSrc = (src) => {
  return src[0] === "/" ? src.slice(1) : src;
};

export const katana = ({ src, width, quality }) => {
  const params = [`w=${width}`];
  if (quality) {
    params.push(`q=${quality}`);
  }
  const paramsString = params.join(",");
  return `${normalizeSrc(src)}`;
};
