

const facebook = {
    template: `
    <link href="facebook.css" rel="stylesheet" type="text/css" >

    <nav>
    <div>
        <i class="fab fa-facebook"></i>
        <input placeholder="Montaz Meah II">
    </div>
    <div id="socialLinks">
        <i class="fab fa-squarespace"></i>
        <i class="fab fa-github-square"></i>
        <i class="fab fa-codepen"></i>
        <i class="fab fa-linkedin"></i>
    </div>
    <i class="fab fa-twitter"></i>
</nav>
    <div id="profile-container">
        
        <img src="me.jpg">
        <h1>Montaz Meah II</h1>
        <h2>(Taz)</h2>
        <div id="buttons">
            <div><i class="fas fa-check"></i> Friends</div>
            <div><i class="fas fa-check"></i> Following</div>
            <div><i class="fas fa-comment"></i> Message</div>
            <div>•••</div>
        </div>
    </div>
    <div id="fb-menu" ng-init="friends=8" >
        <div></div>
        <div>Facebook</div>
        <div><a href="#!/twitter" ng-click="social='twitter'">Twitter</a></div>
        <div ng-click="friends = friends + 1">Friends <span >{{friends}} Mutual</span></div>
        <div><a href="#!/instagram">Instagram</a></div>
        <div>More <i class="fas fa-caret-down"></i></div>
        <div></div>
    </div>

    <main>
        <aside>
            <div id="intro">
                <h3><i class="fas fa-globe-americas"></i> Intro</h3>
                <p id="bio">
                    Utility Technician turned web developer.
                </p>
            </div>
            <ul>
                <li>
                    <i class="fas fa-briefcase"></i>
                    Works for <em>You</em>
                </li>
                <li>
                    <i class="fas fa-map-marker-alt"></i>
                    From Detroit, Michigan
                </li>
                <li>
                    <i class="fas fa-heart"></i>
                    Loves Web Development
                </li>
                <li>
                    <i class="fas fa-rss"></i>
                    Followed by 800 people
                </li>
            </ul>
            <div id="collage">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="actualfacebook">
                <button>Hire Me</button>
            </div>


        </aside>
        <section>
            <div id="tabs">
                <span><i class="fas fa-pencil-alt"></i> Make Post</span>
                <span><i class="fas fa-camera"></i> Photo/Video</span>
            </div>
            <div id="comment">
                <div>
                    <i class="fas fa-user-circle"></i>
                    <!-- <input type="text" placeholder="Write something to Taz..."> -->
                    <textarea placeholder="Write something to Taz..."></textarea>
                </div>
                <div>
                    <button><i class="fas fa-image"></i> Photo/Video</button>
                    <button><i class="fas fa-user-tag"></i> Tag Friends</button>
                    <button><i class="far fa-grin-alt"></i> Feeling/Activity</button>
                    <button id="elip">•••</button>
                </div>
                <div>
                    <i class="fas fa-cog"></i>
                    <button>Post</button>
                </div>
            </div>

            <div id="post">
                <div>
                    <div class="user"></div>
                    <div>
                        <span>Montaz Meah II</span>
                        <br>
                        <span>September 21 at 7:29 PM •</span>
                    </div>
                    <div>•••</div>
                </div>
                <p>I graduated from Grand Circus! (Me in the red plaid.)</p>
                <div id="thumbnail">
                </div>
                <span id="views">
                    23,271,000 Views
                </span>
                
                <div></div>
                <!-- <div></div>
                <div></div>
                <div></div> -->
            </div>
        </section>
    </main>
    `,
    controller: function($location){
        const vm = this;
    }
};








angular.module("app")
.component("facebook", facebook)