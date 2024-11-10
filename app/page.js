import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-green-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl font-thin">The best URL shortener !</p>
          <p className="text-2xl font-thin px-3 text-center">The most efficient and easy to use url shortener.</p>
          <div>

          <Link href="/generate"><button className="bg-green-600 px-10 py-2 mx-2 rounded-lg hover:bg-green-400 shadow-green-900 drop-shadow-xl shadow-md shadow-inner font-bold " >Try Now!</button></Link>
        <Link href="https://github.com/A-JA-Y" target='_blank'><button className="bg-green-600 px-10 py-2 mx-2 rounded-lg hover:bg-green-400 shadow-green-900 drop-shadow-xl shadow-md shadow-inner font-bold " >Github</button></Link>
          </div>
        </div>
        <div className=" flex  justify-start relative drop-shadow-xl shadow-inner">
          <Image
            src="/hero.png"
            alt="hero"
            fill={true}
            
           
          />
          

        </div>
        
      </section>
    </main>
  );
}
