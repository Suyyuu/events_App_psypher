import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="md:text-6xl sm:text-4xl">Welcome to Events</h1>
      <a href="/events" className="px-5 py-2 bg-amber-400 text-fuchsia-950">Events</a>
    </div>
  );
}
