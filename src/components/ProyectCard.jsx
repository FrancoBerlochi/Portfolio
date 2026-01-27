import { Link } from "react-router-dom";
const ProyectCard = ({ id, name, description, tech, links }) => {
  return (
    <div className="flex flex-col gap-4 p-6 min-[1750px]:max-[1921px]:h-[50vh] h-[52vh] bg-[#1b2647] rounded-2xl border border-transparent hover:border-[#08d5d4] transition-all duration-300 ">
      <h2 className="text-2xl">{name}</h2>
      <p className="text-xl text-gray-400 mb-4">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tech.map((e) => (
          <img
            key={e}
            src={e}
            className="bg-[#173854] text-[#08d5d4] w-12 h-12 py-1 px-2 rounded-xl"
          ></img>
        ))}
      </div>

      <div className="flex flex-col mt-auto gap-2">
        <Link
          className="w-full bg-[#18d2d3] text-center text-white rounded-md py-2"
          to={`/${id}`}
        >
          Ver detalles
        </Link>

        <div className="flex justify-between mx-2 gap-4">
          {links.length != 1 && (
            <a
              href={links[0]}
              target="_blanck"
              className="w-full py-2 text-center bg-[#173854] text-[#08d5d4] rounded-md"
            >
              Ver Demo
            </a>
          )}
          <a
            href={links.length != 1 ? links[1] : links[0]}
            target="_blanck"
            className="w-full py-2 text-center border-1 border-[hsl(180,43%,33%)] text-[#08d5d4] rounded-md"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
