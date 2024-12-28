import { http, HttpResponse } from "msw";

import { roles } from "./data";

export const handlers = [
  http.get("http://joe-burton.com/api/work", () => {
    return HttpResponse.json(roles);
  }),
];
