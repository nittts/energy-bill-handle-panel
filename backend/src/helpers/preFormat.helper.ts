const removeStrings = (str: string) => {
  return str.replace(/[^0-9.,\s]/g, "").trim();
};

export default removeStrings;
