import useSWR from "swr";
import axios from "axios";

const { PUBLIC_URL } = process.env; // envs

// fetcher
const fetcher = (url: string) => axios.get(url).then(res => res);

// use load
function useLoad(url: string) {
  const { data, mutate, error } = useSWR(`${PUBLIC_URL}${url}`, fetcher);

  const loading = !data && !error;

  return {
    loading,
    error,
    mutate,
    request: data,
  };
}

export default useLoad;