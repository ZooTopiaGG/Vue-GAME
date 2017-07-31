<template>
	<div class="end">
		<div id="img">
			<transition enter-active-class='animated bounceIn'>
				<div class="txt" v-show="show">{{grade}} 分</div>
			</transition>
			<transition enter-active-class='animated rotateInDownRight'>
				<div id="img1" v-show="show">
					<img :src="src"/>
				</div>
			</transition>
		</div>
		<div class="btn-group">
			<transition-group enter-active-class='animated zoomInLeft'>
				<div class="btn1" v-show="show" :key="1">
					<img src="../../common/images/39.png" @click="onceAgain"/>
				</div>
				<div class="btn2" v-show="show" :key="2">
					<img src="../../common/images/40.png"/>
				</div>
				<div class="txt1" v-show="show" :key="3">好玩吗！快把游戏分享给好朋友！</div>
			</transition-group>
		</div>
		<down></down>
	</div>
</template>

<script>
	import Down from '../Down/Down'
	export default{
		name:'end',
		data(){
			return{
				show:false,
				link0:[
					'http://test2.lawyer-says.cn/images/26.png',
					'http://test2.lawyer-says.cn/images/27.png',
					'http://test2.lawyer-says.cn/images/28.png',
					'http://test2.lawyer-says.cn/images/30.png',
					'http://test2.lawyer-says.cn/images/31.png',
				],
				link1:[
					'http://test2.lawyer-says.cn/images/32.png'
				],
				link2:[
					'http://test2.lawyer-says.cn/images/32.png',
					'http://test2.lawyer-says.cn/images/29.png'
				],
				src:'',
				grade:'',
				newArr:[]
			}
		},
		methods:{
			onceAgain(){
				location.href = './play0.html';
			}
		},
		components:{
			Down
		},
		created(){
			
		},
		mounted(){
			var _this = this,
			falls = '',
			arr = window.localStorage.getItem('arr');
			arr = arr.split(',');
			arr.forEach(function(val){
				if(val === 'T'){
					_this.newArr.push(val)
				}
			});
			_this.grade = _this.newArr.length;
			_this.show = true;
			if(_this.grade<8){
				falls = _this.link0;
			}else if(_this.grade <10){
				falls = _this.link1;
			}else{
				falls = _this.link2;
			}
			var i = Math.floor(Math.random()*falls.length);
			_this.src = falls[i];
		}
	}
</script>

<style scoped="scoped">
	#img{
		width:6.8rem;
		height: 5.4rem;
		background: url('http://test2.lawyer-says.cn/images/25.png') no-repeat;
		background-size: cover;
		margin: 0.64rem auto 0.88rem;
	}
	#img1{
		text-align: center;
	}
	.txt{
		margin: 0 0 0.86rem ;
		padding-top: 0.8rem;
		color: #FFA837;
		font-size: 0.9rem;
	}
	#img1 img{
		width: 6.09rem;
		height: 2.54rem;
	}
	.btn1 img,.btn2 img{
		width: 2.96rem;
		height: 0.97rem;
	}
	.btn2 img{
		margin: 0.33rem 0 0.26rem 0;
	}
	.txt1{
		font-size: 0.3rem;
		color: #fff;
	}
	.rotateInDownRight{
		animation-delay: 0.5s;
		-webkit-animation-delay: 0.5s;
	}
	.zoomInLeft{
		animation-delay: 1s;
		-webkit-animation-delay: 1s;
	}
</style>