import { useQuery } from "@tanstack/react-query";
import { Data } from "../types";

export const useData = (fetch: () => Promise<Data>, key: string) => {
  const { data, isLoading, isError } = useQuery<Data, Error>({
    queryKey: [key],
    queryFn: fetch,
    staleTime: 1 * 60 * 1000, // 1 minute
  });

  return { data, isLoading, isError }
}