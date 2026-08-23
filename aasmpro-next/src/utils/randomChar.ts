export function randomChar(): string {
  const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS.length));
}
