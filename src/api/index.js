export const apiSearch = async (term) =>{
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SEARCH_ENDPOINT}&q=${term}${process.env.REACT_APP_API_DEFAULT_QUERY_VALUES}`);
    const {data, pagination} = await res.json(); 
    return {data, pagination};
  } catch (error) {
    throw error;
  }
}