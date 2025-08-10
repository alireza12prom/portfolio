import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#151b20] text-[#00ff99]">

      <div className="flex items-stretch gap-8 h-[500px] bg-[#222b35] border-2 border-gray-500 overflow-hidden rounded-2xl shadow-2xl">

        {/* Description Section */}
        <div className="flex flex-col  h-full gap-4 p-3">
          <h1 className="text-3xl">Alireza Rezapour</h1>

          <h3>Software Engineer</h3>
          {/* 
          <div className="flex items-center gap-2">
            <Image
              src="/location-pin-icon.png"
              height={22}
              width={22}
              alt="Location Pin"
            />

            <div className="text-base">Iran</div>
          </div> */}

          <div className="text-base text-blue-200 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptate quae laborum quibusdam, corporis laudantium.
          </div>


          {/* Link Section */}
          <div className="flex justify-center mt-auto gap-8 text-blue-400">

            <div className="flex items-center gap-2">
              <Image
                src="/gmail-icon.png"
                height={22}
                width={22}
                alt="Location Pin"
              />

              <Link href={""} className="underline">
                <div className="text-base">Gmail</div>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/linkedin-icon.png"
                height={22}
                width={22}
                alt="Location Pin"
              />

              <Link href={""} className="underline">
                <div className="text-base">Linkedin</div>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/github-icon.png"
                height={22}
                width={22}
                alt="Location Pin"
              />

              <Link href={""} className="underline">
                <div className="text-base">Github</div>
              </Link>
            </div>
          </div>

        </div>

        {/* Avatar Section */}
        <div className="border-0">
          <Image
            src="/avatar.png"
            height={400}
            width={400}
            alt="Avatar"
          />
        </div>

      </div>

    </main >
  );
}
