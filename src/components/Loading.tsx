import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div
      className="
      w-6 h-6 flex items-center justify-center 
      overflow-hidden
      "
    >
      <CircleNotch weight="bold" className="animate-spin w-4 h-4 text-white" />
    </div>
  );
}
