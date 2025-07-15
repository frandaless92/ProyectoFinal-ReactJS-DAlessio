import { useEffect, useState } from "react";
import { exportarTodosLosServicios } from "../data/services.js";

const useServices = (categoria) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    exportarTodosLosServicios()
      .then((data) => {
        if (categoria) {
          const servicesFilter = data.filter(
            (service) => service.categoria === categoria
          );
          setServices(servicesFilter);
        } else {
          setServices(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoria]);

  return { services, loading };
};

export default useServices;
