import { useEffect, useState } from "react";
import { exportarServicioPorId } from "../data/services.js";

const useService = (serviceId) => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    exportarServicioPorId(serviceId)
      .then((data) => {
        setService(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { service, loading };
};

export default useService;
