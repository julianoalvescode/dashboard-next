import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <>
      <div className="grid items-center gap-3 grid-cols-profile">
        <img
          src="https://github.com/julianoalvescode.png"
          className="w-10 h-10 rounded-full"
          alt="Juliano Alves"
        />
        <div className="flex flex-col truncate">
          <span className="text-sm font-semibold text-zinc-700">
            Juliano Alves
          </span>
          <span className="truncate text-sm text-zinc-500">
            contato@julianoalves.me
          </span>
        </div>
        <button
          type="button"
          className="ml-auto rounded-md p-2 hover:bg-zinc-50 "
        >
          <LogOut className="w-5 h-4 text-zinc-500" />
        </button>
      </div>
    </>
  );
}
