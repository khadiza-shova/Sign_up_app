<script>
    import {useDayContext} from '$lib/birthContext'
    import {useMonthContext} from '$lib/birthContext'
    import {useYearContext} from '$lib/birthContext'
   

    const { setDayValue } = useDayContext();
    const { setMonthValue } = useMonthContext();
    const { setYearValue } = useYearContext();
   

    export let dateOfBirthError;

    const getDay =()=>{
        let numbers = [];
        for(let num=1; num<=31; num++){
            numbers.push(num);
        }
        return numbers;
    }
    const getMonth =()=>{
        let numbers = [];
        for(let num=1; num<=12; num++){
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

    let handleCHange1=(event)=>{
        let selectedOption1=event.target.value;
        setDayValue(selectedOption1);
    } 
    let handleCHange2=(event)=>{
        let selectedOption2=event.target.value;
        setMonthValue(selectedOption2);
    }
    let handleCHange3=(event)=>{
        let selectedOption3=event.target.value;
        setYearValue(selectedOption3);
    }
  


</script>

<style>
    .dateOfBirthmainSection{
    margin-top: 10px;
    margin-bottom: 10px;
}
.dateOfBirthmainSection .label1 ,
.GenderSection .label1{
    font-weight: 600;
}

.dateOfBirthsubSection{
    display: flex;  
    margin-right: 4px;
    margin-top: 5px;
}
.daySection, .monthSection, .yearSection{
    display: flex;
    justify-content: space-between;
    flex-basis: auto;
    border: 2px solid rgb(63, 45, 45);
    width: 33%;
    margin-right: 20px;
}
.yearSection{
    margin-right: 10px;
}
.daySection select{
    margin-left: 230px;
}
.monthSection select{
    margin-left: 208px;
}
.yearSection select{
    margin-left: 192px;

}

/* Date Of Birth Required Field  */
.dateofBirthRequired{
    border: 2px solid red;
    padding: 5px;
    border-radius: 5px;
    width: 50%;
    margin: 15px auto;
    color: red;
    font-size: 17px;
    text-align: center;
}


</style>

<div class="dateOfBirthmainSection">
    <label class="label1" for="date">Date Of Birth </label>

    <div class="dateOfBirthsubSection">
        <div class="daySection">
            <label for="">Day</label>
            <select on:change={handleCHange1}>
                {#each getDay() as number}
                <option value={number}>{number}</option>
                {/each}
            </select>
        </div>
        <div class="monthSection">
            <label for="">Month</label>
            <select on:change={handleCHange2}>
                {#each getMonth() as number}
                    <option value={number}>{number}</option>
                {/each}
            </select>
        </div>
        <div class="yearSection">
            <label for="">Year</label>
            <select on:change={handleCHange3 }>
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
