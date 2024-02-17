import axios from "axios";

export async function CheckAddress(address: string, defaultAddress?: string) {
  if (address.length <= 3) return true;
  if (address === defaultAddress) return false;
  const res: { exists: boolean } = (
    await axios.get(`https://tap-backend-awiw.onrender.com/address/${address}`)
  ).data;
  return res.exists;
}
