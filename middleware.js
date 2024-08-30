import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req,res){
  const {origin,pathname} = req.nextUrl;
  const session = await getToken({
    req,
    secret:process.env.JWT_SECRET,
    secureCookie:process.env.NODE_ENV === 'production'
  })
  console.log("sess",session)
  console.log("session ",session)
  if(pathname === '/'){
    if(!session){
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`);
    }
  }
  if(pathname === '/login'){
    if(session){
      return NextResponse.redirect(`${origin}`)
    }
  }

}