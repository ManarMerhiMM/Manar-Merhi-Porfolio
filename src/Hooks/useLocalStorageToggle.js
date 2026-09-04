import { useState, useEffect } from 'react';

function useLocalStorageToggle(key, fallbackVal) {
    const [state, setState] = useState(() => {
        try {
            return JSON.parse(window.localStorage.getItem(key) || String(fallbackVal))
        } catch {
            return fallbackVal;
        }
    });

    const toggle = () => {
        setState(st => !st);
    }

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, toggle]
}


export default useLocalStorageToggle;