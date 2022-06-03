//A Needle in the Haystack
function findNeedle(haystack) {
	return haystack.indexOf('needle')>0 ? `found the needle at position ${haystack.indexOf('needle')}` : "Your function didn't return anything"
	}