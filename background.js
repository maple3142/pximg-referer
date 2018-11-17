chrome.webRequest.onBeforeSendHeaders.addListener(
	details => {
		const ref = details.requestHeaders.find(x => x.name === 'Referer')
		const hasPixivReferer = ref && ref.value.includes('pixiv')
		if (!hasPixivReferer) {
			details.requestHeaders.push({
				name: 'Referer',
				value: 'https://www.pixiv.net/'
			})
		}
		return {
			requestHeaders: details.requestHeaders
		}
	},
	{ urls: ['<all_urls>'] },
	['requestHeaders', 'blocking']
)
