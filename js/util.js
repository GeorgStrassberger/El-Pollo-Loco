/**
 * Show HTMLElement by ID with removing CSS display none;
 * @param {string} id
 */
function showID(id) {
	document.getElementById(id).classList.remove("d-none");
}

/**
 * HIde HTMLElement by ID with adding CSS display none;
 * @param {string} id
 */
function hideID(id) {
	document.getElementById(id).classList.add("d-none");
}
