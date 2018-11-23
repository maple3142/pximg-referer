chrome.webRequest.onBeforeSendHeaders.addListener(
	details => {
		const idx = details.requestHeaders.findIndex(x => x.name.toLowerCase() === 'referer')
		if (idx !== -1) {
			details.requestHeaders.splice(idx, 1)
		}
		details.requestHeaders.push({
			name: 'Referer',
			value: 'https://www.pixiv.net/'
		})
		return {
			requestHeaders: details.requestHeaders
		}
	},
	{ urls: ['https://i.pximg.net/*'] },
	['requestHeaders', 'blocking']
)
