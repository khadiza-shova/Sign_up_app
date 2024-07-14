<script>
    import '../app.css'
    import {createRadioValueContext} from '$lib/RadioContext';

    import {createDayContext} from "$lib/birthContext";
    import {createMonthContext} from "$lib/birthContext";
    import {createYearContext} from "$lib/birthContext";
    

    createRadioValueContext();
    createDayContext();
    createMonthContext();
    createYearContext();
</script>


<main>
        <slot></slot>
</main>