import NavigationList from './NavigationList'
import SocialIconList from './SocialIconList'

const Portfolio = () => {
  return (
    <div className="h-screen w-screen">
      <div className="mx-auto my-0 flex min-w-[1024px] max-w-7xl gap-x-44 p-24">
        <section className="relative w-2/5 text-left">
          <div className="flex h-full flex-col justify-between">
            <div className="sticky left-0 top-24">
              <h1 className="text-5xl font-bold tracking-tighter">Jeremiah Ceralde</h1>
              <h2 className="mt-3 text-2xl font-semibold tracking-tighter">Front End Developer</h2>
              <p className="mt-4">I code, eat and sleep. Then repeat.</p>

              <div className="my-12 space-y-6">
                <NavigationList />
              </div>
            </div>

            <div>
              <SocialIconList />
            </div>
          </div>
        </section>
        <section className="w-3/5">
          <p id="about" className="text-lg text-gray-400">
            I’m a developer passionate about creating pixel-perfect digital experiences for the web
            that seamlessly blend design and functionality. My focus is on crafting experiences that
            are not only visually appealing but also highly performant and user-friendly.
            <br /> <br />
            Currently, I work as a Front-End Developer at Baguio General Hospital and Medical
            Center. My role involves designing, developing, and maintaining key software modules
            such as the Radiology Module and UCharge. By prioritizing user needs and adhering to
            best practices, I aim to deliver inclusive and efficient systems.
            <br /> <br />
            Over the years, I’ve had the opportunity to work on various projects, including
            websites, Android applications, and specialized software, gaining experience across
            diverse environments and platforms.
            <br /> <br />
            Outside of work, I enjoy riding my motor scooter, exploring new books, and spending
            quality time with my wife and son.
          </p>

          <p id="experience" className="mt-8 text-lg text-gray-400">
            I’m a developer passionate about creating pixel-perfect digital experiences for the web
            that seamlessly blend design and functionality. My focus is on crafting experiences that
            are not only visually appealing but also highly performant and user-friendly.
            <br /> <br />
            Currently, I work as a Front-End Developer at Baguio General Hospital and Medical
            Center. My role involves designing, developing, and maintaining key software modules
            such as the Radiology Module and UCharge. By prioritizing user needs and adhering to
            best practices, I aim to deliver inclusive and efficient systems.
            <br /> <br />
            Over the years, I’ve had the opportunity to work on various projects, including
            websites, Android applications, and specialized software, gaining experience across
            diverse environments and platforms.
            <br /> <br />
            Outside of work, I enjoy riding my motor scooter, exploring new books, and spending
            quality time with my wife and son.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Portfolio
