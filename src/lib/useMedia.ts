import { useEffect, useState } from 'react';
import { mediaQuery, queryInterface } from './media';
import { availableQueryName } from './type/queryType';

export default function useMedia(query?: queryInterface): availableQueryName {
    const [width, setWidth] = useState<number>(0);
    const [media, setMedia] = useState<availableQueryName>('xs');
    const [calculationQuery, setCalculationQuery] = useState<queryInterface>(
        query ? query : mediaQuery
    );
    useEffect((): ()=>void => {
        setCalculationQuery(query ? query : mediaQuery);
        function handle(): void {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handle);
        handle();
        console.log(window.innerWidth);
        for(const key of Object.keys(calculationQuery)){
            if (width >= calculationQuery[key as keyof typeof calculationQuery]) {
                setMedia(key as keyof typeof calculationQuery);
            }
        }
        return () => window.removeEventListener('resize', handle);
    }, [query, calculationQuery, width]);
    console.log(width);
    console.log(media);
    return media;
}
