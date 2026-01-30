const Contact = () => {
  return (
    <section
      className="w-screen pt-30 flex flex-col items-center"
      id="contacto"
    >
      <h2 className="text-5xl w-[65%] mb-4">Contacto</h2>
      <p className="text-xl text-gray-300 w-[65%]">
        ¿Querés trabajar conmigo?{" "}
        <span className="text-[#08d5d4]">Hablemos!</span>
      </p>
      <div className="flex w-[65%] mt-20 justify-between px-40">
        <div className="flex gap-4">
          <img
            src="/assets/github.png"
            className="w-14 h-14 bg-[#173854] rounded-2xl p-1"
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-gray-300">Github</p>
            <a
              href="https://github.com/FrancoBerlochi"
              target="_blank"
              className="text-[#08d5d4]"
            >
              Franco-Berlochi-Github
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <img
            src="/assets/linkedin.png"
            alt=""
            className="w-14 h-14 bg-[#173854] rounded-2xl p-1"
          />
          <div className="flex flex-col">
            <p className="text-gray-300">Linkedin</p>
            <a
              href="https://www.linkedin.com/in/franco-berlochi-programador"
              target="_blank"
              className="text-[#08d5d4]"
            >
              Franco-Berlochi-Linkedin
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <img
            src="/assets/email.svg"
            alt=""
            className="w-14 h-14 bg-[#173854] rounded-2xl p-1"
          />
          <div className="flex flex-col">
            <p className="text-gray-300">CV</p>
            <a
              href="/cv/Franco_Berlochi_CV.pdf"
              download
              className="text-[#08d5d4]"
            >
              Franco-Berlochi-CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;