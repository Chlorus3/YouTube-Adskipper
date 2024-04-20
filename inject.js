function CheckForAds() {
	button = document.getElementsByClassName('ytp-ad-skip-button-modern ytp-button')[0] 
	|| document.getElementsByClassName('ytp-skip-ad-button')[0];
	if(button){
		button.click();
	}
	
}

setInterval(CheckForAds, 200);