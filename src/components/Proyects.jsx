import ProyectCard from "./ProyectCard";
import cardsInfo from "../data/Proyects.json"

const Proyects = () => {
  return (
    <section className="w-screen flex flex-col items-center">
      <div className="w-[65%] mb-20">
        <h2 className="text-5xl">Proyectos</h2>
      </div>
      <div className="w-[65%]">
        <div className="grid max-md:grid-cols-1 grid-cols-3 gap-6">
          {cardsInfo.map(ci => (
            (<ProyectCard key={ci.id} id={ci.id} name={ci.name} description={ci.shortDescription} tech={ci.tech} links={ci.links} />)
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyects;