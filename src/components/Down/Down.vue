<template>
	<div class="end">
		<transition enter-active-class='animated bounceInUp'>
			<div v-show="show" class="footer flex flex-1 flex-pack-justify">
				<div class="footer-txt">
					<p>律师说APP</p>
					<p>权威法律咨询</p>
				</div>
				<div class="footer-btn">
					<img src="../../common/images/38.png" @click="downApp"/>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	
	export default{
		name:'end',
		data(){
			return {
				show:false
			}
		},
		methods:{
			downApp(){
				location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.mci.lawyer";
			}
		},
		mounted(){
			this.show = true
		}
	}
	
</script>

<style scoped>
	.bounceInUp{
		animation-delay: 1.5s;
		-webkit-animation-delay: 1.5s;
	}
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 2.0rem;
		width: 100%;
		background: rgba(0,0,0,0.3);
		text-align: left;
		z-index: 0;
	}
	.footer-txt{
		margin-left: 0.64rem;
		font-size: 0.42rem;
		color: #fff;
	}
	.footer-txt>p:nth-child(1){
		margin:0.48rem 0 0.22rem 0;
	}
	.footer-txt>p:nth-child(2){
		margin: 0 0 0 0.86rem;
	}
	.footer-btn{
		margin-right: 0.64rem;
	}
	.footer-btn img{
		width: 1.95rem;
		height: 0.7rem;
		margin-top: 0.66rem;
	}
</style>