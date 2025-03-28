
import { useEffect } from "react";
export default function Home() {
  
  const env = process.env;
  console.log(env.NEXT_PUBLIC_VARIABLE_FOR_CLIENT);
  console.log(env.VARIABLE_FOR_SERVER);
  console.log(env.DB_CONNECTION_STRING);
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {process.env.NEXT_PUBLIC_VARIABLE_FOR_CLIENT+" "}
        {process.env.VARIABLE_FOR_SERVER+" "}
        {process.env.DB_CONNECTION_STRING}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
