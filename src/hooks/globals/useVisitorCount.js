import { useEffect, useState } from "react";

const ENDPOINT =
    "https://abacus.jasoncameron.dev/hit/kamatedrissa.com/prod";

export function useVisitorCount() {
    const [count, setCount] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;
        fetch(ENDPOINT)
            .then((res) => {
                if (!res.ok) throw new Error("Network error");
                return res.json();
            })
            .then((data) => {
                if (!cancelled) setCount(data.value);
            })
            .catch(() => {
                if (!cancelled) setError(true);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return { count, error };
}
