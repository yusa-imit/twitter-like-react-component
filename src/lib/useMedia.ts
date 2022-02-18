import { useEffect, useState } from 'react';
import { mediaQuery, availableQueryName, queryInterface } from './media';

export default function useMedia(query?: queryInterface): availableQueryName {
    const [width, setWidth] = useState<number>(0);
    const [media, setMedia] = useState<availableQueryName>('sm');
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
        console.log(width);
        for(const key of Object.keys(calculationQuery)){
            if (width >= calculationQuery[key as keyof typeof calculationQuery]) {
                setMedia(key as keyof typeof calculationQuery);
            }
        }
        return () => window.removeEventListener('resize', handle);
    });
    return media;
}
