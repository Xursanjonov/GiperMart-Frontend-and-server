import { useQuery } from "@tanstack/react-query";
import request from "../../../../config/request";

export const usePostTel = (data) => {
  return useQuery({
    queryKey: ["tel-post"],
    queryFn: () => {
      request
        .post(`/tel`, data)
        .then((res) => res.data)
        .catch((rej) => rej);
    },
  });
};
