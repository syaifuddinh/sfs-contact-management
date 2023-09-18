

export const formatMoney: (data: string) => string = (data: string) => {
    if(!data) return "0";
    const parts = data.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

export const generateUUID = () => {
  // Generate a random array of 16 bytes (128 bits)
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);

  // Set the version and variant bits
  randomBytes[6] = (randomBytes[6] & 0x0F) | 0x40; // Version 4 (random)
  randomBytes[8] = (randomBytes[8] & 0x3F) | 0x80; // Variant 10

  // Convert the bytes to a hexadecimal string
  const uuid = Array.from(randomBytes)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');

  // Insert hyphens at the appropriate positions
  return `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`;
}