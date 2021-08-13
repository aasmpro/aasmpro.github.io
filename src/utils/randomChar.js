export const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const lower = "abcdefghijklmnopqrstuvwxyz";
export const number = "0123456789";
export const signs = "!@#$%&*:;<>{}[]()";

export const allChars = upper + lower + number + signs;

export const randomChar = (chars = allChars) => {
  return chars.charAt(Math.floor(Math.random() * chars.length));
};
