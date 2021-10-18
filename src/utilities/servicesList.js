import { useEffect, useState } from "react"

const useServicesList = () => {
    const [services, setService] = useState({});
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    
    return { services, setService };
}

export default useServicesList;