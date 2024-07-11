<script>
    import { useRadioValueContext } from "$lib/RadioContext";

    const { setRadioValue } = useRadioValueContext();

    export let radioError;
    let selectedValue = "";

    const handleChange = (event) => {
        selectedValue = event.target.value;
        setRadioValue(selectedValue);
    };
</script>

<div class="GenderSection">
    <label for="" class="label1"
        >Please Choose a Gender .You can change who can see this later</label
    >
    <br />
    <div class="genderMain">
        <div class="genderSubSection">
            <label for="">Female</label>
            <input
                type="radio"
                name="gender"
                value="Female"
                on:change={handleChange}
            />
        </div>
        <div class="genderSubSection">
            <label for="">Male</label>
            <input
                type="radio"
                name="gender"
                value="Male"
                on:change={handleChange}
            />
        </div>
        <div class="genderSubSection">
            <label for="">Custome</label>
            <input
                type="radio"
                name="gender"
                value="Custome"
                on:change={handleChange}
            />
        </div>
    </div>

    {#if radioError}
        <div class="emailRequired">
            <p>{radioError}</p>
        </div>
    {/if}
</div>
