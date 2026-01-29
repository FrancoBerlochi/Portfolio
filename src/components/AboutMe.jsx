const AboutMe = () => {
  return (
    <section className="w-screen flex flex-col items-center pt-40" id="sobremi">
      <h2 className="text-5xl w-[65%]">Sobre Mí</h2>
      <h3 className="text-gray-400 text-[18px] mt-4 mb-8 w-[65%]">
        Mi trayectoria y habilidades
      </h3>
      <div className="flex w-[65%] justify-between gap-12">
        <div className="flex flex-col gap-6 text-xl w-[50%]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            assumenda, hic maiores similique dolor deleniti excepturi rem
            expedita eveniet quia iure voluptas officia? Veritatis magni maiores
            ex animi, dolorum quae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            voluptatibus tenetur eligendi possimus harum quisquam totam
            inventore atque adipisci placeat at. Quae autem error, in ratione
            quia, illo aperiam asperiores architecto assumenda commodi rerum
            molestiae mollitia veniam hic dicta molestias suscipit quis! Unde
            officia nobis nostrum velit exercitationem. Alias praesentium
            nostrum et est atque optio reiciendis porro aspernatur tempora quae?
          </p>
        </div>
        <div className="flex flex-col w-[55%] pl-20 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#18d2d3]">Frontend</span>
            <ul className="flex gap-3 text-[#08d5d4]">
              <li className="bg-[#173854] rounded-md px-2 py-1">Html</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">Css</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">Js</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">React</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">NextJS</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">TypeScript</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#18d2d3]">Backend</span>
            <ul className="flex gap-3 text-[#08d5d4]">
              <li className="bg-[#173854] rounded-md px-2 py-1">.NET8</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">
                Entity Framework
              </li>
              <li className="bg-[#173854] rounded-md px-2 py-1">C#</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">Supabase</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">Sqlite</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#18d2d3]">Herramientas</span>
            <ul className="flex gap-3 text-[#08d5d4] ">
              <li className="bg-[#173854] rounded-md px-2 py-1">Git</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">Github</li>
              <li className="bg-[#173854] rounded-md px-2 py-1">Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
