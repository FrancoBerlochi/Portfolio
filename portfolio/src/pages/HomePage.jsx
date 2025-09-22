import yo from '../assets/yo.webp'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import { useState } from 'react'


const HomePage = () => {
  const [navColor, setNavColor] = useState("#inicio");
  const handleSetNavColor = (path) => {
    setNavColor(path)
  }
  return (
    <div>
      <header className="flex justify-between px-24 py-6  bg-[#334]">
        <a
          href="#inicio"
          className="text-xl gradient-name bg-gradient-to-r from-cyan-300 to-blue-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400"
        >
          Franco Berlochi
        </a>
        <nav className="flex gap-8">
          <a
            href="#inicio"
            onClick={() => handleSetNavColor("#inicio")}
            className={
              navColor == "#inicio"
                ? "anchor-line relative text-lg text-cyan-400"
                : "anchor-line relative text-lg"
            }
          >
            inicio
          </a>
          <a
            href="#proyectos"
            onClick={() => handleSetNavColor("#proyectos")}
            className={
              navColor == "#proyectos"
                ? "anchor-line relative text-lg text-cyan-400"
                : "anchor-line relative text-lg"
            }
          >
            Proyectos
          </a>
          <a
            href="#sobremi"
            onClick={() => handleSetNavColor("#sobremi")}
            className={
              navColor == "#sobremi"
                ? "anchor-line relative text-lg text-cyan-400"
                : "anchor-line relative text-lg"
            }
          >
            Sobre mí
          </a>
          <a
            href="#contacto"
            onClick={() => handleSetNavColor("#contacto")}
            className={
              navColor == "#contacto"
                ? "anchor-line relative text-lg text-cyan-400"
                : "anchor-line relative text-lg"
            }
          >
            Contacto
          </a>
        </nav>
      </header>
      <main>
        <section className=" mt-32 flex justify-between mx-16">
          <div className="mt-56 ml-46">
            <h1 className="text-6xl">Franco Berlochi</h1>
            <h2 className="text-4xl text-cyan-300 mt-2">
              Full Stack Developer
            </h2>
            <ul className="flex gap-6 mt-6">
              <li className="border-2 border-[#56D7F1] py-3 px-3 rounded-4xl">
                <img src={insta} alt="" className="w-6 h-6" />
              </li>
              <li className="border-2 border-[#56D7F1] py-3 px-3 rounded-4xl">
                <img src={linkedin} alt="" className="w-6 h-6" />
              </li>
              <li className="border-2 border-[#56D7F1] py-3 px-3 rounded-4xl">
                <img src={github} alt="" className="w-6 h-6" />
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-cyan-300 to-blue-300 mr-48 background">
            <img src={yo} alt="" className="w-[25vw] h-[31vw] ml-9" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;