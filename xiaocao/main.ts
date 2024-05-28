import $ from 'jquery'

// 点击导航栏
$('#nav').on('click', 'li', function (e) {
	// 如果自定义属性为true，不做任何操作
	if ($(this).attr('data-link') === 'false') return
	console.log($(this).attr('data-link'), $(this).attr('data-link') === 'false')
	$(this).addClass('active').siblings().removeClass('active')
	const index = $(this).index()
	if ($(this).attr('data-change') === 'true') {
		// 显示当前点击的内容，隐藏其他内容
		$(`#content${index}`).show()
		$(`#content${index}`)
			.siblings()
			.filter((_i, el) => el.id.includes('content'))
			.hide()
	}
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

// 点击第一级导航展开/隐藏第二级导航
$('#nav').on('click', '.nav-item', function (e) {
	if ($(this).children().attr('style') === 'display: block;')
		$(this).children().hide()
	else $(this).children().show()
})

// 悬浮第二级导航展开第三级导航

$('#nav').on('click', '.nav-sub', function (e) {
	console.log('点击了二级导航')
	if ($(e.target).attr('data-link')) {
		// 跳转链接
		location.href = $(e.target).attr('data-link') as string
		return false
	}
	if (
		$(e.target).children('.nav-sub-grand').attr('style') === 'display: block;'
	)
		$(e.target).children('.nav-sub-grand').hide()
	else $(e.target).children('.nav-sub-grand').show()

	return false
})
// 点击三级导航阻止冒泡
$('#nav').on('click', '.nav-item-grandchild', function (e) {
	console.log('点击了三级导航')

	e.stopPropagation()
})
