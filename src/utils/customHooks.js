import React from 'react';
import axios from 'axios';

// /**
//  *
//  * @description Custom hooks for fetching data with error and loading state
//  * @param {String} url
//  * @param {Object} options
//  * @param {*} effectDependencies
//  * @returns {Object}
//  */
// export const useGet = (url, options) => {
//   const [response, setResponse] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(url, options);
//         setResponse(response);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//       }
//     };
//     fetchData();
//   }, [url, options]);
//   return { response, error, isLoading };
// };

// export function useAxios(method, url, params = {}) {
//   const [data, setData] = React.useState([]);
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState(false);

//   function init() {
//     setData([]);
//     setLoading(true);
//     setLoading(false);
//   }

//   const load = React.useCallback(
//     async function () {
//       init();
//       setLoading(true);
//       try {
//         const response = await axios({
//           method: method,
//           url: url,
//           params: {
//             '_start': params.startShowMore,
//             '_end': params.endShowMore
//           }
//         });
//         setData(response);
//       } catch (e) {
//         setError(true);
//       }
//       setLoading(false);
//     },
//     [url, method, params],
//   );

//   return { data, loading, error, load };
// }
