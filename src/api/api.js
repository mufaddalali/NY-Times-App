import { useEffect, useState } from "react";
import axios from "axios";
export const Api = () => {
  const [data, setdata] = useState([]);
  const apiKey = "uxcl4IkR3BAyo7slMioBeGCv1FLnAiAy";
  const api = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + apiKey;
  useEffect(() => {
    const fetcharticle = async () => {
      try {
        const response = await axios.get(api);
        setdata(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetcharticle();
  }, [api]);

  return { data };
};
