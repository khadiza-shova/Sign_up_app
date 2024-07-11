<script>

    export let dateOfBirthError;
    let selectedOption1;
    let selectedOption2;

    const getNumbers =()=>{
        let numbers = [];
        for(let num=1; num<=30; num++){
            numbers.push(num);
        }
        return numbers;
    }

    const getYears =()=>{
        let years=[];
        for(let year =1950; year<=2024 ;year++){
            years.push(year);
        }
        return years;
    }

    selectedOption1 = (event) => {
        selectedValue = event.target.value;
        setSelectValue(selectedValue);
    }
</script>

<div class="dateOfBirthmainSection">
    <label class="label1" for="date">Date Of Birth</label>

    <div class="dateOfBirthsubSection">
        <div class="daySection">
            <label for="">Day</label>
            <select  bind:value={selectedOption1}>
                {#each getNumbers() as number}
                    <option value={number}>{number}</option>
                {/each}
            </select>
        </div>
        <div class="monthSection">
            <label for="">Month</label>
            <select  bind:value={selectedOption2}>
                {#each getNumbers() as number}
                    <option value={number}>{number}</option>
                {/each}
            </select>
        </div>
        <div class="yearSection">
            <label for="">Year</label>
            <select>
                {#each getYears() as year}
                    <option value={year}>{year}</option>
                {/each}
            </select>
        </div>
    </div>
    {#if dateOfBirthError}
    <div class="dateofBirthRequired">
        <p>{dateOfBirthError}</p>
    </div>
    {/if}
</div>
