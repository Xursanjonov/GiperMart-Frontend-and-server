import { useQuery } from "@tanstack/react-query";
import request from "../../../../config/request";

export const useGetAksiya = () => {
  return useQuery({
    queryKey: ["aksiya"],
    queryFn: () =>
      request
        .get("/aksiya")
        .then((res) => res.data)
        .catch((e) => e),
  });
};
