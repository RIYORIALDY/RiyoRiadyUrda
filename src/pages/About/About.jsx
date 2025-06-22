import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Material Handler, Student, Trader, Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Riyo Rialdy Urda, a private employee in the field of Hendler Materials
                and logistics who specializes in creating innovative solutions 
                hat are easy to implement in the field.{" "}
                <span className="font-bold text-white">
                  As someone in the Receiving department
                </span>
                , I'am dedicated to maintaining stock on hand in the warehouse.
              </p>
              <p className="text-white">
                My focus is to receive all incoming components and
                maintain the quality and quantity in accordance with the company's procedures,
                and enter them into the stock hand in the system. Currently, I am expanding my expertise 
                in the field of Data Science to grow as a Data Science I am studying at Cakrawala University in the Data Science Department.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'am a lifelong learner and innovator, driven by the desire to 
                    contribute to the developer community with new ideas and 
                    tools that provide real value. As a learner as well as a 
                    worker, I push the boundaries of frameworks to empower 
                    developers around the world.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Riyo Rialdy Urda, Material Handler & Student
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Cakrawala University</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
