<script>
    import Gender from '../Components/Gender/+page.svelte'
    import DateOfBirth from '../Components/DataOfBirth/+page.svelte'
    import { useRadioValueContext } from '$lib/RadioContext';

    
   
    const { radioValue } = useRadioValueContext();

    let firstName="";
    let sureName="";
    let pass="";
    let email ="";
    let emailError ="";
    let radioError="";
    let dateOfBirthError="";
    let dateOfBirth="";
    export let selectedOption1;
    export let selectedOption2;




    const validateEmail =()=>{
       if(!email){
        emailError ="Enter Mobile Number and Email Address";
        return false;
       }
       emailError="";
    }

    const validateGender =()=>{
        if(!$radioValue){
            radioError="Please Select an Option";
            return false;
        }
        radioError="";
     }

     const validatedateOfBirth=()=>{
        if(selectedOption1 == 0 && selectedOption2 ==0){
            dateOfBirthError="Invalid Data Please Select a Valid Data";

            return false;
        }
        dateOfBirthError="";

     }
    const handleSubmit =(event)=>{
        event.preventDefault();
        const formData ={firstName,sureName,email,pass,$radioValue}

        console.log(formData);
        validateEmail();
        validateGender();
        validatedateOfBirth();
    }
</script>

<div class="signUpMainSection">
    <h2>Sign Up</h2>
    <br>


    <form action="POST" on:submit={handleSubmit}>
        <div class="nameSection">
            <div class="nameField">
                <input type="text" placeholder="Enter First Name" bind:value={firstName}>
            </div>
            <div class="nameField">
                <input type="text" name="" id="" placeholder="Enter Sure Name" bind:value={sureName}>
            </div>
        </div>

        <div class="emailField">
            <input type="text" placeholder="Enter Mobile Number and Email Address" bind:value={email} name="" id="">
        </div>

        {#if emailError}
        <div class="emailRequired">
            <p>{emailError}</p>
        </div>
        {/if}
      

        <div class="passwordField">
            <input type="text" placeholder="Password Must be 4 Chars Long" name="" bind:value={pass} id="">
        </div>
      

        <!-- Date Of Birth  -->
       
           <DateOfBirth {dateOfBirthError}></DateOfBirth>

    
        <!-- Gender  -->
           <Gender {radioError}></Gender>
          
           
       
            <p class="info">by Clicking Sign up, you agree to Our User agreement ,Privacy policy , Cookie Policy</p>

           <div class="buttonSection">
                <button type="submit" class="signUpBtn">Sign up</button>
                <button type="submit" class="cancelBtn">Cancel</button>
           </div>
          
    </form>

  
</div>
