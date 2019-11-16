<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Geek Prank - Sitemap</title>
	<link rel="canonical" href="https://geekprank.com/sitemap.html" />
	<meta name="description" content="A list of the links found on GeekPrank.com to make navigation easier on the website."/>
	<meta name="keywords" content="geek,prank,sitemap" />
	<meta property="og:title" content="Geek Prank - Sitemap" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://geekprank.com/sitemap.html" />
	<meta property="og:image" content="https://geekprank.com/images/screenshot.jpg">
	<meta property="og:description" content="A list of the links found on GeekPrank.com to make navigation easier on the website." />

	<link rel="stylesheet" type="text/css" media="screen" href="style.css">
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="scripts.js"></script>

</head>

<body>
	<img src="images/background.jpg" class="bg" alt="fullscreenbackground" />
	<div id="page-wrap">
		<ul title="" id="main_icons">
			<li id="ie_icon"><a><span>Internet Explorer</span></a></li>		
			<li class="blueScreen" id="my_computer"><a><span>My Computer</span></a></li>
			<li class="blueScreen" id="my_documents"><a><span>My Documents</span></a></li>
			<li class="blueScreen" id="recycle_bin"><a><span>Recycle Bin</span></a></li>
			<li class="blueScreen" id="my_network_places"><a><span>My Network Places</span></a></li>
		</ul>

		<div class="window minimized" title="minesweeper" id="minesweeperWindow">
			<h2><span></span>Minesweeper</h2>
			<ul class="window_control">
				<li class="min"><a title="Minimise"><span></span>Minimize</a></li>
				<li class="max"><a title="Maximise"><span></span>Maximize</a></li>
				<li class="close"><a title="Close"><span></span>Close</a></li>
			</ul>
			<div class="windowBlueBorder">
				<iframe id="sweeperIframe" src="minesweeper/index.html" width="536" height="350" scrolling="no"></iframe>
			</div>
		</div>
		
		<div class="window ui-widget-content" title="tetris" id="tetrisWindow">
			<h2><span></span>Tetris</h2>
			<ul class="window_control">
				<li class="min"><a title="Minimise"><span></span>Minimize</a></li>
				<li class="max"><a title="Maximise"><span></span>Maximize</a></li>
				<li class="close"><a title="Close"><span></span>Close</a></li>
			</ul>
			<div class="windowBlueBorder">
				<iframe id="tetrisIframe" src="tetris/index.html" width="536" height="350" scrolling="no"></iframe>
			</div>
		</div>
		
		<div class="window neverStarted" title="winamp" id="winampWindow">
			<ul class="window_control">
				<li class="min"><a title="Minimise"><span></span>Minimize</a></li>
				<li class="close"><a title="Close"><span></span>Close</a></li>
			</ul>
			<div id="winampVisualition">
			</div>
			<div id="winampSongTitle">
				3. KeysNKrates - All The Time
			</div>
			<div id="winampTrackWrap">
				<div id="winampTrack">
				</div>
			</div>
			<div id="winampButtons">
				<a title="Previous" id="Previous">
				</a>
				<a title="Play" id="Play">
				</a>
				<a title="Pause" id="Pause">
				</a>
				<a title="Stop" id="Stop">
				</a>
				<a title="Next" id="Next">
				</a>
			</div>			
			<div id="winampPlaylist">
				<ul>
					<li title="AsiaCruise-Selfish.mp3">1. Asia Cruise - Selfish<span>0:32</span></li>
					<li title="J-Wright-MessinProdKyleBeats.mp3">2. Messin Prod Kyle Beats<span>0:29</span></li>
					<li class="selected" title="KeysNKrates-AllTheTime.mp3">3. All The Time <span>0:39</span></li>
					<li title="PartyPupils-MsJackson.mp3">4. Sorry Ms Jackson <span>0:26</span></li>
					<li title="SightlowxJives-GottaMakeaMove.mp3">5. Gotta Make a Move<span>0:34</span></li>
					<li title="ZaraLarsson-AintMyFault-TULE-Remix.mp3">6. Aint My Fault<span>0:39</span></li>
				</ul>
			</div>
			<div id="youtubeIframe">		
			</div>
		</div>
		
		<div class="window" title="welcome" id="welcomeWindow">
			<div id="welcomeBubleWrap">
				<div>
					<strong>Start the Prank</strong>
					Go full screen (<span class="fullScreenKey">F11</span>) and close the Welcome Window
				</div>
			</div>
			<h2><span></span>Welcome to Geek Prank!</h2>
			<ul class="window_control">
				<li class="min"><a title="Minimise"><span></span>Minimize</a></li>
				<li class="max"><a title="Maximise"><span></span>Maximize</a></li>
				<li class="close"><a title="Close"><span></span>Close</a></li>
			</ul>
			<div class="windowBlueBorder" title="">
				<ul class="fileMenu">
					<li><a>File</a></li>
					<li><a>Edit</a></li>
					<li><a>View</a></li>
					<li><a>Favorites</a></li>
					<li><a>Tools</a></li>
					<li><a>Help</a></li>
				</ul>
				<div class="toolbar">
					<a><img src="images/toolbar1.png" alt="windows toolbar" /></a>
					<a><img src="images/toolbar2.png" alt="windows toolbar" /></a>
					<a href="index.html"><img src="images/toolbar3.png" alt="windows toolbar" /></a>
					<img src="images/toolbar-sep.png" alt="toolbar separator" />
					<a><img src="images/toolbar4.png" alt="windows toolbar" /></a>
					<a><img src="images/toolbar5.png" alt="windows toolbar" /></a>
					<img src="images/toolbar-sep.png" alt="toolbar separator" />
					<a><img src="images/toolbar6.png" alt="windows toolbar" /></a>
				</div>
				<div class="addressBar">
					<span>Address</span>
					<div class="wrapAddressInput">
						<img src="images/pc-icon.png" alt="pc icon" />
						<input name="addressBarInput" id="addressBarInput" class="takeMeHome" type="text" value="GeekPrank.com">
						<div class="dropdown-ico">
						</div>
					</div>
					<div class="greenGo">
						<img src="images/greenGo.png" alt="dropdown ico" /> Go
					</div>					
				</div>
				<div class="windowTwoPanelsWrap">
					<div class="windowTwoPanels">
						<div class="left">
							<div class="leftPanelPanel">
								<h3>Prank Your Friends!<img src="images/dropup-ico.png" alt="dropup" /></h3>
								<div>
									<ul>
										<li><img src="images/ico/wait.png" alt="wait ico" /> Wait for your friend to leave</li>
										<li><img src="images/ico/open.png" alt="open ico" /> Open this website...</li>
										<li><img src="images/ico/pc.png" alt="pc ico" /> on his computer...</li>
										<li><img src="images/ico/phone.png" alt="phone ico" /> or mobile phone.</li>
										<li><img src="images/ico/screen.png" alt="screen ico" /> Go fullscreen (<span class="fullScreenKey">F11</span> key).</li>
										<li><img src="images/ico/close.png" alt="prank ico" /> Close this intro window. </li>
										<li><img src="images/ico/prank.png" alt="prank ico" /> And wait... :) </li>
									</ul>							
								</div>
							</div>
						</div>
						<div class="right">
							<div>
								<article>
									<div class="nemtulfontos" id="aprilCountdown"><strong>&#127880;&#128520;&#127881;</strong></div>
									<h1>Geek Prank - Sitemap</h1>
									<p><strong>A list of the links found on GeekPrank.com to make navigation easier on the website. </strong></p>
									<nav>
										<section>
											<h4>Main</h4>
											<ul>
												<li><a href="index.html">GeekPrank Home - Pranks</a></li>
												<li><a href="just-prank/index.html">Just a prank bro!</a></li>
												<li><a href="hacker/index.html">Hacker Typer</a><br />
													&nbsp;&nbsp;&nbsp;(<a href="hacker/typer/index.html">Rus</a> 
													<a href="hacker/simulatoru/index.html">Tur</a> 
													<a href="hacker/simulador/index.html">Esp</a> 
													<a href="hacker/simulador-pt/index.html">Por</a> 
													<a href="hacker/simulator/index.html">Ger</a> 
													<a href="hacker/simulateur/index.html">Fra</a>)
												</li>
												<li><a href="hacker/bitcoin-miner/index.html">Bitcoin miner</a></li>
											</ul>
										</section>
										<section>
											<h4>Fake Updates</h4>
											<ul>
												<li><a href="apple/index.html">Apple IOS</a></li>
												<li><a href="win7-update/index.html">Windows 7</a></li>
												<li><a href="win10-update/index.html">Windows 10</a></li>
												<li><a href="winxp-update/index.html">Windows XP</a></li>
											</ul>
										</section>
										<section>
											<h4>Simulators</h4>
											<ul>
												<li><a href="bios/index.html">Fake Bios CMOS</a></li>
												<li><a href="jurassic-park/index.html">Jurassic Park Surveillance</a></li>
												<li><a href="jurassic-park/console/index.html">Jurassic Park Security Console</a></li>
												<li><a href="boot-device-not-found/index.html">Startup Screen - Boot Device Not Found</a></li>
												<li><a href="fake-dos/index.html">Online Dos</a></li>
												<li><a href="norton-commander/index.html">Norton Commander Simulator</a></li>
												<li><a href="xp-simulator.php">Windows XP Simulator</a></li>
											</ul>
										</section>
										<section>
											<h4>Animations</h4>
											<ul>							
												<li><a href="pipes/index.html">3D Pipes Screensaver</a></li>
												<li><a href="blue-death/index.html">Windows Blue Death - BSOD</a></li>
												<li><a href="crack/index.html">Cracked Mobile Screen</a></li>								
												<li><a href="fbi-warning/index.html">FBI Warning Screen Joke</a></li>
												<li><a href="fake-virus/index.html">Fake Virus Prank</a></li>
												<li><a href="cracked-screen.1">Cracked Desktop Screen</a></li>
												<li><a href="matrix-code-rain/index.html">Matrix Code Rain</a></li>
												<li><a href="static-tv-noise/index.html">Static TV Noise</a></li>
											</ul>
										</section>
										<section>
											<h4>Miscellaneous</h4>
											<ul>							
												<li><a href="minesweeper/index.html">Online Minesweeper Game</a></li>
												<li><a href="tetris/index.html">Online Tetris Game</a></li>
												<li><a href="internet-explorer-ie7-emulator.php">Internet Explorer 7 Emulator</a></li>
												<li><a href="hacker/amp/index.html">Hacker AMP</a></li>
												<li><a href="blank.php">Blank Windows Desktop</a></li>
												<li><a href="sitemap.php">Site Map</a></li>
												<li><a href="terms-and-conditions.php">Terms and Conditions</a></li>
											</ul>
										</section>
									</nav>
									
								</article>
								<footer>
									<div class="footer">
										<table>
											<tr>
												<td>
													This website is using cookies to collect anonymous visitor analytics.<br />
													Please use the website responsibly.
												</td>
												<td>
													<a href="mobile/index.html">Mobile</a> | <a href="xp-simulator.php">XP</a> | <a href="terms-and-conditions.php" target="_blank">T&amp;C</a> | <a href="sitemap.php" target="_blank">Sitemap</a> <br />&copy;&nbsp;2019&nbsp;wwweeebbb
												</td>
											</tr>
										</table>
									</div>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="window" title="internet" id="internetWindow">
			<h2><span></span>Internet Explorer - IE7</h2>
			<ul class="window_control">
				<li class="min"><a title="Minimise"><span></span>Minimize</a></li>
				<li class="max"><a title="Maximise"><span></span>Maximize</a></li>
				<li class="close"><a title="Close"><span></span>Close</a></li>
			</ul>
			<div class="windowBlueBorder" title="">
				<ul class="fileMenu">
					<li><a>File</a></li>
					<li><a>Edit</a></li>
					<li><a>View</a></li>
					<li><a>Favorites</a></li>
					<li><a>Tools</a></li>
					<li><a>Help</a></li>
					<li class="windowslogo"><img src="images/windowslogo.png" alt="windowslogo" /></li>
				</ul>
				<div class="toolbar">
					<a title="Back" id="ieBack"><img src="images/ie1.png" alt="ie toolbar" /></a>
					<a title="Forward" id="ieForward"><img src="images/ie2.png" alt="ie toolbar" /></a>
					<a title="Stop"><img src="images/ie3.png" alt="ie toolbar" /></a>
					<a title="Refresh"><img src="images/ie4.png" alt="ie toolbar" /></a>
					<a title="Home" id="ieHome"><img src="images/ie5.png" alt="ie toolbar" /></a>
					<img src="images/ie-sep.png" alt="ie separator" />
					<a title="Search" id="ieSearch"><img src="images/ie6.png" alt="ie toolbar" /></a>
					<a title="Favorites"><img src="images/ie7.png" alt="ie toolbar" /></a>
					<a title="Media"><img src="images/ie8.png" alt="ie toolbar" /></a>
					<a title="History"><img src="images/ie9.png" alt="ie toolbar" /></a>
					<img src="images/ie-sep.png" alt="ie separator" />
					<a title="Mail"><img src="images/ie10.png" alt="ie toolbar" /></a>
					<a title="Print"><img src="images/ie11.png" alt="ie toolbar" /></a>
					<a><img src="images/ie12.png" alt="ie toolbar" /></a>
				</div>
				<div class="addressBar">
					<span>Address</span>
					<div class="wrapAddressInput">
						<img src="images/ie-addressbar-ico.png" alt="ie icon" />
						<input name="addressBarInput" id="webAddressInput" type="text" value="google.com">
						<div class="dropdown-ico">
						</div>
					</div>
					<div class="greenGo" id="goToWebAddress">
						<img src="images/greenGo.png" alt="dropdown ico" /> Go
					</div>
					<div class="ieLinks">
						Links <img src="images/ieLinks.png" alt="ieLinks ico" />
					</div>
				</div>
				<div id="ieWindowInner">
					<div id="ieIframe">
					</div>					
				</div>
				<div class="windowBottomBar">
					<img src="images/iedone.png" alt="iedone" class="iedone" />
					<img src="images/iefooter.png" alt="iefooter" class="iefooter" />					
				</div>
			</div>
		</div>

		<div id="taskbar" title="">
			<div id="start">
				<h2 id="startbutton"><a><span id="startbuttongraphic"></span>Start</a></h2>

				<div id="startmenu">

					<h3><img src="images/default_icon.jpg" alt="logo" width="48" height="48">My Computer</h3>
					<div id="recentprograms">

						<dl id="internetbrowser">
							<dt>Internet</dt>
							<dd><a>Mozilla Firefox</a></dd>
						</dl>

						<dl class="blueScreen" id="emailclient">
							<dt>E-mail</dt>
							<dd><a>Mozilla Thunderbird</a></dd>
						</dl>

						<ul id="recent">
							<li id="mediaplayer"><a>Windows Media Player</a></li>
							<li id="startMS"><a>Minesweeper</a></li>
							<li id="startTetris"><a>Tetris</a></li>
							<li id="startCP"><a>Command Prompt</a></li>
							<li id="startNC"><a>Norton Commander</a></li>
							<li id="startWinamp"><a>Winamp</a></li>
						</ul>
					</div>

					<div id="myplaces">
						<ul id="my">
							<li id="myrecent"><a id="myrecent_link">My Recent Documents</a>
								<ul id="myrecent_menu">
									<li class="textdoc"><a>document.txt</a></li>
									<li class="mywebsite"><a>stuff</a></li>
									<li class="textdoc"><a>untitled.txt</a></li>
									<li class="mywebsite"><a>GeekPrank.com</a></li>
								</ul>
							</li>
							<li id="mymusic"><a>My Music</a></li>
							<li id="mycomp"><a>My Computer</a></li>
							<li id="mynetwork"><a>My Network Places</a></li>
						</ul>
						<ul>
							<li id="controlpanel"><a><em>C</em>ontrol Panel</a></li>
							<li id="printers"><a>Printers and Faxes</a></li>
						</ul>
						<ul>
							<li id="helpsupport"><a><em>H</em>elp and Support</a></li>
							<li id="search"><a><em>S</em>earch</a></li>
							<li id="run"><a><em>R</em>un</a></li>
						</ul>
					</div>

					<ul id="allprograms">
						<li class="blueScreen"><a id="allprograms_link">All Programs</a>
							<ul id="allprograms_menu">
								<li id="winupdate"><a>Windows Update</a></li>
								<li class="folder"><a>Accessories</a></li>
								<li class="folder"><a>Games</a></li>
								<li class="folder"><a>Startup</a></li>
								<li id="allPrograms1"><a>Internet Explorer</a></li>
								<li id="allPrograms2"><a>MSN Explorer</a></li>
								<li id="allPrograms3"><a>Windows Messenger</a></li>
								<li id="allPrograms4"><a>Outlook Express</a></li>
								<li id="allPrograms5"><a>Remote Assistance</a></li>
								<li id="allPrograms6"><a>Windows Media Player</a></li>
							</ul>
						</li>
					</ul>

					<ul id="close">
						<li id="logoff"><a><em>L</em>og Off</a></li>
						<li id="shutdown"><a>Sh<em>u</em>t Down</a></li>
					</ul>
				</div>
				
				<div id="run_dialog">
					<h2 id="run_dialog_handle"><span></span>Run</h2>
					<ul class="window_control">
						<li class="min"><a><span></span>Minimise</a></li>
						<li class="max"><a><span></span>Maximise</a></li>
						<li class="close" id="run_box_close"><a><span></span>Close</a></li>
					</ul>

					<div>
						<p>Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.</p>
						Run Dialog
						<label for="run_open">Open:</label>
						<input type="text" name="run_open" id="run_open" value="cmd">

						<ul class="buttons">
							<li id="runCmdOk"><span></span><input type="submit" value="OK"></li>
							<li id="run_box_cancel"><span></span><input type="reset" value="Cancel"></li>
							<li><span></span><input type="button" value="Browse"></li>
						</ul>
					</div>
				</div>
				<h3>Quick Launch</h3>
				<ul id="quicklaunch">
					<li id="quick_desktop"><a><span></span>Show Desktop</a></li>
					<li id="quick_ie"><a><span></span>IE 7</a></li>
					<li id="quick_winamp"><a><span></span>Winamp</a></li>
					<li id="quick_cmd"><a><span></span>CMD</a></li>
				</ul>

				<ul id="openprograms">
					<li title="welcome" id="openwelcome" class="openTab"><a>Welcome</a></li>
					<li title="internet" id="openinternet" class="openTab"><a>Internet</a></li>
					<li title="winamp" id="openwinamp" class="openTab"><a>Winamp</a></li>
					<li title="minesweeper" id="openminesweeper"><a>Minesweeper</a></li>
					<li title="tetris" id="opentetris" class="openTab"><a>Tetris</a></li>
				</ul>

				<h3>System Tray</h3>

				<ul id="systemtray">
					<li id="winamp"><a><span></span>Winamp</a></li>
					<li id="msn"><a><span></span>MSN</a></li>
					<li id="lan"><a><span></span>LAN</a></li>
				</ul>

				<p id="clock"></p>

			</div>
		</div>
	</div>
	<div id="redirectIframe"></div>
	
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-90658565-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-90658565-1');
	</script>
</body>
</html>