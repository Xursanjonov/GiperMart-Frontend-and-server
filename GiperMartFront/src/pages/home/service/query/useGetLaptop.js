import { useQuery } from "@tanstack/react-query";
import request from "../../../../config/request";

export const useGetLaptop = () => {
  return useQuery({
    queryKey: ["laptop"],
    queryFn: () =>
      request
        .get("/laptop")
        .then((res) => res.data)
        .catch((e) => e),
  });
};
