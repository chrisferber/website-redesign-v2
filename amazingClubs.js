
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
                     
        <img id="they-love-it-img" src=“img/guaranteed-hero-2x.png" width="300" height="200">
                     
</div>
</div>
</div>
`);

// Move our recommendations section to below fall favorites section
$('.home-favorites')[0].append($('.home-favorites')[1]);

// Remove the current homeBadges
$("#homeBadges").remove();



// Insert the newwly formatted homeBadges, this time in 2 rows of 2

const myString1 =`
    <!-- home badges -->
        <div class="row" id="homeBadges">
        <!-- badge -->
            <div class="col-md-3 col-sm-6 home-badge">
                <div class="guar-stamp blue-border">
                    <a href="../guarantee.html"><img src="img/guaranteed-footer-2x.png" width="224"></a>
                </div>
                <p>We're so confidant in the quality of our #1 rated gift of the months clubs, we back every order with our unbeatable guarantee. It's simple. When you send a gift from Amazing Clubs, your recipient is going to love their gift. <a href="guarantee.html">We guarantee it!</a></p>
            </div>
        <!-- /badge -->
        <!-- badge -->
            <div class="col-md-3 col-sm-6 home-badge">
                <img src="img/largest-selection-2x.png" width="171">
                <div class="header-two text-bold blue-border">Largest Selection</div>
                <p>From our award-winning <a href="../beer.html">Beer</a> and <a href="../wine.html">Wine of the Month Clubs</a> - to unique selections like <a href="../chocolate.html">Chocolate</a>, <a href="../coffee.html">Coffee</a>, <a href="../icecream.html">Ice Cream</a>, <a href="../bbq.html">BBQ Sauce</a>, and dozens more - we search the world to bring our customers these incredible gourmet items.</p>
            </div>
        </div>
        <!-- /badge -->
        <div class="row" id="homeBadges1">
        <!-- badge -->
            <div class="col-md-3 col-sm-6 home-badge" width="50%">
                <img src="img/highest-quality-2x.png" width="150">
                <div class="header-two text-bold blue-border">Highest Quality</div>
                <p>We want to exceed your expectations. By utilizing our talented team of gourmet professionals, we are able to track down and sample only the highest quality products.</p>
            </div>
        <!-- /badge -->
        <!-- badge -->
            <div class="col-md-3 col-sm-6 home-badge">
                <img src="img/best-value-2x.png" width="113">
                <div class="header-two text-bold blue-border">Best Value</div>
                <p>When you shop with Amazing Clubs, we guarantee that you are always getting the lowest price. As the world's largest Gift of the Month Club provider, we're able to leverage our buying power to get you the best deal.</p>
            </div>
        <!-- /badge -->
        </div>
        <!-- /home badges -->`;

$("#testBarWrap").append(myString1);
