const AboutMe = () => {
  return (
    <section className="w-screen flex flex-col items-center pt-40" id="sobremi">
      <h2 className="text-5xl w-[65%] max-md:text-center">Sobre Mí</h2>
      <h3 className="text-gray-400 text-[18px] mt-4 mb-8 w-[65%] max-md:text-center">
        Mi trayectoria y habilidades
      </h3>
      <div className="flex w-[65%] justify-between gap-12 max-md:flex-col max-md:w-[90%]">
        <div className="flex flex-col gap-6 text-xl w-[50%] max-md:w-full max-md:space-y-6">
          <p className="leading-relaxed">
            En este post quiero hablarte de la importancia que tiene el
            escribir, maquetar y organizar correctamente la página ‘Sobre mí’ de
            tu web.
          </p>
          <p className="leading-relaxed">
            Siguiendo con la serie de posts sobre la creación de una web, en la
            que podrás aprender a diseñar la página de inicio, la página de
            servicios, la página de contacto y una landing page, hoy te voy a
            hablar de una de las páginas más importantes de una web pero, a la
            vez, una de las que menos atención recibe habitualmente: la página
            ‘Sobre mí’, ‘Acerca de mí’, ‘About’ o llámala X. En páginas web
            corporativas también se le llama ‘Sobre nosotros’, ‘Nuestra
            historia’ o cosas similares.
          </p>
        </div>
        <div className="flex flex-col w-[55%] max-md:w-[90%] max-md:pl-10 min-[1460px]:max-[1700px]:pl-10  pl-20 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#18d2d3] text-xl">Frontend</span>
            <ul className="flex gap-3 text-[#08d5d4] flex-wrap text-[18px]">
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">Html</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">Css</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">Js</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">React</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">NextJS</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">TypeScript</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#18d2d3] text-xl">Backend</span>
            <ul className="flex gap-3 text-[#08d5d4] flex-wrap text-[18px]">
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">.NET8</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">
                Entity Framework
              </li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">C#</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">Supabase</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">Sqlite</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#18d2d3] text-xl">Herramientas</span>
            <ul className="flex gap-3 text-[#08d5d4] flex-wrap text-[18px]">
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">Git</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">Github</li>
              <li className="bg-[#173854] rounded-md px-2 py-1 hover:scale-110">Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
