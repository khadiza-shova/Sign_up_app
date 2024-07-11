import { writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

const RadioValueContext = {};

export const createRadioValueContext = () => {
    const radioValue = writable('');

    setContext(RadioValueContext, {
        radioValue,
        setRadioValue: (value) => radioValue.set(value)
    });
};

export const useRadioValueContext = () => getContext(RadioValueContext);
