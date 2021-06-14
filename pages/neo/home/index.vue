<template>
	<view class="u-wrap">
		<view  @click="openMyCenter">
			<user-info></user-info>
		</view>
		
		<view class="u-menu-wrap">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop"
				:scroll-into-view="itemId">
				<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item"
					:class="[current == index ? 'u-tab-item-active' : '']" @click.stop="swichMenu(index)">
					<u-icon :name="item.icon"></u-icon>
				</view>
				<view class="u-tab-item">
					<button class="functionBtn" open-type="share">
						<u-icon name="share"></u-icon>
					</button>
					
				</view>
				<view class="u-tab-item">
					<button class="functionBtn" open-type="contact">
						<u-icon name="server-fill"></u-icon>
					</button>
					
				</view>
				<!-- <view class="u-tab-item my-avatar" @click.stop="myInfo">
					<get-avatar></get-avatar>
				</view> -->
			</scroll-view>
			<scroll-view :scroll-top="scrollRightTop" scroll-y scroll-with-animation class="right-box"
				@scroll="rightScroll">
				<view class="page-view">
					<!-- <view class="class-item" v-for="(item,index) in menuList" :id="'item'+index" :key="index">
						<view class="item-title">
							<text>{{item.name}}</text>
						</view>
						<component :is="item.component"></component>
					</view> -->
					<view class="class-item" id="item0">
						<view class="item-title">
							<text>美食推荐</text>
						</view>
						<food-recommend></food-recommend>
					</view>
					<view class="class-item" id="item1">
						<view class="item-title">
							<text>吃货语录</text>
						</view>
						<food-quotations></food-quotations>
					</view>
					<view class="class-item" id="item2">
						<view class="item-title">
							<text>外卖红包</text>
						</view>
						<coupon></coupon>
					</view>
					<view class="class-item" id="item4">
						<view class="item-title">
							<text>吃什么</text>
						</view>
						<eat-what></eat-what>
						<my-center></my-center>
					</view>

				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import userInfo from '@/components/userInfo.vue';
	import getAvatar from '@/components/getAvatar.vue';
	import foodRecommend from './components/foodRecommend.vue';
	import foodQuotations from './components/foodQuotations.vue';
	import coupon from './components/coupon.vue';
	import eatWhat from './components/eatWhat.vue';
	import myCenter from '@/components/myCenter.vue';
	export default {
		components: {
			userInfo,
			getAvatar,
			foodRecommend,
			foodQuotations,
			coupon,
			eatWhat,
			myCenter
		},
		data() {
			return {
				scrollTop: 0, //tab标题的滚动条位置
				oldScrollTop: 0,
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				itemId: '', // 栏目右边scroll-view用于滚动的id
				// menuList:[
				// 	{name:"美食推荐",component:"food-recommend"},
				// 	{name:"吃货语录",component:"food-quotations"},
				// 	{name:"外卖红包",component:"coupon"},
				// 	{name:"吃什么",component:"eat-what"}
				// ],
				tabbar: [{
						name: "美食推荐",
						icon: "home",
					}, {
						name: "吃货语录",
						icon: "pushpin",
					}, {
						name: "外卖红包",
						icon: "red-packet",
					}, {
						name: "吃什么",
						icon: "question-circle",
					},
					// {
					// 	name: "热量表",
					// 	icon: "order",
					// },
					// {
					// 	name: "分享",
					// 	icon: "share",
					// }, {
					// 	name: "客服",
					// 	icon: "server-fill",
					// },
				],
				menuItemPos: [],
				arr: [],
				scrollRightTop: 0, // 右边栏目scroll-view的滚动条高度
				timer: null, // 定时器

			}
		},
		onLoad() {

		},
		onReady() {
			this.getMenuItemTop()
		},
		methods: {
			openMyCenter() {
				this.$u.route({
					url: '/pages/neo/myCenter/index',
				})
			},
			// 点击左边的栏目切换
			async swichMenu(index, item) {

				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (index == this.current) return;
				this.scrollRightTop = this.oldScrollTop;
				this.$nextTick(function() {
					this.scrollRightTop = this.arr[index];
					this.current = index;
					this.leftMenuStatus(index);
				})
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
						resolve();
					}).exec();
				})
			},
			// 观测元素相交状态
			async observer() {
				this.tabbar.map((val, index) => {
					let observer = uni.createIntersectionObserver(this);
					// 检测右边scroll-view的id为itemxx的元素与right-box的相交状态
					// 如果跟.right-box底部相交，就动态设置左边栏目的活动状态
					observer.relativeTo('.right-box', {
						top: 0
					}).observe('#item' + index, res => {
						if (res.intersectionRatio > 0) {
							let id = res.id.substring(4);
							this.leftMenuStatus(id);
						}
					})
				})
			},
			// 设置左边菜单的滚动状态
			async leftMenuStatus(index) {
				// this.current = index;
				// // 如果为0，意味着尚未初始化
				// if (this.menuHeight == 0 || this.menuItemHeight == 0) {
				// 	await this.getElRect('menu-scroll-view', 'menuHeight');
				// 	await this.getElRect('u-tab-item', 'menuItemHeight');
				// }
				// // 将菜单活动item垂直居中
				// this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取右边菜单每个item到顶部的距离
			getMenuItemTop() {
				new Promise(resolve => {
					let selectorQuery = uni.createSelectorQuery();
					selectorQuery.selectAll('.class-item').boundingClientRect((rects) => {
						// 如果节点尚未生成，rects值为[](因为用selectAll，所以返回的是数组)，循环调用执行
						if (!rects.length) {
							setTimeout(() => {
								this.getMenuItemTop();
							}, 10);
							return;
						}
						rects.forEach((rect) => {
							// 这里减去rects[0].top，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
							this.arr.push(rect.top - rects[0].top);
							resolve();
						})
					}).exec()
				})
			},
			// 右边菜单滚动
			async rightScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (this.timer) return;
				if (!this.menuHeight) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
				}
				setTimeout(() => { // 节流
					this.timer = null;
					// scrollHeight为右边菜单垂直中点位置
					let scrollHeight = e.detail.scrollTop + this.menuHeight / 2;
					for (let i = 0; i < this.arr.length; i++) {
						let height1 = this.arr[i];
						let height2 = this.arr[i + 1];
						// 如果不存在height2，意味着数据循环已经到了最后一个，设置左边菜单为最后一项即可
						if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
							this.leftMenuStatus(i);
							return;
						}
					}
				}, 10)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 100rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}

	.my-avatar {
		border-radius: 50rpx;
	}

	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}

	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}

	.right-box {
		flex: 1;
		background-color: rgb(250, 250, 250);
	}

	.page-view {
		padding: 16rpx;
	}

	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}

	.class-item:last-child {
		min-height: calc(100vh - 200rpx);
		// min-height: 100vh;
	}

	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
		padding-bottom: 10rpx;
	}

	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}

	.item-container {
		display: flex;
		flex-wrap: wrap;
	}

	.thumb-box {
		width: 33.333333%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}

	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
	
	.functionBtn{
		width: 100%;
		background: transparent;
		height: 100%;
		line-height: 120rpx;
		font-size: 32rpx;
		color: #333;
	}
	.functionBtn::after{
		border: none;
	}
</style>
