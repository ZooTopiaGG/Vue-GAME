<template>
	<div class="begin">
		<div id="img">
			<transition enter-active-class='animated infinite bounce'>
				<img v-show="show" src="../../common/images/03.png"/>
			</transition>
		</div>
		<div id="img1">
			<transition enter-active-class='animated rotateInDownLeft'>
				<img v-show="show" src="../../common/images/37.png" @click="beginGame"/>
			</transition>
		</div>
		<div id="img2">
			<transition enter-active-class='animated bounceInDown'>
				<img v-show="show" src="../../common/images/04.png"/>
			</transition>
		</div>
		<down></down>
	</div>
</template>

<script>
	import Down from '../Down/Down'
	export default{
		name:'begin',
		data(){
			return{
				msg:'我是begin',
				show:false
			}
		},
		methods:{
			beginGame(){
				location.href = './play0.html';
			}
		},
		components:{
			Down
		},
		mounted(){
			this.show = true;
			var arr = ['F','F','F','F','F','F','F','F','F','F'];
			window.localStorage.setItem('arr',arr);
		}
	}
</script>

<style scoped>
	#img img{
		width: 4.7rem;
		height: 4.24rem;
		margin: 1.13rem 0 1.55rem 0;
	}
	#img1 img{
		width: 2.96rem;
		height: 0.97rem;
	}
	#img2 img{
		width: 1.28rem;
		height: 1.85rem;
		margin-top: 0.6rem;
		margin-left: 3.2rem;
		position: relative;
		z-index: 9;
	}
	.bounceInDown{
		animation-delay: 1s;
		-webkit-animation-delay: 1s;
	}
	.rotateInDownLeft{
		animation-delay: 2s;
		-webkit-animation-delay: 2s;
	}
</style>