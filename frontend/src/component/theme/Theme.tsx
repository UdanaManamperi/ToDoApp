import './Theme.css'
import {useEffect, useState} from "react";
export function Theme() {
    const [mode, setMode] = useState('dark');

    function handleClick() {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        document.querySelector('html')!.setAttribute('data-bs-theme', mode)
    }, [mode]);

    return (
        <span onClick={handleClick}  className="Theme shadow-sm d-inline-block px-2 border mx-2 rounded">
            {mode === 'light' ?
                <i className="bi bi-brightness-high-fill"></i>
                :
                <i className="bi bi-moon-stars-fill"></i>
            }
        </span>
    );
} 