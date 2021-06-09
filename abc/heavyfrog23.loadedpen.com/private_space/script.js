window.logout = function() {
	fetch('/~/private_space/logout', { method: 'POST'} )
}