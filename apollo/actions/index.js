import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PORTFOLIO, DELETE_PORTFOLIO, GET_PORTFOLIOS, SIGNIN, UPDATE_PORTFOLIO } from "../queries";

export const useGetPortfolios = () => useQuery(GET_PORTFOLIOS);

export const useCreatePortfolio = () => useMutation(CREATE_PORTFOLIO, {
  update(cache, { data: { createPortfolio } }) {
    const data = cache.readQuery({ query: GET_PORTFOLIOS });

    cache.writeQuery({
      query: GET_PORTFOLIOS,
      data: { portfolios: [...data?.portfolios, createPortfolio] }
    })
  },
  refetchQueries: [{ query: GET_PORTFOLIOS }],
});
export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO, {
  refetchQueries: [{ query: GET_PORTFOLIOS }],
})


export const useDeletePortfolio = () => useMutation(DELETE_PORTFOLIO,{
  refetchQueries: [{ query: GET_PORTFOLIOS }],
})

export const useSignIn = ()=> useMutation(SIGNIN);