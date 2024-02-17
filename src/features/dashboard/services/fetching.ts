import axios from "axios";
import { PageWithBricks } from "@/types/Page";

export function GetPages(token: string) {
  return axios.get<PageWithBricks[]>(
    "https://tap-backend-awiw.onrender.com/page",
    {
      headers: {
        Authorization: token,
      },
    }
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

export function AddPage(token: string, page: PageWithBricks) {
  return axios.post<PageWithBricks>(
    `https://tap-backend-awiw.onrender.com/page`,
    page,
    {
      headers: {
        Authorization: token,
      },
    }
  );
}
