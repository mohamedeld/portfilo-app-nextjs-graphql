import { client } from '@/pages/_app';
import {gql, useMutation} from '@apollo/client'

async function authenticatedUser(email,password){
  try{
    const SIGNIN = gql`
    mutation SignIn($email:String!,$password:String!){
      signIn(input:{
        email:$email,
        password:$password
      }){
        _id
        username
        name 
        email
        avatar
        role
      }
    }
  `;
  const { data } = await client.mutate({
    mutation: SIGNIN,
    variables: { email, password },
  });
 
  console.log("data",data)
  if(data?.signIn){
    return data?.signIn
  }
  }catch(error){
    console.error("Authentication error:", error);
    throw new Error('Invalid credentials'); // Handle errors appropriately
  }
  return null;

}

export default authenticatedUser;