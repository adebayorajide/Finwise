import {useState, useEffect} from 'react'
import Splashscreen from "../splashscreen/Splashscreen"
import Launch from "../launch/Launch"

const Welcome = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timerDataFetch = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 4000);
        };

        timerDataFetch();
    }, []);
    
    return (
        isLoading ? (<Splashscreen />) : (<Launch />) 
      );
}

export default Welcome