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


<style>
    /* Gender Section CSS  */
.GenderSection{
    margin-top: 20px;
      /* display: flex; */
}
.genderMain{
    display: flex;
    margin-top: 15px;
}
.genderSubSection{
    padding: 5px;
}
.GenderSection .genderSubSection{
    display: flex;
    justify-content: space-between;
    width: 33%;
    border: 1px solid black;
    margin-right: 20px;
}

</style>


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
