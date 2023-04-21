import { CryptoDigestAlgorithm, digestStringAsync } from 'expo-crypto';

export async function uniqueHash(str1: string, str2: string): Promise<string> {
  const hash1 = await digestStringAsync(CryptoDigestAlgorithm.SHA256, str1);
  const hash2 = await digestStringAsync(CryptoDigestAlgorithm.SHA256, str2);

  // combine the two hashes in a specific order
  const combinedHash = hash1 < hash2 ? `${hash1}${hash2}` : `${hash2}${hash1}`;

  // generate the final hash using the combined string
  return await digestStringAsync(CryptoDigestAlgorithm.SHA256, combinedHash);
}
