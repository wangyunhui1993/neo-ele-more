<template>
	<view class="content">
		<view class="content-top">
			<u-icon class="icon" name="arrow-left-double" @click="lastBtn"></u-icon>
			<view class="date">{{currentTime}} {{currentWeek}}</view>
			<u-icon class="icon" name="arrow-right-double" @click="nextBtn"></u-icon>
		</view>
		<view class="content-bottom">
			<text>{{list[currentIndex]}}</text>
		</view>
	</view>
</template>

<script>
	import util from "@/common/util.js"
	export default{
		data(){
			return {
				list:[
					'喜欢的食物就放心肚子，喜欢的人就放进心里！',
					'生活虽然很忙，但也要按时吃饭！',
					'这辈子唯一拿得起，放不下的就是——筷子',
					'让我们红尘作伴，吃得白白胖胖',
					'我的梦想是住在食家庄，日日食全食美，夜夜碟碟不休',
					'原终将把生活的锋芒熬成最温柔的浓汤',
					'目之所及皆美食',
					'请带上128个G的胃跟我去浪迹天涯，四海为家',
					'总有一天，你的心上人，会身披土豆饼，脚踩棉花糖，手持烤肉鸡腿找到你，你要等',
					'没有什么是一顿饭解决不了的问题，如果有，那就是两顿',
					'吃乎，肥也；不吃，馋也',
					'唯美食与爱不可辜负',
					'不辜负在最好的时光里，遇见美食的精致',
					'人这辈子有两样东西是别人抢不走的，一是吃进肚里的食物，另一个是藏在心里的梦想。所以做一个有梦想 的吃货，你就是无敌的',
					'一个吃货的遗言：别的什么的就得了，给我烧一份海底捞和两个服务员',
					'吃货都是善良的，因为每天只想着吃，没时间去算计别人',
					'爱上你的那天不是因为你有多好，而是因为那天阳光正好，吃得很饱',
					'最让我感动的三句话：给你带好吃的，请你去吃好吃的，带你去吃好吃的',
					'作为一个吃货。吃零食不是因为饿了、而是因为嘴巴寂寞了!',
					'我有一颗减肥的心 , 奈何我有一张吃货的嘴',
					'不开心的时候睡一觉，就让它过去吧。伤心还好，伤胃就不好了。',
					'对吃货来说，这世上唯一不能吃的就是亏。',
					'每天叫醒你的不是梦想，也不是尿急，而是不安分的灵魂，因为饿了。',
					'我一不高兴就喜欢吃东西，一吃东西就发胖，一发胖我就很不高兴。'
					
				],
				currentIndex:0,
				currentTime:"",
				currentWeek:""
			}
		},
		methods:{
			lastBtn(){
				if(this.currentIndex === 0){
					this.currentIndex = this.list.length;
				}else{
					this.currentIndex--;
				}
			},
			nextBtn(){
				if(this.currentIndex === this.list.length){
					this.currentIndex = 0;
				}else{
					this.currentIndex++;
				}
			},
		},
		created() {
			this.currentTime = util.dateFormat(new Date(),"yyyy-MM-dd");
			this.currentWeek = util.getWeek();
			this.currentIndex = util.getRandom(0,this.list.length-1);
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.content-top{
			display: flex;
			align-items: center;
			padding-bottom: 20rpx;
			.date{
				flex: 1;
				text-align: center;
			}
		}
		.content-bottom{
			border: 2px solid #333;
			border-radius: 10rpx;
			padding: 10rpx;
			background-color: #71D5A1;
		}
	}
</style>
