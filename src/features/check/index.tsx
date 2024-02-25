import { useEffect, useState } from "react";
import { check } from "@/api/page";

type AddressCheckerProps = {
  address: string;
  defaultAddress?: string;
};

export function AddressChecker(props: AddressCheckerProps) {
  const [exists, setExists] = useState(false);
  useEffect(() => {
    if (props.address.length < 3) {
      setExists(true);
      return;
    }
    if (props.defaultAddress === props.address) {
      setExists(false);
      return;
    }

    const debounceTimer = setTimeout(() => {
      check(props.address).then((res) => {
        setExists(res.exists);
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
