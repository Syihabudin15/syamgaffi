import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { IUser } from "../IInterface";

const secretKey = new TextEncoder().encode(
  process.env.APP_AUTH_KEY || "secret"
);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("60 minute from now")
    .sign(secretKey);
}

export async function decrypt(params: string): Promise<any> {
  const { payload } = await jwtVerify(params, secretKey, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function signIn(user: IUser) {
  const expires = new Date(Date.now() + 3600 * 1000);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires });
}

export async function signOut() {
  cookies().set("session", "", { expires: new Date(0) });
}
export async function getSession(): Promise<IUser | null> {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  let result: IUser = await decrypt(session);
  return result;
}

export async function refreshToken(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return Response.redirect(new URL("/auth", request.url));
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 3600 * 1000);

  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    expires: parsed.expires,
  });
  return res;
}
