const Nav = ({ navColor, mobile, handleSetNavColor }) => {
  return (
    <>
      {!mobile && (
        <a
          href="#inicio"
          className="text-xl gradient-name bg-gradient-to-r from-[#00c8bc] to-blue-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-[#00c8bc]"
        >
          Franco Berlochi
        </a>
      )}
      <nav className="flex lg:gap-8 justify-between max-md:px-4">
        <a
          href="#inicio"
          onClick={() => handleSetNavColor("#inicio")}
          className={
            navColor == "#inicio"
              ? "anchor-line relative text-lg text-cyan-400 max-md:text-[16px]"
              : "anchor-line relative text-lg max-md:text-[16px]"
          }
        >
          inicio
        </a>
        <a
          href="#proyectos"
          onClick={() => handleSetNavColor("#proyectos")}
          className={
            navColor == "#proyectos"
              ? "anchor-line relative text-lg text-cyan-400 max-md:text-[16px]"
              : "anchor-line relative text-lg max-md:text-[16px]"
          }
        >
          Proyectos
        </a>
        <a
          href="#sobremi"
          onClick={() => handleSetNavColor("#sobremi")}
          className={
            navColor == "#sobremi"
              ? "anchor-line relative text-lg text-cyan-400 max-md:text-[16px]"
              : "anchor-line relative text-lg max-md:text-[16px]"
          }
        >
          Sobre mí
        </a>
        <a
          href="#contacto"
          onClick={() => handleSetNavColor("#contacto")}
          className={
            navColor == "#contacto"
              ? "anchor-line relative text-lg text-cyan-400 max-md:text-[16px]"
              : "anchor-line relative text-lg max-md:text-[16px]"
          }
        >
          Contacto
        </a>
      </nav>
    </>
  );
};

export default Nav;