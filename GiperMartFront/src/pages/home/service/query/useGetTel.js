import { useQuery } from "@tanstack/react-query";
import request from "../../../../config/request";

export const useGetTel = () => {
  return useQuery({
    queryKey: ["phone"],
    queryFn: () =>
      request
        .get(`/tel`)
        .then((res) => res.data)
        .catch((e) => e),
  });
};
