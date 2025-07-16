import { time } from 'console';
import React, { useLayoutEffect, useMemo, useState } from 'react'

const useLocalTime = () => {
    const [currentDate, setCurrentDate] = useState<Date | null>(null)
    const currentDateString = useMemo(() => {
        return currentDate === null ? "" : `${currentDate.getUTCHours() + 1} : ${currentDate.getUTCMinutes() < 10 ? '0' + currentDate.getUTCMinutes()  : currentDate.getUTCMinutes() } (+1 GMT)`
    }, [currentDate])

    useLayoutEffect(() => {
        setCurrentDate(new Date());

        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);

        return () => {clearInterval(timer);}
    }, [])
  return currentDateString;
}

export default useLocalTime