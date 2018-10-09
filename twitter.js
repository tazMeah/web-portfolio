
const twitter = {
    template: `
    <link href="twitter.css" rel="stylesheet" type="text/css" >
    <nav>
        <div id="socialLinks">
            <i class="fab fa-squarespace"> <span>Squarespace</span></i>
            <i class="fab fa-github-square"> <span>Github</span></i>
            <i class="fab fa-codepen"> <span>Codepen</span></i>
            <i class="fab fa-linkedin"> <span>LinkedIn</span></i>
        </div>
        <div>
            <i class="fab fa-twitter"></i>
        </div>
        <div>
            <input placeholder="Montaz Meah II">
            <i class="fas fa-user-circle"></i>
            <button class="accentColor button">Tweet</button>
        </div>
    </nav>
    <div id="splash">
        <img src="4.jpeg" title="Montaz Meah II">
    </div>
    <div id="follow">
        <!--
        <i class="fas fa-badge-check" style="font-size: 48px;"></i>
        -->
        <div class="left"></div>
        <div class="middle">
            <div>
                <h3>Tweets</h3>
                <span class="accentColor">500</span>
            </div>
            <div>
                <h3>Following</h3>
                <span>120</span>
            </div>
            <div>
                <h3>Followers</h3>
                <span>14M</span>
            </div>
            <div>
                <h3>Likes</h3>
                <span>874</span>
            </div>
        </div>
        <div class="right">
            <button class="button accentColor">Follow</button>
        </div>
    </div>
    <main>
        <div class="left"></div>
        <div class="middle">
            <div>
                <h2>Twitter</h2>
                <h2 class="accentColor">Facebook</h2>
                <h2 class="accentColor">Instagram</h2>
            </div>
            <div>
            </div>
        </div>
        <div class="right"></div>
    </main>

    `
};





angular.module("app")
.component("twitter", twitter)