import { useQuery } from "@tanstack/react-query";
import request from "../../../../config/request";

export const useGeLaptop = () => {
  return useQuery({
    queryKey: ["laptop-2"],
    queryFn: () =>
      request
        .get(`/laptop`)
        .then((res) => res.data)
        .catch((e) => e),
  });
};
