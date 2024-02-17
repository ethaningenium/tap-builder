import { PageWithBricks } from "@/types/Page";
import axios from "axios";

export function GetPage(address: string) {
  return axios.get<PageWithBricks>(
    `https://tap-backend-awiw.onrender.com/page/${address}`
  );
}

export function UpdatePage(token: string, page: PageWithBricks) {
  return axios.put<PageWithBricks>(
    `https://tap-backend-awiw.onrender.com/page`,
    page,
    {
      headers: {
        Authorization: token,
      },
    }
  );
}
