
<script>
	import {Router,Link} from "svelte-navigator";

</script>

<body>
	<div id="body">
		<div id="background">
			<div>
				<div>
					<div>
						<h1>&#8220;Her kan du se &#8221;.</h1>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
						</p>
					</div>
				</div>
			</div>
		</div>
		<div id="section">
			<ul>
				<li>
					<a href="blog.html"><img src="images/dog2.jpg" alt="Image"></a>
					<div>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
						</p>
						<a href="blog.html" class="readmore">Read more &gt;&gt;</a>
					</div>
				</li>
				<li>
					<a href="blog.html"><img src="images/dog2.jpg" alt="Image"></a>
					<div>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
						</p>
						<a href="blog.html" class="readmore">Read more &gt;&gt;</a>
					</div>
				</li>
				<li>
					<a href="blog.html"><img src="images/dog2.jpg" alt="Image"></a>
					<div>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
						</p>
						<a href="blog.html" class="readmore">Read more &gt;&gt;</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div id="footer">
		<ul>
			<li>
				<a href="index.html">Home</a>
			</li>
			<li>
				<a href="about.html">About</a>
			</li>
			<li>
				<a href="blog.html">Blog</a>
			</li>
			<li>
				<a href="services.html">Services</a>
			</li>
		</ul>
		<p>
			&copy; Copyright &copy; 2023. Mette Marie the developer all rights reserved
		</p>
		<div id="connect">
			<a href="http://freewebsitetemplates.com/go/facebook/" target="_blank" id="facebook">Facebook</a>
			<a href="http://freewebsitetemplates.com/go/twitter/" target="_blank" id="twitter">Twitter</a>
			<a href="http://freewebsitetemplates.com/go/googleplus/" target="_blank" id="googleplus">Google&#43;</a>
		</div>
	</div>
</body>


<style>

body {
	background: #a5352d;
	color: #ffffff;
	font-family: 'QuestrialRegular';
	font-size: 16px;
	margin: 0;
	min-width: 940px;
	padding: 0;
}
@font-face {
	font-family: 'QuestrialRegular';
	src: url('../fonts/questrial-regular-webfont.eot');
	src: url('../fonts/questrial-regular-webfont.eot?#iefix') format('embedded-opentype'),
	url('../fonts/questrial-regular-webfont.woff') format('woff'),
	url('../fonts/questrial-regular-webfont.ttf') format('truetype'),
	url('../fonts/questrial-regular-webfont.svg#QuestrialRegular') format('svg');
	font-weight: normal;
	font-style: normal;
}
a {
	outline: none;
}
img {
	border: 0;
}

#header div ul {
	list-style: none;
	margin: 0;
	overflow: hidden;
	padding: 0;
}
#header div ul li {
	float: left;
	margin: 0 0 0 0;
	position: relative;
	width: 235px;
}
#header div ul li.current a,
#header div ul li.current a:hover,
#header div ul li a:hover {
	background: url(../images/menu-selected.png) no-repeat right center;
	color: #424141;
}
#header div ul li a:hover {
	background: none;
}
#header div ul li a {
	background: none;
	color: #a3a3a3;
	display: inline-block;
	font-size: 14px;
	height: 54px;
	line-height: 54px;
	padding: 0;
	text-decoration: none;
	text-transform: uppercase;
	text-shadow: 0 1px #ffffff;
}
#body {
	background: #cac8c8 url(../images/bg-content2.png) repeat-x left top;
	width: 100%;
}
#body div#background {
	background: #FFFFFF url(../images/bg-content.jpg) no-repeat center bottom;
	min-height: 420px;
	padding: 0;
	width: auto;
}
#body div#background div {
	margin: 0 auto;
	overflow: hidden;
	padding: 55px 0 80px;
	width: 940px;
}
#body div#background div div {
	margin: 0;
	padding: 0;
	width: 570px;
}
#body div#background div div div {
	padding: 61px 0 0 20px;
	width: 520px;
}
#body div#background div div div h1 {
	color: #eeb58c;
	font-size: 48px;
	font-weight: normal;
	line-height: 50px;
	margin: 0;
}
#body div#background div p {
	color: #bebebe;
	line-height: 30px;
	margin: 15px 0 0;
	text-align: justify;
}

#body div#background div div div p a:hover,
#body div#section ul li div p a:hover,
#body div div#content div p a:hover {
	text-decoration: underline;
}

#body div#background div div.about p {
	font-size: 12px;
	line-height: 24px;
	margin: 0;
}

#body div#section {
	background: #a5352d;
	padding: 0;
	width: 100%;
}
#body div ul {
	list-style: none;
	margin: 0 auto;
	min-height: 400px;
	padding: 0 0 42px;
	width: 940px;
}
#body div ul li {
	display: block;
	height: 180px;
	overflow: hidden;
	padding: 24px 0 0;
}
#body div ul li:first-child {
	padding: 66px 0 0;
}
#body div#section ul li:first-child {
	padding: 36px 0 0;
}
#body div ul li a img {
	border: 3px solid #f2f1e6;
	display: block;
	float: left;
	opacity: 1;
}
#body div ul li a img:hover {
	opacity: 0.9;
}
#body div ul li div {
	float: right;
	padding: 0;
	width: 592px;
}
#body div#section ul li div p {
	color: #eeb58c;
	line-height: 30px;
	margin: 0;
	padding: 0 0 30px;
	text-align: justify;
}
#body div ul li div p {
	color: #fff;
	line-height: 30px;
	margin: 0;
	padding: 0 0 30px;
	text-align: justify;
}
#body div ul li div p a {
	color: #EEB58C;
}
#body div ul li div a.readmore {
	color: #585758;
	display: inline-block;
	font-size: 12px;
	font-style: italic;
	line-height: 22px;
	text-decoration: none;
}
#body div ul li div a.readmore:hover {
	color: #b4b3b4;
}
#footer ul li a:hover {
	color: #b6834f;
}
#body div {
	margin: 0 auto;
	padding: 40px 0 80px;
	width: 940px;
}
#body div div.blog a {
	color: #585758;
	text-decoration: none;
}
#body div div#content div:first-child {
	float: left;
	width: 282px;
}
#body div div#content div:first-child a img {
	border: 3px solid #F2F1E6;
	display: block;
	margin: 0 0 37px;
	opacity: 1;
}
#body div div#content div:first-child a img:hover {
	opacity: 0.9;
}
#body div div#content div {
	float: right;
	padding: 0;
	width: 595px; 
}
#body div div#content div p {
	line-height: 30px;
	margin: 0 0 45px;
	text-align: justify;
}
#body div div#content div p a {
	color: #ffffff;
}
#body div div#paging span a,
#body div div#paging ul li a {
	color: #727272;
	display: inline;
	text-decoration: none;
	text-shadow: 0 1px #e4e3e3;
}
#body div div#paging ul li a:hover,
#body div div#paging span a:hover {
	color: #949393;
}
#body div div#paging ul {
	display: inline;
	min-height: 0;
	padding: 0;
	width: auto;
}
#body div div#paging ul li {
	display: inline;
	padding: 0 5px;
}
#footer {
	margin: 0 auto;
	min-height: 85px;
	overflow: hidden;
	width: 940px;
}
#footer div.logo a img {
	display: block;
}
#footer ul {
	float: left;
	list-style: none;
	margin: 3px 0 0;
	overflow: hidden;
	padding: 33px 0 0;
	width: 220px;
}
#footer ul li {
	border-left: 1px solid #85603a;
	float: left;
	height: 10px; 
}
#footer ul li:first-child {
	border: 0;
}
#footer ul li a {
	color: #85603a;
	display: block;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-size: 10px;
	line-height: 9px;
	padding: 0 5px;
	text-align: center;
	text-decoration: none;
}
#footer p {
	color: #85603a;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	font-size: 10px;
	float: left;
	line-height: 16px;
	margin: 0;
	padding: 33px 0 0;
	width: 280px;
}
#footer div#connect {
	float: right;
	overflow: hidden;
	padding: 24px 0 0;
	width: auto;
}
#footer div#connect a {
	display: block;
	float: left;
	height: 25px;
	margin: 0 0 0 45px;
	text-indent: -99999px;
}
#footer div#connect a#facebook {
	background: url(../images/icons.png) no-repeat 0 0;
	margin: 0;
	width: 25px;
}
#footer div#connect a#twitter {
	background: url(../images/icons.png) no-repeat 0 -35px;
	width: 36px;
}
#footer div#connect a#googleplus {
	background: url(../images/icons.png) no-repeat 0 -95px;
	width: 25px;
}
#footer div#connect a#facebook:hover {
	background: url(../images/icons.png) no-repeat -25px 0;
}
#footer div#connect a#twitter:hover {
	background: url(../images/icons.png) no-repeat 0 -60px;
}
#footer div#connect a#googleplus:hover {
	background: url(../images/icons.png) no-repeat -25px -95px;
}

</style>