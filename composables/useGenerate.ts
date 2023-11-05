export default function useGenerate() {
  function generateString(length: number, templateCharacters?: string) {
    let result = "";
    const characters = templateCharacters
      ? templateCharacters
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  return { generateString };
}
