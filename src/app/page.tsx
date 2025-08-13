import Image from "next/image";

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Javascript", icon: "/assets/js.png" },
      { name: "Typescript", icon: "/assets/ts.png" },
      { name: "Node.js", icon: "/assets/nodejs.png" },
      { name: "Golang", icon: "/assets/go.png" },
      { name: "Nestjs", icon: "/assets/nestjs.png" },
      { name: "Fastify", icon: "/assets/fastify.png" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "Redis", icon: "/assets/redis.png" },
      { name: "Mysql", icon: "/assets/mysql.png" },
      { name: "Postgresql", icon: "/assets/postgresql.png" },
      { name: "Mongodb", icon: "/assets/mongodb.png" },
      { name: "Influxdb", icon: "/assets/influxdb.png" }
    ]
  },
  {
    category: "Monitoring & Debugging",
    items: [
      { name: "Grafana", icon: "/assets/grafana.png" },
      { name: "OpenTelemetry", icon: "/assets/open-telemetry.png" },
      { name: "OpenSearch", icon: "/assets/open-search.png" },
      { name: "GrayLog", icon: "/assets/graylog.jpg" },
      { name: "Signoz", icon: "/assets/signoz.png" },
    ]
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Docker", icon: "/assets/docker.png" },
      { name: "KrakenD", icon: "/assets/krakend.png" },
      { name: "CI/CD", icon: "/assets/github-actions.png" },
      { name: "Git", icon: "/assets/git.png" },
      { name: "Linux", icon: "/assets/linux.png" },
    ]
  },
  {
    category: "Architecture",
    items: [
      { name: "Domain-Driven-Design", icon: "" },
      { name: "Microservices", icon: "" },
      { name: "Restful", icon: "" },
      { name: "System Design", icon: "" },
      { name: "Onion Arch", icon: "" },
      { name: "Vertical Slice Arch", icon: "" },
    ]
  },
  {
    category: "Messaging & Brokers",
    items: [
      { name: "RabbitMQ", icon: "/assets/rabbitmq.png" },
      { name: "NATS", icon: "/assets/n.png" },
      { name: "KAFKA", icon: "/assets/apache.png" },
    ]
  }
]

export default function Home() {
  return (
    <main className="container relative mx-auto overflow-auto md:p-16 p-4 bg-[#ffffff] text-[#000000]">

      <section className="flex flex-col items-center space-y-8">

        {/* Header */}
        <div className="flex items-stretch justify-between p-2 w-3xl">

          <div className="flex flex-col space-y-1.5">
            {/* General */}
            <h1 className="text-4xl font-bold">Alireza Rezapour</h1>
            <p className="text-[16px] text-black/80 max-w-max">Software Engineer / Backend Developer focused on Node.j & Golang</p>

            {/* Fact Section */}
            <div className="grid grid-cols-2 text-[15px] gap-2 m-auto">
              <div className="p-1 border-b-2 cursor-pointer">📍 Based in Mashhad, Iran</div>
              <div className="p-1 border-b-2">🎮 Interests: Gaming, Music, Walking</div>
              <div className="p-1 border-b-2">💼 Currently at Hamtapay</div>
              <div className="p-1 border-b-2">🛠 Always chasing better code</div>
            </div>

            {/* Link Section */}
            <div className="flex gap-3 mt-auto">
              <button title="Gmail" className="flex items-center border-2 text-black px-4 rounded hover:bg-red-200 duration-300 cursor-pointer">
                <Image
                  src="/assets/gmail.png"
                  height={22}
                  width={22}
                  alt="Gmail"
                />
              </button>

              <button title="Phone" className="flex items-center border-2 text-black px-4 py-2 rounded hover:bg-indigo-200 duration-300 cursor-pointer">
                <Image
                  src="/assets/phone.png"
                  height={22}
                  width={22}
                  alt="Phone"
                />
              </button>

              <button title="LinkedIn" className="flex items-center border-2 text-black px-4 py-2 rounded hover:bg-green-200 duration-300 cursor-pointer">
                <Image
                  src="/assets/linkedin.png"
                  height={22}
                  width={22}
                  alt="LinkedIn"
                />
              </button>

              <button title="Github" className="flex items-center border-2 gap-2 text-black px-4 py-2 rounded hover:bg-fuchsia-200 duration-300 cursor-pointer">
                <Image
                  src="/assets/github.png"
                  height={22}
                  width={22}
                  alt="Github"
                />
              </button>

              <button title="Download CV" className="flex items-center border-2 gap-2 text-black px-4 py-2 rounded hover:bg-amber-200 duration-300 cursor-pointer">
                <Image
                  src="/assets/folder.png"
                  height={22}
                  width={22}
                  alt="CV"
                />
              </button>

              <button title="Medium" className="flex items-center border-2 gap-2 px-4 py-2 rounded hover:bg-blue-200 duration-300 cursor-pointer">
                <Image
                  src="/assets/medium.png"
                  height={22}
                  width={22}
                  alt="Medium"
                />
              </button>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow shadow-gray-700">
            <Image src="/avatar.png" height={200} width={200} alt="Avatar" />
          </div>
        </div>

        {/* About Me */}
        <section className="flex flex-col items-stretch justify-center p-2 w-3xl space-y-1.5 border-gray-600 border-0 border-dashed">
          <h1 className="text-2xl">About Me</h1>
          <p className="text-black/80">
            I’m a backend developer with +2 years of experience designing and delivering scalable, high-performance services. My expertise spans Node.js, Golang, and microservices, with a strong focus on clean architecture, system reliability, and performance optimization. I thrive on solving complex production challenges—whether it’s reducing latency, improving deployment speed, or leading cross-team recovery efforts during outages.
            <br />
            <br />
            I’ve successfully migrated monoliths to microservices, built real-time data pipelines, and authored architecture RFCs that shaped company-wide engineering standards. Beyond coding, I’m passionate about mentoring, improving workflows, and ensuring teams deliver predictably and efficiently.
          </p>
        </section>


        {/* Experience */}
        <section className="flex flex-col items-stretch justify-center p-2 w-3xl space-y-1.5 border-gray-600 border-0 border-dashed">
          <h1 className="text-2xl">Work Experience</h1>

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
        <section className="flex flex-col gap-3 justify-center p-2 w-3xl space-y-1.5 border-gray-600 border-0 border-dashed">
          <h1 className="text-2xl">Skills</h1>

          {
            skills.map(({ category, items }, i) => {
              return (
                <div key={i} className="flex flex-col text-sm space-y-1.5">
                  <p className="text-[17px]">▪️{category}:</p>

                  <div className="flex flex-wrap gap-2">

                    {
                      items.map((item, i) => {
                        const hasIcon = item.icon !== "";

                        return (
                          <span key={i} className="flex p-2 gap-2 bg-gray-900 text-white rounded hover:bg-gray-500 duration-150 cursor-pointer">
                            {
                              hasIcon ?
                                <Image height={20} width={20} alt={item.name} src={item.icon} />
                                : ""
                            }
                            <p>{item.name}</p>
                          </span>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </section>
      </section >

    </main >
  );
}
