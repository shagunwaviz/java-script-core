(function() {

	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
function shagun()
{
    document.getElementById("demo").innerHTML="developer at waviz technologies, working hard these days.";
}
function shagun1()
{
    document.getElementById("demo").innerHTML="Waviz is an emerging Application Software Development and Outsourcing Company located in India.";
}
function shagun2()
{
    document.getElementById("demo").innerHTML=" Request received from IP address 122.176.103.59, with referer: http://www.waviz.com/contact.html";
}