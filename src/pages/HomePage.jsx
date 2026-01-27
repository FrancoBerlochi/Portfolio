import yo from '/assets/yo.webp'
import github from '/assets/github.png'
import linkedin from '/assets/linkedin.png'
import insta from '/assets/instagram.png'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Proyects from '../components/Proyects'



const HomePage = () => {


  const [navColor, setNavColor] = useState("#inicio");
  const [mobile, setMobile] = useState(false);

 useEffect (() => {
    if (window.innerWidth < 500) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  },[])

  const handleSetNavColor = (path) => {
    setNavColor(path)
  }
  return (
    <div>
      <div className="w-screen flex justify-center">
        <header className="fixed z-10 lg:flex lg:w-[65%] w-[90vw] lg:justify-between lg:px-24 lg:py-6 py-4  bg-[#333344bf] header rounded-4xl mt-4 border-[#00c8bc] drop-shadow-[1px_2px_4px_rgba(28,157,244,0.29)] border-1">
          <Nav
            navColor={navColor}
            mobile={mobile}
            handleSetNavColor={handleSetNavColor}
          />
        </header>
      </div>
      <main className="overflow-hidden">
        <section className="lg:pt-48 flex flex-col lg:flex-row lg:justify-between justify-around max-md:items-center lg:mx-16 h-screen">
          <div className="mt-50 max-md:mt-24 min-[1700px]:max-[1930px]:ml-70 min-[1600px]:max-[1698px]:ml-58 flex flex-col items-center lg:block">
            <h1 className="text-6xl presentation-text text-center">
              Franco Berlochi
            </h1>
            <h2 className="text-4xl text-cyan-300 mt-2 presentation-text mb-10">
              Full Stack Developer
            </h2>
            <div className='hover:scale-105 w-fit transition-all duration-200'>
              <a href="#proyectos" className='text-2xl bg-[#30d4d5] rounded-xl p-2'>Ver Proyectos</a>
            </div>
            <ul className="flex gap-6 mt-10 presentation-icons ">
              <li className="border-2 border-[#56D7F1] py-3 px-3 rounded-4xl cursor-pointer hover:scale-110 transition-all duration-150 linear">
                <img src={insta} alt="" className="w-6 h-6" />
              </li>
              <li className="border-2 border-[#56D7F1] py-3 px-3 rounded-4xl cursor-pointer hover:scale-110 transition-all duration-150 linear">
                <img src={linkedin} alt="" className="w-6 h-6" />
              </li>
              <li className="border-2 border-[#56D7F1] py-3 px-3 rounded-4xl cursor-pointer hover:scale-110 transition-all duration-150 linear">
                <img src={github} alt="" className="w-6 h-6" />
              </li>
            </ul>
          </div>
          <div className="relative borderRotate max-md:mx-auto lg:mt-10 w-[30vw] h-[30vw] p-[4px] rounded-full mr-32">
            <div className="lg:mr-48 background presentation-img mask-b-from-160 lg:mt-0 rounded-full">
              <img
                src={yo}
                alt=""
                className="w-[25vw] h-[30vw] ml-9 max-md:w-[50vw] max-md:h-[60vw] max-md:ml-4"
              />
            </div>
          </div>
        </section>
        <Proyects />
      </main>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default HomePage;