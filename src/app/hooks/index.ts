import useSWRImmutable from "swr/immutable";
import { getContenfulContent } from "../lib/api";


export const useGetData = () => {
  const { data, error } = useSWRImmutable("/api/content", getContenfulContent);

  return data ? data : error;
};
