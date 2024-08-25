import {gql} from '@apollo/client'

export const GET_PORTFOLIO = gql`
  query getPortfilo($id: ID){
    portfolio(id: $id){
      _id,
      title,
      company,
      companyWebsite,
      location,
      jobTitle,
      description,
      startDate,
      endDate
    }
  }

`;


export const GET_PORTFOLIOS = gql`
  query getPortfilos{
    portfolios{
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
      }
    }
`;

export const CREATE_PORTFOLIO= gql`
  mutation CreatePortfolio{
    createPortfolio(input:{
      title: "Work in Mansoura",
      company: "WhoKnows",
      companyWebsite: "www.google.com",
      location: "Mansoura, Montana",
      jobTitle: "Housekeeping",
      description: "So much responsibility....Overloaaaaaad",
      startDate: "2021-12-12T23:59Z",
      endDate: "2024-12-12T23:59Z",
    }){
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }

`;

export const UPDATE_PORTFOLIO = gql`
    mutation UpdatePortfolio($id: ID){
      updatePortfolio(id: $id,input:{
        title: "Work in meno",
        company: "WhoKnows",
        companyWebsite: "www.google.com",
        location: "meno, Montana",
        jobTitle: "Housekeeping",
        description: "So much responsibility....Overloaaaaaad",
        startDate: "2021-12-12T23:59Z",
      endDate: "2024-12-12T23:59Z",
      }){
        _id
        title
        company
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }
  `;

export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio($id:ID){
    deletePortfolio(id:$id)
  }

`

export const SIGNUP=gql`
  mutation SignUp(
    $username:String!
    $name:String!
    $avatar:String!
    $email:String!
    $password:String!
    $passwordConfirmation:String!
  ){
    signUp(input:{
      username:$username
      name:$name
      avatar:$avatar
      email:$email
      password:$password
      passwordConfirmation:$passwordConfirmation
    })
  }
`;

export const SIGNIN=gql`
  mutation SignIn(
    $email:String!
    $password:String!
  ){
    signIn(input:{
      email:$email,
      password:$password
    })
  }
`