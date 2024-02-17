import { useEffect, useState } from "react";
import { CheckAddress } from "../services/address-check";

type AddressCheckerProps = {
  address: string;
  defaultAddress?: string;
};

export function AddressChecker(props: AddressCheckerProps) {
  const [exists, setExists] = useState(false);
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      CheckAddress(props.address, props.defaultAddress).then((res) => {
        setExists(res);
      });
    }, 500); // Задержка в миллисекундах

    // Очистка таймера при каждом изменении адреса
    return () => clearTimeout(debounceTimer);
  }, [props.address, props.defaultAddress]);
  if (exists) {
    return (
      <div className="w-4 h-4 rounded-full bg-red-500 absolute top-1/2 -translate-y-1/2 right-2 "></div>
    );
  }
  return (
    <div className="w-4 h-4 rounded-full bg-emerald-500 absolute top-1/2 -translate-y-1/2 right-2"></div>
  );
}
