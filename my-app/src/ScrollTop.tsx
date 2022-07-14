import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
    Scroll Top Component  
*/

export function ScrollTop() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [location]);
    
    return null;
}
