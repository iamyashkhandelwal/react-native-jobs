import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { mockJobDetailsData, mockSearchData } from '../mock-data';

const useFetch = (endPoint, query) => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '142418cb1bmshcc92c35f994d28bp196434jsn717adee94e14',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    // params: {
    //   query: 'Python developer in Texas, USA',
    //   page: '1',
    //   num_pages: '1'
    // },
    params: {...query},
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      // const response = await axios.request(options);
      return new Promise((res, rej) => {
        console.log('endPoint -- ', endPoint);
        setTimeout(() => {
          if(endPoint === 'search') res(mockSearchData);
          else if(endPoint === 'job-details') res(mockJobDetailsData);
        }, 1500)
      })
    } catch (error) {
      setError(error);
      alert('There is an error while fetching the data!')
    } finally {
      // setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData().then(res => {
      setData(res);
      setIsLoading(false);
    }).catch(error => setError(error))
    .finally(() => setIsLoading(false));
  }, []);

  const refetch = () => {
    fetchData();
  }

  return { data, isLoading, error, refetch }
}

export default useFetch;