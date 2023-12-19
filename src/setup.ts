import "@testing-library/jest-dom";

import { server } from "../mocks/server";
import { beforeAll } from "vitest";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
