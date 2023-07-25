import React from 'react'
import { useCountdown } from './useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

export default function CountDownViewer({targetDate}) {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return (
            <div className="expired-notice">
                <span>Expired!!!</span>
                <p>Please select a future date and time.</p>
            </div>
        );
    } else {
        return (
            <div className="show-counter">
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </div>
        );
    }
}
