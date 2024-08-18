const express = require("express");
const next = require("next");
require("dotenv/config");
const port = parseInt(process.env.PORT,10) || 3000
const {buildSchema} = require("graphql");
const {graphqlHTTP} = require("express-graphql");
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const cors = require("cors")
const data = {
  portfolio:[
    {
      _id: "sad87da79",
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016'
    },
    {
      _id: "da789ad1",
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013'
    },
    {
      _id: "sadcxv9",
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011'
    }
  ]
}


app.prepare().then(()=>{
  const server = express();
  server.use(cors());

  const schema = buildSchema(`
      type Portfolio{
        _id:ID
        title:String
        company:String
        companyWebsite:String
        location:String
        jobTitle:String
        description:String
        startDate:String
        endDate:String
      }
      type Query{
        hello:String
        portfolio:Portfolio
        portfolios:[Portfolio]
      }
    `);
    const root ={
      hello:()=> "welcome",
      portfolio:()=>{
        return data.portfolio[0]
      },
      portfolios:()=>{
        return data.portfolio
      }
    }
    server.use('/graphql',graphqlHTTP({
      schema,
      rootValue:root,
      graphiql:true
    }))
  server.all("*",(req,res)=>{
    return handle(req,res);
  });

  server.listen(port,(err)=>{
    if(err){
      throw err;
    }
    console.log(`Server running on port ${port}`)
  })
})