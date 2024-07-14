import { writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

const dayContext = {};
const monthContext = {};
const yearContext = {};

export const createDayContext = () => {
    const dayValue = writable('');

    setContext(dayContext, {
        dayValue,
        setDayValue: (value) => dayValue.set(value)
    });
};
export const createMonthContext = () => {
    const  monthValue= writable('');

    setContext(monthContext, {
        monthValue,
        setMonthValue: (value) => monthValue.set(value)
    });
};

export const createYearContext = () => {
    const  yearValue= writable('');

    setContext(yearContext, {
        yearValue,
        setYearValue: (value) => yearValue.set(value)
    });
};


export const useDayContext = () => getContext(dayContext);

export const useMonthContext = () => getContext(monthContext);

export const useYearContext = () => getContext(yearContext);
