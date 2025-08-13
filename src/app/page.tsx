import Image from "next/image";
import Link from "next/link";


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
        <section className="flex flex-col items-stretch justify-center p-2 w-3xl space-y-1.5 border-gray-600 border-0 border-dashed">
          <h1 className="text-2xl">About Me</h1>
          <p className="text-black/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus fugit nobis! Rerum alias dignissimos assumenda atque eligendi rem animi quas ipsam ab? Voluptatem minima pariatur blanditiis, vero necessitatibus nemo?</p>
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
            skills.map(({ category, items }) => {
              return (
                <div className="flex flex-col text-sm space-y-1.5">
                  <p className="text-[17px]">▪️{category}:</p>

                  <div className="flex flex-wrap gap-2">

                    {
                      items.map((item) => {
                        const hasIcon = item.icon !== "";

                        return (
                          <span className="flex p-2 gap-2 bg-gray-900 text-white rounded hover:bg-gray-500 duration-150 cursor-pointer">
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
