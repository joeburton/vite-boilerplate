import { http, HttpResponse } from "msw";

// import { todos } from "./data";

export const handlers = [
  http.get("http://joe-burton.com/api/source", () => {
    return HttpResponse.json([
      { role: "Software Enginner" },
      { role: "BA" },
      { role: "QE" },
    ]);
  }),
];
