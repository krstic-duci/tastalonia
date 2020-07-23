import React from 'react';
import axios from 'axios';

/**
 *
 * @description Custom hooks for fetching data with error and loading state
 * @param {String} url
 * @param {Object} options
 * @param {*} effectDependencies
 * @returns {Object}
 */
export const useGet = (url, options, effectDependencies) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, options);
        setResponse(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [effectDependencies]);
  return { response, error, isLoading };
};
