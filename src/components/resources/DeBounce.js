import { useEffect } from "react";

const useDebounceEffect = (callback, delay, dependencies) => {
    useEffect(() => {
        const handler = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [callback, delay, ...dependencies]);
};

export default useDebounceEffect;
