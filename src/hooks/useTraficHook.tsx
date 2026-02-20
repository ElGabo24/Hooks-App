import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

// type TrafficLightColor = 'red' | 'yellow' | 'green'
type TrafficLightColor = keyof typeof colors

export const useTraficHook = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');

    const [countdown, setCountdown] = useState(5);

    // Countdown Effect
    useEffect(() => {
        if (countdown == 0) return;

        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, [countdown]);

    // Change light color effect
    useEffect(() => {

        if (countdown > 0) return;

        if (countdown == 0) {
            setCountdown(5);

            if (light == 'red') {
                setLight('green');
                return;
            }

            if (light == 'yellow') {
                setLight('red');
                return;
            }

            if (light == 'green') {
                setLight('yellow');
                return;
            }
        }
    }, [countdown, light])

    return {
        // Props
        light,
        countdown,
        colors,

        // Computed
        percentage: (countdown / 5) * 100

        // Methods

    }
}
