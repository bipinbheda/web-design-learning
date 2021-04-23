<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Third</title>
	<link rel="stylesheet" href="styles.css">
	<!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"> -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/bootstrap.css">
</head>
<body>
	<header id="site-header" class="position-fixed w-100">
		<div class="nav-menu d-none d-sm-flex justify-content-between flex-column flex-sm-row text-center">
			<div class="menus">
				<ul class="un-default d-flex flex-column flex-sm-row">
					<li><a href="#">Home</a></li>
					<li><a href="#">Band</a></li>
					<li><a href="#">Tour</a></li>
					<li><a href="#">Contact</a></li>
					<li class="nasted-menu"><a href="#">More</a>
						<ul class="drop-down un-default">
							<li><a href="#">Sub Menu 1</a></li>
							<li><a href="#">Sub Menu 2</a></li>
							<li><a href="#">Sub Menu 3</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="search">
				<a href="#" class="un-default">
					<i class="fa fa-search"></i>
				</a>
			</div>
		</div>
		<div class="bar d-block mr-auto d-sm-none text-white"><a href="#	"><i class="fa fa-bars text-white"></i></a></div>
	</header>
	<main>
		<section class="slider">
			<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="images/la.jpg" class="d-block w-100" alt="images-la">
						<div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="images/la.jpg" class="d-block w-100" alt="images-la">
						<div class="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Some representative placeholder content for the second slide.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="images/la.jpg" class="d-block w-100" alt="images-la">
						<div class="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</section>
		<section class="brand site-gape">
			<div class="container-2 mx-auto">
				<div class="content">
					<h2 class="text-center">The Brand</h2>
					<p class="opacity"><i>We love music</i></p>
					<p class="text-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
						ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				<div class="boxes mt-5">
					<div class="row text-center">
						<div class="col-sm-4">
							<p>Name</p>
							<img src="images/bandmember.jpg" class="w-75" alt="bandmember.jpg">
						</div>
						<div class="col-sm-4">
							<p>Name</p>
							<img src="images/bandmember.jpg" class="w-75" alt="bandmember.jpg">
						</div>
						<div class="col-sm-4">
							<p>Name</p>
							<img src="images/bandmember.jpg" class="w-75" alt="bandmember.jpg">
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="tour-dates site-gape">
			<div class="section-title">
				<h3 class="text-center text-white text-uppercase">Tour dates</h3>
				<p class="text-center text-white-50"><i>Remember to book your tickets!</i></p>
			</div>
			<div class="container-2 mx-auto">
				<div class="horizontal-row my-3 bg-white">
					<ul class="un-default">
						<li class="p-2 border-bottom">
							September
							<span class="bg-danger py-2 px-1">Sold Out</span>
						</li>
						<li class="p-2 border-bottom">
							October
							<span class="bg-danger py-2 px-1">Sold Out</span>
						</li>
						<li class="p-2 border-bottom d-flex justify-content-between">
							<span class="w-25">November</span>
							<span class="bg-danger px-2 rounded-circle d-inline-block">3</span>
						</li>
					</ul>
				</div>
				<div class="row my-3 cards">
					<div class="col-lg-4 px-2">
						<div class="card bg-white">
							<img src="images/newyork.jpg" alt="newyork.jpg">
							<div class="box-content p-3">
								<h5>New York</h5>
								<span class="date opacity">Fri 27 Nov 2016</span>
								<p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
								<a href="#" class="btn btn-dark rounded-0">Buy Ticket</a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 px-2 mt-2 mt-lg-0">
						<div class="card bg-white">
							<img src="images/newyork.jpg" alt="newyork.jpg">
							<div class="box-content p-3">
								<h5>New York</h5>
								<span class="date opacity">Fri 27 Nov 2016</span>
								<p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
								<a href="#" class="btn btn-dark rounded-0">Buy Ticket</a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 px-2 mt-2 mt-lg-0">
						<div class="card bg-white">
							<img src="images/newyork.jpg" alt="newyork.jpg">
							<div class="box-content p-3">
								<h5>New York</h5>
								<span class="date opacity">Fri 27 Nov 2016</span>
								<p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
								<a href="#" class="btn btn-dark rounded-0">Buy Ticket</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="contact site-gape">
			<div class="container-2 mx-auto">
				<div class="section-title">
					<h3 class="text-center text-dark text-uppercase">Contact</h3>
					<p class="text-center opacity"><i>Fan? Drop a note!</i></p>
				</div>
				<div class="row">
					<div class="col-lg-6 line-gape">
						<div class="address">
							<i class="fa fa-map-marker" style="width:30px"></i>
							<span> Chicago, US</span>
						</div>
						<div class="phone">
							<i class="fa fa-phone" style="width:30px"></i>
							Phone: +00 151515
						</div>
						<div class="email">
							<i class="fa fa-envelope" style="width:30px"> </i>
							Email: mail@mail.com
						</div>
					</div>
					<div class="col-lg-6 mt-3 mt-lg-0">
						<form action="">
							<div class="row">
								<div class="col-md-6 p-0 pad-right">
									<input type="text" name="Name" placeholder="Name">
								</div>
								<div class="col-md-6 p-0 mt-2 mt-md-0">
									<input type="text" name="email" placeholder="Email">
								</div>
								<div class="col-md-12 p-0 mt-2">
									<input type="text" name="message" placeholder="Message">
								</div>
							</div>
							<div class="row">
								<input type="button" value="SEND" class="btn btn-dark rounded-0 ml-auto mt-2">
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<section class="image-section site-gape">
			<img src="images/map.jpg" alt="image-map" class="img-fluid">
		</section>
	</main>
	<footer class="site-footer">
		<div class="container-2 mx-auto text-center py-4">
			<ul class="social-icon un-default">
				<li><i class="fa fa-facebook-official w3-hover-opacity"></i></li>
				<li><i class="fa fa-instagram w3-hover-opacity"></i></li>
				<li><i class="fa fa-snapchat w3-hover-opacity"></i></li>
				<li><i class="fa fa-pinterest-p w3-hover-opacity"></i></li>
				<li><i class="fa fa-twitter w3-hover-opacity"></i></li>
				<li><i class="fa fa-linkedin w3-hover-opacity"></i></li>
			</ul>
			<p class="opacity">Powered by <a href="https://www.w3schools.com/w3css/default.asp" class=" text-dark" target="_blank">w3.css</a></p>
		</div>
	</footer>
	<script type="text/javascript" src="assets/bootstrap.bundle.js"></script>
</body>
</html>