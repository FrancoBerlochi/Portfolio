import { useParams } from "react-router-dom";
import Proyects from  "../data/Proyects.json"

const ProyectsDetails = () => {

  const { id } = useParams();
  const project = Proyects.find((p) => p.id === Number(id));

  if (!project) {
    return <div className="text-center mt-20">Proyecto no encontrado</div>;
  }
  return <div>{ project.id}</div>;
};

export default ProyectsDetails;
