import $ from 'jquery'

// 点击导航栏
$('#nav').on('click', 'li', function () {
	$(this).addClass('active').siblings().removeClass('active')
	const index = $(this).index()

	// 显示当前点击的内容，隐藏其他内容
	$(`#content${index}`).show()
	$(`#content${index}`)
		.siblings()
		.filter((_i, el) => el.id.includes('content'))
		.hide()
})

let bannerIndex = 0
const bannerLength = $('#banner img').length
$
// 点击轮播图上一张下一张
$('#prev').on('click', () => {
	// 当前索引等于0时，提示已经是第一张
	if (bannerIndex === 0) return alert('已经是第一张')
	// 当前索引减一
	bannerIndex--
	console.log('prev')
	// 设置元素属性左移当前元素的宽度
	$('#banner').css('transform', `translate(-${bannerIndex}00%, 0)`)
})
$('#next').on('click', () => {
	// 当前索引等于图片数量-1时，提示已经是最后一张
	if (bannerIndex === bannerLength - 1) return alert('已经是最后一张')
	// 当前索引加一
	bannerIndex++
	console.log('next')
	// 设置元素属性左移当前元素的宽度
	console.log("🚀 ~ $ ~ $('banner'):", $('#banner'))
	$('#banner').css('transform', `translate(-${bannerIndex}00%, 0)`)
})
