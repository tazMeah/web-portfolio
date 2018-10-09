
const twitter = {
    template: `
    <link href="twitter.css" rel="stylesheet" type="text/css" >
    <nav>
    <div id="socialLinks">
    <a title="SquareSpace" href="https://answers.squarespace.com/users/14134/tazmeah.html"><i class="fab fa-squarespace"><span> Squarespace</span></i></a>
    <a title="GitHub" href="https://github.com/tazMeah?tab=repositories"><i class="fab fa-github-square"><span> Github</span></i></a>
    <a title="CodePen" href="https://codepen.io/dashboard?type=view&opts_itemType=pen&opts_filter=all&opts_orderBy=id&opts_orderDirection=0&opts_tag=0&displayType=grid&previewType=iframe&page=0"><i class="fab fa-codepen"><span> Codepen</span></i></a>
    <a title="LinkedIn" href="https://www.linkedin.com/in/montaz-meah-ii/"><i class="fab fa-linkedin"><span> LinkedIn</span></i></a>
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
    </div>
    <div id="follow">
        <div>
            <div class="left">
            </div>
            <div class="middle">
                <div>
                    <h3>Tweets</h3>
                    <span class="accentColor">1</span>
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
    </div>
    <main>
        <div class="left">
            <img id="profilePic" src="4.jpeg" title="Montaz Meah II">
            <h2>Montaz Meah II <i class="fas fa-badge-check"></i></h2>
            <p class="meta">@tazmeah</p>
            <p class="meta"><i class="far fa-calendar-alt"></i> Joined December 2009</p>
            <p class="meta"><i class="fal fa-map-marker-alt"></i> Southfield, MI</p>
            <button id="leftButton" class="button">Tweet to Montaz Meah II</button>
        </div>
        <div class="middle">
            <div>
                <h2>Twitter</h2>
                <h2 class="accentColor"><a href="#!/facebook">Facebook</a></h2>
                <h2 class="accentColor"><a href="#!/instagram">Instagram</a></h2>
            </div>
            <div>
                <img src="4.jpeg" class="avatar">
                <div class="stack">
                    <div>
                        <h4>Montaz Meah II</h4>
                        <i class="fas fa-badge-check"></i>
                        <span class="meta">@tazmeah • Oct 3</span>
                    </div>
                    <div>
                        <p>Fun times with everyone over @GrandCircusCo. Learned so much.</p>
                    </div>
                </div>
            </div>
            <div class="image" id="img01"></div>
            <div id="tools" class="meta">
                <div>
                    <i class="far fa-comment"></i> 
                    <span>14</span>
                </div>
                <div>
                    <i class="fal fa-retweet" ></i>
                    <span>154</span>
                </div>
                <div>
                    <i class="fal fa-heart"></i>
                    <span>3,112</span>
                </div>
                <div></div>
            </div>
        </div>
        <div class="right">
            <div class="who">
                <h3>Who to follow</h3><span class="accentColor"> • Refresh</span>
            </div>

            <div class="who">
                <img class="avatar" id="matty" src="https://pbs.twimg.com/profile_images/2281193589/2oq66j36wsw54nosmuwj_400x400.jpeg">
                <div>
                    <div>
                    <a href="https://twitter.com/KrukMatt"><h4>Matthew Kruk</h4></a><span class="meta">@KrukMatt</span>
                    </div>
                    <a href="https://twitter.com/KrukMatt"><button class="accentColor button">Follow</button></a>
                </div>
            </div>

            <div class="who">
                <img class="avatar" id="matty" src="https://pbs.twimg.com/profile_images/691387694522322944/6bXZWy6Q_400x400.png">
                <div>
                    <div>
                    <a href="https://twitter.com/benjaminrvasko"><h4>Ben Vasko</h4></a><span class="meta">@benjaminvasko</span>
                    </div>
                    <a href="https://twitter.com/benjaminrvasko"><button class="accentColor button">Follow</button></a>
                </div>
            </div>

        </div>
    </main>

    `
};





angular.module("app")
.component("twitter", twitter)