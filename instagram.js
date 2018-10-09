
const instagram = {
    template: `
    <link href="instagram.css" type="text/css" rel="stylesheet">
    <nav>
        <div>
            <div>
                <i class="fab fa-instagram"></i>
                <h2 id="logo">Instagram</h2>
            </div>
            <div>
                <input placeholder="Montaz Meah II">
            </div>
            <div>
                <i class="fal fa-compass"></i>
                <i class="fal fa-heart"></i>
                <i class="fal fa-user"></i>
            </div>
        </div>
    </nav>
    <main>
        <div>
            <div id="profileHolder">
                <img id="profilePic" src="3.jpg">
            </div>
            <div>
                <div>
                    <h1>Montaz Meah II 
                        <i class="fas fa-badge-check"></i>
                        <button>Follow</button>
                    </h1>
                </div>
                <div id="stats">
                    <span>
                        <strong>6</strong> posts</span>
                    <span>
                        <strong>2,131</strong> followers</span>
                    <span>
                        <strong>343</strong> following</span>
                </div>
                <div>
                    <h4>Montaz Meah II</h4>
                    <p id="bio">Recently graduated from the Grand Circus Detroit full-time Javascript Front-End web development bootcamp.</p>
                </div>
                <div class="meta">
                    <p>See my simulated <strong><a href="#!/facebook">Facebook</a></strong> and <strong><a href="#!/twitter">Twitter</a></strong>.</p>
                </div>
                <div class="meta">
                    <p>See my actual <strong><a href="https://codepen.io/dashboard?type=view&opts_itemType=pen&opts_filter=all&opts_orderBy=id&opts_orderDirection=0&opts_tag=0&displayType=grid&previewType=iframe&page=0">Codepen</a></strong>, <strong><a href="https://answers.squarespace.com/users/14134/tazmeah.html">Squarespace</a></strong>, <strong><a href="https://www.linkedin.com/in/montaz-meah-ii/">LinkedIn</a></strong>, and <strong><a href="https://github.com/tazMeah?tab=repositories">GitHub</a></strong>.</p>
                </div>
            </div>
        </div>
        <article>
            <div id="tabs">
                <h4><i class="fal fa-calendar-alt"></i> POSTS</h4>
                <h4><i class="fal fa-user-tag"></i> TAGGED</h4>
            </div>
            <section>
                <div ng-repeat="picture in $ctrl.pictures" style="background: url({{picture.url}}); background-size:cover; background-repeat:no-repeat;" title="{{picture.attr}}"></div>
            </section>
        
        </article>
    </main>
    `,
    controller: function() {
        const vm = this;
        this.pictures = [
            {
                url: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&auto=format&fit=crop&w=1491&q=80",
                attr: "https://unsplash.com/@dlanor_s"
            },
            {
                url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed86b965826826e3dd08bb3b33726543&auto=format&fit=crop&w=1414&q=80",
                attr: "https://unsplash.com/@alesnesetril"
            },
            {
                url: "https://images.unsplash.com/photo-1533906966484-a9c978a3f090?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b05b346633118a56e7f33bd727a10383&auto=format&fit=crop&w=1001&q=80",
                attr: "https://unsplash.com/@grohsfabian"
            },
            {
                url: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b73970e97b923e72be9355cb15099091&auto=format&fit=crop&w=1547&q=80",
                attr: "https://unsplash.com/@grohsfabian"
            },
            {
                url: "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39c2d9cc5f529436519f8588c3df83fd&auto=format&fit=crop&w=1492&q=80",
                attr: "https://unsplash.com/@kobuagency"
            },
            {
                url: "https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=430514af91cd269ccdd660abb69c22bd&auto=format&fit=crop&w=1471&q=80",
                attr: "https://unsplash.com/@adigold1"
            }
        ]
    }
}










angular.module("app")
.component("instagram", instagram)