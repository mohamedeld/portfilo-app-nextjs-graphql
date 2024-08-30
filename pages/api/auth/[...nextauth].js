import authenticatedUser from "@/apollo/actions/authenticatedUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name:'Credentials',
      credentials: {
        username: { label: "email", type: "email", placeholder: "email@.com" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials,req){
        const { email,password } = credentials;
        
        const user = await authenticatedUser(email,password);
        if(user){
          
          return user;
        }else{
          throw new Error('Invalid credentials'); // Handle invalid credentials
        }
      }
    })
    // ...add more providers here
  ],
  debug:true,
  callbacks:{
    async jwt({token,user}){
      if (user) {
        token.user = user; // Store user data in the token
      }
      return token
    },
    async session({session,token}){
      session.user = token.user;
      return session
    },
  },
  secret: process.env.JWT_SECRET,
  session:{
    strategy:'jwt'
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
}

export default (req,res)=> NextAuth(req,res,authOptions)