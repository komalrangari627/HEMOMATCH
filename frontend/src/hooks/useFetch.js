import { useEffect, useState } from "react";

function useFetch(apiFunction) {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchData() {

            try {

                const res = await apiFunction();

                setData(res.data);

            }

            catch (err) {

                setError(err);

            }

            finally {

                setLoading(false);

            }

        }

        fetchData();

    }, [apiFunction]);

    return {

        data,

        loading,

        error

    };

}

export default useFetch;