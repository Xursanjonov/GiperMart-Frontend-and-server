import { useQuery } from "@tanstack/react-query";
import request from "../../../../config/request";

export const useGetBrends = () => {
  return useQuery({
    queryKey: ["homiylar"],
    queryFn: () =>
      request
        .get("/homiylar")
        .then((res) => res.data)
        .catch((error) => error),
  });
};
