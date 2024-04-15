import Image from "next/image";
import { Ticket, UsersIcon } from "@/components";

export default function Home() {
  return (
    <main className="max-w-[1550px] bg-red-600 mx-auto">
      <form className="px-12 py-6 rounded-2xl bg-slate-500 overflow-hidden">
        <span className="flex items-center">
          <UsersIcon className="w-8 h-8 fill-gray-800 " />
          <p className="text-2xl font-bold text-gray-800 mr-4">
            مشخصات مسافران
          </p>
        </span>
        <Ticket />
        <input type="submit" />
      </form>
    </main>
  );
}
