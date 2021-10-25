const isColor = (declaration) => {
  const isHex = declaration.matchAll(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gim);
  return isHex;
};

module.exports = isColor;
