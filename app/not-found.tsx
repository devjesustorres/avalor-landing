import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#e8edf3]">
      <div className="neu-extruded rounded-3xl p-10 max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">404</h2>
        <p className="text-slate-600 mb-6 text-sm">Page not found.</p>
        <Button
          as={Link}
          href="/"
          color="primary"
          radius="full"
          className="font-bold text-xs bg-brand-600 text-white shadow-neu-btn-blue"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}

