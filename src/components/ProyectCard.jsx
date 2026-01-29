import { Link } from "react-router-dom";
const ProyectCard = ({ id, name, description, img, tech, links }) => {
  return (
    <div className="flex flex-col gap-4 p-6 min-[1750px]:max-[1921px]:h-[78vh] h-[82vh] bg-[#1b2647] rounded-2xl border border-transparent  transition-all duration-300 hover:border-[#08d5d4] hover:scale-[1.04] mb-6">
      <div className="min-[1750px]:max-[1921px]:w-85 min-[1750px]:max-[1921px]:h-85 h-75 w-70 bg-red-200">
        <img src={img[0]} alt="" className="object-cover w-full h-full" />
      </div>
      <h2 className="text-2xl">{name}</h2>
      <p className="text-xl text-gray-400 mb-4">{description}</p>
      <div className="flex gap-2 flex-wrap overflow-y-auto techScroll">
        {tech.map((e) => (
          <img
            key={e}
            src={e}
            className="bg-[#173854] w-12 h-12 py-1 px-2 rounded-xl"
          ></img>
        ))}
      </div>

      <div className="flex flex-col gap-2">
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
