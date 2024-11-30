<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>TheLatest</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!-- <link rel="stylesheet" type="text/css" href="style.css" /> -->
<!--[if lte IE 6]><link rel="stylesheet" type="text/css" href="ie.css" /><![endif]-->
</head>
<body>
  <style>
    * {
	margin: 0; padding: 0;
}
body {
	text-align: center;
	font: 12px Verdana;
	color: #727272;
	background-color: #f4f4f4;
	padding: 20px 0;
}
a {
	text-decoration: none;
	color: #588cb8;
}
a:hover {
	text-decoration: underline;
	color: #ff0000;
}
img {
	border: 0;
}

.break {
	font-size: 0;
	width: 0; height: 0;
	clear: both;
}
.alignleft {
	float: left;
	margin: 4px 10px 5px 0;
}
.alignright {
	float: right;
	margin: 4px 0 5px 10px;
}
.aligncenter {
	text-align: center;
}
.hidden {
	display: none;
}

/** BEGIN wrapper **/
#wrapper {
	width: 967px;
	margin: auto auto;
	text-align: left;
}
/** END wrapper **/

/** BEGIN header **/
#header {
	background: url(images/headtile.gif) repeat-x 0 0;
	margin-bottom: 10px;
}
	#header .buffer { 
		background: url(images/headleft.gif) no-repeat 0 0;
	}
	#header .buffer .buffer { 
		height: 169px; 
		background: url(images/headright.gif) no-repeat top right;
		padding-top: 5px;
	} 
	#header ul {
		list-style-type: none
	}
		#header ul li {
			float: left;
			font-size: 0.8em;
		}
		#header ul li a {
			display: block;
			color: #727272;
			text-transform: uppercase;
			padding: 5px 10px;
		}
		#header ul li a:hover {
			color: #4DB200;
			text-decoration: none;
		}
	#header h1 {
		clear: both;
		float: left;
		padding: 16px 0 20px 16px;
	}
		#header h1 a {
			display: block;
			width: 408px; height: 74px;
			background: url(images/logo.gif) no-repeat 0 0;
			text-indent: -9999px;
			outline: none;
		}
	#header .ad {
		float: right;
		padding: 25px 20px 0 0;
	}
	#header ol {
		clear: both;
		list-style-type: none
	}
		#header ol li {
			float: left;
			font-size: 0.9em;
			text-transform: uppercase;
			padding-left: 1px;
			background: url(images/divider.gif) no-repeat 0 0;
		}
			#header ol li.f {
				padding-left: 0;
				background: none;
			}
		#header ol li a {
			color: #727272;
			display: block;
			padding: 9px 10px 10px;
		}
		#header ol li a:hover {
			color: #4DB200;
			text-decoration: none;
		}
	#header form {
		float: right;
		width: 211px; height: 22px;
		background: url(images/search.gif) no-repeat 0 0;
		margin: 5px 10px 0 0;
	}
		#header form input {
			border: 0;
			font-size: 0.9em;
			font-family: Verdana;
			float: left;
			width: 138px;
			background-color: transparent;
			margin: 4px 10px 0 2px;
		}
		#header form button {
			border: 0;
			text-indent: -9999px;
			width: 61px; height: 22px;
			float: left;
			background-color: transparent;
		}
/** END header **/

/** BEGIN body **/
#body {
	border: 1px solid #DBDBDB;
	margin: 10px 0;
	background: url(images/wrapper.gif) repeat-y 745px 0;
	background-color: #FFFFFF;
}
/** END body **/

/** BEGIN content **/
#content {
	width: 745px;
	float: left;
}
	#content .buffer {
		padding: 20px 5px;
	}
	#content .post {
		width: 345px; height: 340px;
		float: left;
		padding: 0 10px;
	}
		#content .post h2 {
			font-size: 1em;
			background-color: #F1F1F1;
			padding: 2px 5px;
			border-bottom: 1px solid #EDEDED;
		}
			#content .post h2 a {
				color: #588CB8;
			}
		#content .post .date {
			font-size: 0.8em;
			padding: 8px 5px;
		}
			#content .post .date a {
				color: #4DB200;
			}
		#content .post .thumb {
			width: 329px; height: 150px;
			overflow: hidden;
			margin-left: 7px;
		}
			#content .post .thumb img {
				width: 329px;
			}
		#content .post p {
			padding: 10px;
			line-height: 1.4em;
		}
		#content .post .readmore {
			display: block;
			float: right;
			text-indent: -9999px;
			width: 101px; height: 19px;
			outline: none;
			background: url(images/readmore.gif) no-repeat 0 0;
		}
	#bottom {
		clear: both;
		padding: 15px 10px 0;
	}
		#bottom .box {
			width: 220px;
			float: left;
			padding: 10px;
		}
			#bottom .box h2 {
				color: #4DB200;
				font-size: 1em;
				padding-bottom: 5px;
				border-bottom: 1px solid #DDDDDD;
			}
			#bottom .box ul {
				list-style-type: none;
				padding-bottom: 10px;
			}
				#bottom .box ul li {
					font-size: 0.8em;
					border-bottom: 1px dotted #ABABAB;
					line-height: 1.4em;
					padding: 6px 0 6px 12px;
					background: url(images/bullet.gif) no-repeat 0 11px;
				}
				#bottom .box ul li a {
					color: #727272;
				}
				#bottom .box ul li a:hover {
					text-decoration: none;
					color: #588CB8;
				}
			#bottom .box .comments a {
				font-weight: bold;
				color: #588CB8;
			}
	#content h2.title {
		padding: 0 15px 20px;
		font-size: 0.9em;
		text-transform: uppercase;
		font-weight: normal;
	}
	#content .postnav {
		padding: 0 15px;
		font-size: 0.8em;
		text-transform: uppercase;
	}
		#content .postnav a {
			color: #588CB8;
		}
	#content .single {
		padding: 0 15px;
	}
		#content .single a {
			color: #588CB8;
		}
		#content .single h2 {
			font-size: 1em;
			background-color: #F1F1F1;
			padding: 2px 5px;
			border-bottom: 1px solid #EDEDED;
		}
		#content .single .date {
			font-size: 0.8em;
		}
		#content .single p {
			line-height: 1.4em;
			margin-bottom: 10px;
		}
		#content .single ol, #content .single ul {
			list-style-position: inside;
			margin-bottom: 10px;
		}
		#content .single li {
			line-height: 1.4em;
		}
		#content .single blockquote {
			line-height: 1.4em;
			margin-bottom: 10px;
			padding: 10px 10px 5px;
			background-color: #eeeeee;
			border-width: 1px 0;
			border-style: solid;
			border-color: #e0e0e0;
		}
		#content .single h3, #content .single h4, #content .single h5, #content .single h6 {
			font-size: 1.2em;
			margin-bottom: 8px;
		}
/** END content **/

/** BEGIN sidebar **/
#sidebar {
	width: 220px;
	float: right;
}
	#sidebar h2 {
		color: #4DB200;
		font-size: 0.9em;
		text-transform: uppercase;
		padding: 10px 12px;
		background: url(images/horizontal.gif) no-repeat 8px 22px;
	}
	#sidebar ul {
		list-style-type: none;
		padding: 0 10px 10px;
	}
		#sidebar ul li {
			line-height: 1.4em;
			padding: 2px;
			border-bottom: 1px dotted #ABABAB;
		}
		#sidebar ul li a {
			color: #727272;
		}
		#sidebar ul li a:hover {
			color: #588CB8;
			text-decoration: none;
		}
	#sidebar .tags {
		padding: 0 10px 10px;
	}
		#sidebar .tags a {
			color: #727272;
		}
		#sidebar .tags a:hover {
			color: #588CB8;
			text-decoration: none;
		}
	#sidebar .flickr {
		padding: 0 10px 10px;
	}
		#sidebar .flickr img {
			margin: 2px;
		}
	#sidebar .video {
		padding: 0 10px 10px;
	}
/** END sidebar **/

/** BEGIN footer **/
#footer {
	font-size: 0.8em;
	border: 1px solid #DBDBDB;
	padding: 12px;
	color: #727272;
	background-color: #FFFFFF;
}
	#footer {
		
	}
/** END footer **/

/** BEGIN miscellaneous **/
#comments {
	padding: 15px;
}
	#comments h2 {
		font-size: 1em;
		background-color: #F1F1F1;
		padding: 2px 5px;
		border-bottom: 1px solid #EDEDED;
	}
	#comments a {
		color: #588CB8;
	}
	#comments p {
		margin-bottom: 10px;
		line-height: 1.6em;
	}
	#comments form {
		padding-top: 20px;
	}
	#comments form p {
		margin-bottom: 5px;
	}
		#comments form input {
			margin-right: 5px;
		}
		#comments form input, textarea {
			border: 1px solid #cccccc;
			font-size: 0.9em;
			font-family: Verdana;
			padding: 4px;
			background-position: 4px 4px;
			background-repeat: no-repeat;
		}
		#comments form input {
			width: 260px;
			border: 1px solid #cccccc;
		}
		#comments form textarea {
			width: 350px;
			padding: 4px 4px !important;
			border: 1px solid #cccccc;
		}
		#comments form button {
			border: 1px solid #a0a0a0;
			font-size: 1em;
			font-family: Verdana;
			padding: 2px 6px;
		}
	.commentdetails {
		margin-top: 25px;
	}
	.commentauthor {
		margin-bottom: 5px !important;
		font-weight: bold;
	}
	.commentdate {
		font-size: 0.8em;
		margin-bottom: 5px;
		color: #909090;
	}
	.required {
		color: #ff0000;
	}
.notfound {
	padding: 40px;
}
	.notfound h2 {
		font-size: 18px;
		font-weight: normal;
		margin-bottom: 10px;
	}
/** END miscellaneous **/

/** BEGIN wordpress 2.7 comments **/
#comments ol {
	list-style-type: none;
	clear: both;
	padding: 0;
	margin: 0;
}
	#comments ol li {
		padding: 10px;
		border: 1px solid #e0e0e0;
		margin-bottom: 10px;
	}
	#comments ol li .avatar {
		float: right;
	}
	#comments ol li .comment-author {
		
	}
		#comments ol li .comment-author .fn {
			font-weight: bold;
			font-size: 1.2em;
		}
	#comments ol li .comment-meta {
		font-size: 0.9em;
		color: #999999;
		margin: 5px 0 10px;
	}
	#comments ol li .reply {
		font-size: 0.9em;
		font-weight: bold;
		padding-bottom: 10px;
	}
	#comments .children {
		list-style-type: none;
	}
#comments .navigation {
	padding: 10px 0 20px;
	font-size: 0.9em;
}
	#comments .navigation a {
		color: #999999;
		padding: 3px 8px;
		border: 1px solid #cccccc;
	}
	#comments .navigation a:hover {
		color: #000000;
		border-color: #000000;
		text-decoration: none;
	}
#comments .says {
	display: none;
}
/** END wordpress 2.7 comments **/

  </style>
<!-- BEGIN wrapper -->
<div id="wrapper">
  <!-- BEGIN header -->

  <!-- BEGIN body -->
  <div id="body">
    <!-- BEGIN content -->
    <div id="content">
      <div class="buffer">
        <!-- begin post -->
        <div class="post">
          <h2><a href="#">Travel</a></h2>
          <p class="date"><a href="#">Dingexx</a> on Feb 12, 2009 | <a href="#">12 Comments</a></p>
          <div class="thumb"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_thumb1.jpg" alt="Example Image">
          </a></div>
          <p>Risus est orci tristique Duis aliquam nunc ut at facilisis pede. At in rhoncus tellus augue morbi tellus tincidunt dui nunc facilisis. Quis pellentesque eget vel Nunc semper vel semper condimentum semper eleifend ...</p>
          <a class="readmore" href="#">Read More</a> </div>
        <!-- end post -->
        <!-- begin post -->
        <div class="post">
          <h2><a href="#">Search Engine Optimization</a></h2>
          <p class="date"><a href="#">Meyang</a> on Feb 10, 2009 | <a href="#">100 Comments</a></p>
          <div class="thumb"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_thumb2.jpg" alt="Example Image">
          </a></div>
          <p>Vel illum qui dolorem eum fugiat quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi</p>
          <a class="readmore" href="#">Read More</a> </div>
        <!-- end post -->
        <!-- begin post -->
        <div class="post">
          <h2><a href="#">Videos</a></h2>
          <p class="date"><a href="#">Bang</a> on Feb 12, 2009 | <a href="#">8 Comments</a></p>
          <div class="thumb"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_thumb3.jpg" alt="Example Image">
          </a></div>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et ligula. Aliquam risus magna, vehicula nec, ultrices venenatis, fermentum id, sem. Aliquam sem pede, volutpat vitae, consequat vel, eleifend sed, turpis.</p>
          <a class="readmore" href="#">Read More</a> </div>
        <!-- end post -->
        <!-- begin post -->
        <div class="post">
          <h2><a href="#">Marketing</a></h2>
          <p class="date"><a href="#">Goma</a> on Feb 10, 2009 | <a href="#">20 Comments</a></p>
          <div class="thumb"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_thumb4.jpg" alt="Example Image">
          </a></div>
          <p>Risus est orci tristique Duis aliquam nunc ut at facilisis pede. At in rhoncus tellus augue morbi tellus tincidunt dui nunc facilisis. Quis pellentesque eget vel Nunc semper vel semper condimentum semper eleifend ...</p>
          <a class="readmore" href="#">Read More</a> </div>
        <!-- end post -->
        <!-- begin post -->
        <div class="post">
          <h2><a href="#">Travel</a></h2>
          <p class="date"><a href="#">Dingexx</a> on Feb 12, 2009 | <a href="#">12 Comments</a></p>
          <div class="thumb"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_thumb5.jpg" alt="Example Image">
          </a></div>
          <p>Risus est orci tristique Duis aliquam nunc ut at facilisis pede. At in rhoncus tellus augue morbi tellus tincidunt dui nunc facilisis. Quis pellentesque eget vel Nunc semper vel semper condimentum semper eleifend ...</p>
          <a class="readmore" href="#">Read More</a> </div>
        <!-- end post -->
        <!-- begin post -->
        <div class="post">
          <h2><a href="#">Search Engine Optimization</a></h2>
          <p class="date"><a href="#">Meyang</a> on Feb 10, 2009 | <a href="#">100 Comments</a></p>
          <div class="thumb"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_thumb6.jpg" alt="Example Image">
          </a></div>
          <p>Vel illum qui dolorem eum fugiat quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi</p>
          <a class="readmore" href="#">Read More</a> </div>
        <!-- end post -->
        <!-- begin post -->
        <div class="post">
          <h2><a href="#">Videos</a></h2>
          <p class="date"><a href="#">Bang</a> on Feb 12, 2009 | <a href="#">8 Comments</a></p>
          <div class="thumb"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_thumb7.jpg" alt="Example Image">
          </a></div>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et ligula. Aliquam risus magna, vehicula nec, ultrices venenatis, fermentum id, sem. Aliquam sem pede, volutpat vitae, consequat vel, eleifend sed, turpis.</p>
          <a class="readmore" href="#">Read More</a> </div>
        <!-- end post -->
        <!-- begin post -->
        <div class="post">
          <h2><a href="#">Marketing</a></h2>
          <p class="date"><a href="#">Goma</a> on Feb 10, 2009 | <a href="#">20 Comments</a></p>
          <div class="thumb"><a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_thumb8.jpg" alt="Example Image">
          </a></div>
          <p>Risus est orci tristique Duis aliquam nunc ut at facilisis pede. At in rhoncus tellus augue morbi tellus tincidunt dui nunc facilisis. Quis pellentesque eget vel Nunc semper vel semper condimentum semper eleifend ...</p>
          <a class="readmore" href="#">Read More</a> </div>
        <!-- end post -->
      </div>
      <!-- BEGIN bottom -->
      <div id="bottom">
        <!-- begin popular posts -->
        <div class="box">
          <h2>Popular Posts</h2>
          <ul>
            <li><a href="#">Lorem Ipsum Dolor Sit Amer Vel</a></li>
            <li><a href="#">CDO Bloggers Meet-up January 09</a></li>
            <li><a href="#">Trip to Cebu this May</a></li>
            <li><a href="#">Suspendise Aliquam Fermentum</a></li>
            <li><a href="#">Nunch Semprr Est Quis Ut</a></li>
          </ul>
        </div>
        <!-- end popular posts -->
        <!-- begin recent posts -->
        <div class="box">
          <h2>Recent Posts</h2>
          <ul>
            <li><a href="#">Semper at in rhoncus tellus augue morbi tellus tincidunt dui nunc facilisis risus magma.</a></li>
            <li><a href="#">Lorem Ipsum Dolor Sit Amer Vel</a></li>
            <li><a href="#">Nunch Semprr Est Quis Ut</a></li>
            <li><a href="#">Suspendise Aliquam Fermentum</a></li>
          </ul>
        </div>
        <!-- end recent posts -->
        <!-- begin recent comments -->
        <div class="box">
          <h2>Recent Comments</h2>
          <ul class="comments">
            <li><a href="#">mhai:</a> Nunch Semprr Est Quis Ut</li>
            <li><a href="#">ragpalizer:</a> Suspendise Aliquam</li>
            <li><a href="#">cloyd:</a> Ipsum Dolor Sit Amer Vel</li>
            <li><a href="#">kishmair:</a> CDO Bloggers Meet-up</li>
            <li><a href="#">smiley:</a> Vel Ut Aliquam Fermentum</li>
          </ul>
        </div>
        <!-- end recent comments -->
      </div>
      <!-- END bottom -->
    </div>
    <!-- END content -->
    <!-- BEGIN sidebar -->
    <div id="sidebar">
      <!-- begin pages -->
      <h2>Pages</h2>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Links</a></li>
        <li><a href="#">Archives</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <!-- end pages -->
      <!-- begin archives -->
      <h2>Archives</h2>
      <ul>
        <li><a href="#">December 2008</a></li>
        <li><a href="#">November 2008</a></li>
        <li><a href="#">October 2008</a></li>
        <li><a href="#">September 2008</a></li>
        <li><a href="#">August 2008</a></li>
      </ul>
      <!-- end archives -->
      <!-- begin blogroll -->
      <h2>Blogroll</h2>
      <ul>
        <li><a href="#">Dart's Photography</a></li>
        <li><a href="#">Entertainment Portal</a></li>
      </ul>
      <!-- end blogroll -->
      <!-- begin categories -->
      <h2>Categories</h2>
      <ul>
        <li><a href="#">Advertising</a></li>
        <li><a href="#">Entertainment</a></li>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Lifestyle</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Wordpress Themes</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Videos</a></li>
      </ul>
      <!-- end categories -->
      <!-- begin meta -->
      <h2>Meta</h2>
      <ul>
        <li><a href="#">Login</a></li>
      </ul>
      <!-- end meta -->
      <!-- begin tags -->
      <h2>Tags</h2>
      <div class="tags"> <a href="#">Link</a> </div>
      <!-- end tags -->
      <!-- begin flickr photos -->
      <h2>Flickr Photos</h2>
      <div class="flickr"> <a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_flickr1.jpg" alt="Example Image"></a> <a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_flickr2.jpg
      </a> <a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_flickr3.jpg" alt="Example Image">
      </a> <a href="#"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_flickr4.jpg" alt="Example Image">
      </a> </div>
      <!-- end flickr photos -->
      <!-- begin featured video -->
      <h2>Featured Video</h2>
      <div class="video"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/_video.jpg" alt="Example Image"> </div>
      <!-- end featured video -->
    </div>
    <!-- END sidebar -->
    <div class="break"></div>
  </div>
  <!-- END body -->
  <!-- BEGIN footer -->
  <div id="footer">Copyright &copy; 2009 - <a href="#">Website Name</a> &middot; All Rights Reserved | Template by: <a href="http://www.wpthemedesigner.com/">WordPress Designer</a> | Get More <a href="#">Free CSS Templates</a> </div>
  <!-- END footer -->
</div>
<!-- END wrapper -->
</body>
</html>
