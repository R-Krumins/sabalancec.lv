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
    input[type="text"] {
        color: gray;
        outline: none;
        transition: all 0.2s ease-in-out;
        color: black;
    }
    input[type="text"]:focus {
        border-color: black;
    }
    .InputDiv:focus-within label {
        color: black;
    }
</style>

<div class="align-center flex justify-center flex-wrap pt-16 pb-16 bg-contact-bg">
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
                <p class="text-white mt-24"><a href="tel:+371 12345678">+371 12345678</a></p>
                <p class="text-white mt-12"><a href="mailto:epasts@inbox.lv">epasts@inbox.lv</a></p>
                <p class="text-white mt-12">ALUS STREET 5, VALMIERA, VIDZEME, ESTONIA</p>
            </div>
            <div class="CircleLight absolute bg-contact-green-light rounded-full w-35 h-35 z-20"></div>
            <div class="CircleDark absolute bg-contact-green-dark rounded-full w-70 h-70 z-10"></div>
        </div>

        <form action="" class="w-full md:w-3/5 p-4">
            <!--Forms-->
            <div class="grid grid-flow-row grid-rows-2 grid-cols-2">
                <div class="InputDiv px-8 py-6 w-full">
                    <label class="text-sm text-gray-400" for="firstname">First Name:</label><br>
                    <input type="text" name="firstname" placeholder="John" id="firstname" class="border-b border-gray-300 w-full py-2">
                </div>
                <div class="InputDiv px-8 py-6">
                    <label class="text-sm text-gray-400" for="lastname">Last Name:</label><br>
                    <input type="text" name="lastname" placeholder="Garlic" id="lastname" class="border-b border-gray-300 w-full py-2">
                </div>
                <div class="InputDiv px-8 py-6">
                    <label class="text-sm text-gray-400" for="email">E-mail:</label><br>
                    <input type="text" name="email" placeholder="john@inbox.lv" id="email" class="border-b border-gray-300 w-full py-2">
                </div>
                <div class="InputDiv px-8 py-6">
                    <label class="text-sm text-gray-400" for="phone">Phone number:</label><br>
                    <input type="text" name="phone" placeholder="+371 12345678" id="phone" class="border-b border-gray-300 w-full py-2">
                </div>
            </div>
        </form>

    </div>
</div>