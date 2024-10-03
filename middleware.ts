import type { NextRequest } from "next/server";
import { refreshToken } from "./components/auth/utils";

export function middleware(request: NextRequest) {
  refreshToken(request);
}

export const config = {
  matcher: ["/api/store", "/api/auth/myself"],
};
