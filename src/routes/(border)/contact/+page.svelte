<script>
    //For submitting with svelte
    let firstName = '';
    let lastName = '';
    let email = '';
    let phone = '';
    let message = '';
</script>

<style>
    /*Contact information circles*/
    .CircleLight {
        bottom: 5em;
        right: 5em;
    }
    .CircleDark {
        bottom: -5em;
        right: -5em;
    }
    /*Input field color changes*/
    input {
    outline: none;
    transition: all 0.2s ease-in-out;
    }
    input:focus {
        color: black;
        border-color: black;
    }
    .Label {
        color: gray;
        transition: color 0.2s ease-in-out;
    }
    .FocusedLabel {
        color: black;
    }
    /*Checkbox*/
    input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 1.35em;
        height: 1.35em;
        border-radius: 50%;
        border: .175em solid lightgray;
        display: inline-block;
        position: relative;
        background-color: white;
        transition: all 0.3s ease;
    }
    input[type="checkbox"]:checked {
        background-color: black;
        border-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input[type="checkbox"]:checked::before {
        content: '';
        margin-top: -0.075em;
        width: .5em;
        height: .75em;
        border: solid white;
        border-width: 0 .15em .15em 0;
        transform: rotate(45deg);
    }
</style>

<div class="align-center flex justify-center flex-wrap pt-16 pb-16 px-4 bg-contact-bg">
    <!--tailwind notes
        content/h1 padding from top -> mt-16
        h1 size -> 5xl
        p margin from h1 -> mt-4
    -->
    <h1 class="text-5xl w-full text-center">Contact Us</h1>
    <p class="w-full text-center mt-4 mb-4">Any questions or remarks? Just write us a message!</p>
    
    <div class="flex flex-wrap align-center w-7xl bg-white p-2 rounded-xl">

        <div class="w-full md:w-2/5 bg-contact-green-medium rounded-lg p-12 relative truncate text-wrap">
            <!--Contact information-->
            <h2 class="text-3xl w-full font-bold text-white">Contact information</h2>
            <p class="w-full mt-4 mb-4 text-gray-200">Say something to start a live chat!</p>
            <div class="z-30 relative md:mb-48">
                <p class="text-white mt-8 sm:mt-24">
                    <img src="/icons/phone.svg" alt="Icon" class="inline-block align-middle w-6 h-6 me-4" />
                    <a href="tel:+371 12345678">+371 12345678</a>
                </p>
                <p class="text-white mt-12">
                    <img src="/icons/mail.svg" alt="Icon" class="inline-block align-middle w-6 h-6 me-4" />
                    <a href="mailto:epasts@inbox.lv">epasts@inbox.lv</a>
                </p>
                <p class="text-white mt-12">
                    <img src="/icons/location.svg" alt="Icon" class="inline-block align-middle w-6 h-6 me-4" />
                    ALUS STREET 5, VALMIERA, VIDZEME, ESTONIA
                </p>
            </div>
            <div class="CircleLight absolute bg-contact-green-light rounded-full w-35 h-35 z-20"></div>
            <div class="CircleDark absolute bg-contact-green-dark rounded-full w-70 h-70 z-10"></div>
        </div>

        <form action="" class="w-full md:w-3/5 p-4 flex flex-col items-start">
        <!-- <form on:submit={handleSubmit} class="w-full md:w-3/5 p-4"> -->
            <div class="flex flex-wrap w-full">
                <div class="InputDiv px-8 py-6 w-full md:w-1/2">
                    <label class="text-sm Label {firstName ? 'FocusedLabel' : ''}" for="firstname">
                        First Name:
                    </label>
                    <br>
                    <input type="text" bind:value={firstName} placeholder="John" id="firstname" class="border-b border-gray-300 w-full py-2">
                </div>
                <div class="InputDiv px-8 py-6 w-full md:w-1/2">
                    <label class="text-sm Label {lastName ? 'FocusedLabel' : ''}" for="lastname">
                        Last Name:
                    </label>
                    <br>
                    <input type="text" bind:value={lastName} placeholder="Garlic" id="lastname" class="border-b border-gray-300 w-full py-2">
                </div>
                <div class="InputDiv px-8 py-6 w-full md:w-1/2">
                    <label class="text-sm Label {email ? 'FocusedLabel' : ''}" for="email">
                        E-mail:
                    </label>
                    <br>
                    <input type="text" bind:value={email} placeholder="john@inbox.lv" id="email" class="border-b border-gray-300 w-full py-2">
                </div>
                <div class="InputDiv px-8 py-6 w-full md:w-1/2">
                    <label class="text-sm Label {phone ? 'FocusedLabel' : ''}" for="phone">
                        Phone number:
                    </label>
                    <br>
                    <input type="text" bind:value={phone} placeholder="+371 12345678" id="phone" class="border-b border-gray-300 w-full py-2">
                </div>
            </div>

            <div class="CheckboxDiv px-8 py-6 flex flex-row flex-wrap w-auto">
                <p class="w-full">Select subject:</p>
                <label class="flex items-center space-x-2 cursor-pointer pe-4 mt-4 w-full sm:w-auto">
                  <input type="checkbox">
                  <p class="text-gray-700 text-sm m-0">General inquiry</p>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer pe-4 mt-4 w-full sm:w-auto">
                    <input type="checkbox">
                    <p class="text-gray-700 text-sm m-0">Got robbed</p>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer pe-4 mt-4 w-full sm:w-auto">
                    <input type="checkbox">
                    <p class="text-gray-700 text-sm m-0">Lonely</p>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer pe-4 mt-4 w-full sm:w-auto">
                    <input type="checkbox">
                    <p class="text-gray-700 text-sm m-0">Need to talk</p>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer pe-4 mt-4 w-full sm:w-auto">
                    <input type="checkbox">
                    <p class="text-gray-700 text-sm m-0">Hotel? Trivago</p>
                </label>
            </div>

            <div class="flex flex-wrap w-full">
                <div class="InputDiv px-8 py-6 w-full">
                    <label class="text-sm Label {message ? 'FocusedLabel' : ''}" for="message">
                        Message:
                    </label>
                    <br>
                    <input type="text" bind:value={message} placeholder="John" id="message" class="border-b border-gray-300 w-full py-2">
                </div>
            </div>

            <div class="flex flex-wrap w-full px-8 py-6 justify-center md:justify-end">
                <input type="submit" value="Send Message" class="bg-black cursor-pointer hover:bg-gray-800 text-white py-4 px-12 border border-black rounded-lg">
            </div>
        </form>
    </div>
</div>