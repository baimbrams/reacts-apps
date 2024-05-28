import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const DetailPage = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${id}`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("erorr woy", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  return loading ? <Spinner /> : <h1>{jobs.title}</h1>;
};

export default DetailPage;
