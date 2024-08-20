import Navbar from "./components/Navbar"

import HeroImg from "./assets/hero.webp"

function App() {


  return (
    <section className="bg-bg min-h-screen w-screen p-3 lg:p-6 font-primary">
      <Navbar/>
      <section className="__HERO_CONTAINER__ relative mt-12 w-full h-[720px] z-10">
        <div className="__BACK__ absolute -top-4 left-1/2 -translate-x-1/2 w-[90%] z-[-1] h-full bg-primary/50 rounded-3xl">

        </div>
        <img src={HeroImg} className="h-full w-full object-cover rounded-3xl" alt="" />
        <div className="__OVERLAY__ absolute top-0 left-0 h-full w-full pointer-events-none bg-black/30 rounded-3xl"></div>
        <div className="__ITEMS_CONTAINER__ absolute top-0 left-0 h-full w-full rounded-3xl flex flex-col justify-between items-center lg:flex-row lg:items-end py-12 px-8 lg:px-24">
          <div className="__HEADING_CONTAINER__ text-primary">
            <h1 className="font-secondary text-7xl sm:text-9xl">Chicago</h1>
            <p className="text-3xl">Outdoor Ads</p>
          </div>
          <div className="__ACTION_BTN_CONTAINER__ w-full max-w-72 sm:max-w-sm lg:max-w-sm xl:max-w-xl text-primary rounded-2xl backdrop-blur-sm bg-black/40 px-8 py-8">
            <h2 className="text-3xl">Sales Office</h2>
            <p className="mt-6 text-primary/80">11, North Miwaukee Avenue</p>
            <p className="text-primary/80">Suite 1500</p>
            <p className="text-primary/80">Chicao, IL 60652</p>
            <p className="text-primary/80">777-234-1234</p>
            <a href="#" className="mt-6 w-full bg-primary text-accent font-medium block text-center text-xl rounded-2xl py-3 filter transition-all hover:brightness-90">Contact us</a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default App
