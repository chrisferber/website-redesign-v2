
$(document).ready(onReady);

// onReady function to add event listeners for buttons with corresponding functions to run on click
function onReady() {
    $('#sendBeerEveryMonthBtn').on('click', handleSendBeerButtonClick);
}  // end onReady

// function runs on Send Beer Every Month button click
function handleSendBeerButtonClick() {
    console.log('send beer every month button was clicked');
} // end handleSendBeerButtonClick function

$("#homeHeroWrap").replaceWith(`
<div class="row" id="homeHeroWrap">
<div class="col-md-12">
    <div id="homeHero">
        <div class="row">
            <div id="newBeerHero">
                <div id="new-header-two-wrap">
                    <h1 class="new-header-two">Send America's #1 Rated Gift of the Month Clubs</h1>
                </div>
                <div id="sendBeerEveryMonthBtnWrap">
                    <button class="button" id="sendBeerEveryMonthBtn">Send Beer Every Month</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
<div class="row">

<!-- See How It Works -->
<div class="col-md-12">

    <div class="row prod-cell-row text-center">

        <div class="col-md-20 col-sm-3 col-xs-6 prod-cell ">

        
            <!-- See How It Works -->

            <div class="prod-cell-img">
                <div class="vmiddle">
                    <br>
                    <a href="http://www.amazingclubs.com/howitworks.html">
                    <img id="ac-2-sprite-question" width="2" height="2">
                    </a>
                </div>
                <div class="prod-cta-over">
                    <a href="http://www.amazingclubs.com/howitworks.html" class="uppercase button green-cta">Learn More</a>
                </div>
            </div>

            <div class="prod-cell-title header-four">
                <a href="http://www.amazingclubs.com/jerkyofthemonthclub.html" class="text-italic">Questions?</a>
            </div>
            <strong class="black-text">SEE HOW IT WORKS</strong>
        </div>

        <!-- View Testimonials  -->

        <div class="col-md-20 col-sm-3 col-xs-6 prod-cell ">
            <div class="prod-cell-img">
                <div class="vmiddle">
                    <br>
                        <img style="display:inline" id="ac-2-sprite-star">
                        <img style="display:inline" id="ac-2-sprite-star">
                        <img style="display:inline" id="ac-2-sprite-star">
                        <img style="display:inline" id="ac-2-sprite-star">
                        <img style="display:inline" id="ac-2-sprite-star">
                </div>
                <div class="prod-cta-over">
                    <a href="https://www.amazingclubs.com/testimonials.html" class="uppercase button green-cta">Learn More</a>
                </div>
            </div>
            <div class="prod-cell-title header-four">
                <a href="https://www.amazingclubs.com/testimonials.html" class="text-italic">World Class Customer Service</a>
            </div>
                <strong class="black-text">VIEW testimonials</strong>
        </div>

        <!-- Build a Custom Club  -->

        <div class="col-md-20 col-sm-3 hidden-xs prod-cell best-seller">
            <div class="prod-cell-img"> 
                <div class="vmiddle">
                    <br>
                    <img style="display:inline" id="ac-2-sprite-wine">
                    <img style="display:inline" id="ac-2-sprite-typewriter">
                </div>
                <div class="prod-cta-over">
                    <a href="https://www.amazingclubs.com/contact.html" class="uppercase button green-cta">Learn More</a>
                </div>
            </div>
            <div class="prod-cell-title header-four">
                <a href="https://www.amazingclubs.com/contact.html" class="text-italic">Can't Decide?</a>
            </div>
            <strong class="black-text">BUILD A CUSTOM CLUB</strong>
        </div> 

        <!-- They'll Love It -->
                     
        <img id="they-love-it-img" src="./Images/guaranteed-hero-2x.png" width="300" height="200">
                     
</div>
</div>
</div>
`);

