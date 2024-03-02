import { Loader } from "@/features/auth";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-5xl font-bold">
      <Loader />
    </div>
  );
}
