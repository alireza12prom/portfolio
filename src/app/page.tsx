import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container relative mx-auto overflow-auto md:p-16 p-4 bg-[#ffffff] text-[#000000]">

      <section className="flex flex-col items-center space-y-8">

        {/* Header */}
        <div className="flex items-stretch justify-between p-2 w-3xl border-gray-600">

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


        {/* About Me */}
        <section className="flex flex-col items-stretch justify-center p-2 w-3xl space-y-1.5 border-gray-600 border-2 border-dashed">
          <h1 className="text-xl">About Me</h1>
          <p className="text-black/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus fugit nobis! Rerum alias dignissimos assumenda atque eligendi rem animi quas ipsam ab? Voluptatem minima pariatur blanditiis, vero necessitatibus nemo?</p>
        </section>


        {/* Experience */}
        <section className="flex flex-col items-stretch justify-center p-2 w-3xl space-y-1.5 border-gray-600 border-2 border-dashed">
          <h1 className="text-xl">Work Experience</h1>

          <div>
            <div className="flex items-stretch justify-between">
              <h3>Part Software Group</h3>
              <p className="text-sm text-gray-500">
                Dec 2022
                -
                Feb 2024
              </p>
            </div>

            <h4 className="font-mono text-sm text-gray-500">Software Engineer • Fulltime</h4>

            <div className="flex flex-col items-stretch ml-3">
              <p className="text-sm">⁃ Option 1</p>
              <p className="text-sm">⁃ Option 2</p>
              <p className="text-sm">⁃ Option 3</p>
              <p className="text-sm">⁃ Option 4</p>
            </div>
          </div>
        </section>


        {/* Skills */}
        <section className="flex flex-col gap-3 justify-center p-2 w-3xl space-y-1.5 border-gray-600 border-2 border-dashed">
          <h3>Skills</h3>

          <div className="flex flex-wrap gap-2 text-sm">
            <p>Languages & Frameworks:</p>

            {
              ["javascript", "typescript", "node.js", "golang", "express.js", "nest.js", "fastify"]
                .map((item) => {
                  return <div className="px-1.5 py-0.5 bg-gray-900 text-white rounded hover:bg-gray-600">{item}</div>
                })
            }
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <p>Databases:</p>

            {
              ["redis", "postgresql", "mysql", "mongodb"]
                .map((item) => {
                  return <div className="px-1.5 py-0.5 text-sm bg-gray-900 text-white rounded hover:bg-gray-600">{item}</div>
                })
            }
          </div>

        </section>
      </section >

    </main >
  );
}
