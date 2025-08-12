import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#ffffff] text-[#000000]">

      <section>

        {/* Header */}
        <div className="flex items-stretch justify-center h-max gap-20 p-2 border-2  border-gray-600 border-dashed">

          <div className="flex flex-col space-y-1.5">
            {/* General */}
            <h1 className="text-4xl font-bold">Alireza Rezapour</h1>
            <p className="text-[16px] text-black/80 max-w-max">Software Engineer / Backend Developer focused on Node.j & Golang</p>

            {/* Fact Section */}
            <div className="grid grid-cols-2 text-[15px] gap-2 m-auto">
              <div key={0} className="p-1 border-b-1">📍Living in: "Mashhad/Iran"</div>
              <div key={1} className="p-1 border-b-1">😍Love: "Game, Music, Walking"</div>
              <div key={2} className="p-1 border-b-1">🔨Working at: "Hamtapay"</div>
              <div key={3} className="p-1 border-b-1">😠Hate: "Clean Code"</div>
            </div>

            {/* Link Section */}
            <div className="flex justify-center gap-4 mt-auto">
              <button className="flex items-center border-1 gap-2 text-black px-4 rounded">
                <Image
                  src="/assets/gmail.png"
                  height={22}
                  width={22}
                  alt="Location Pin"
                />
                Gmail
              </button>

              <button className="flex items-center border-1 gap-2 text-black px-4 py-2 rounded">
                <Image
                  src="/assets/phone.png"
                  height={22}
                  width={22}
                  alt="Location Pin"
                />
                Phone
              </button>

              <button className="flex items-center border-1 gap-2 text-black px-4 py-2 rounded">
                <Image
                  src="/assets/linkedin.png"
                  height={22}
                  width={22}
                  alt="Location Pin"
                />
                Linkedin
              </button>

              <button className="flex items-center border-1 gap-2 text-black px-4 py-2 rounded">
                <Image
                  src="/assets/github.png"
                  height={22}
                  width={22}
                  alt="Github"
                />
                Github
              </button>
            </div>
          </div>

          <div className="rounded overflow-hidden">
            <Image src="/avatar.png" height={200} width={200} alt="Avatar" />
          </div>
        </div>

      </section >

    </main >
  );
}
