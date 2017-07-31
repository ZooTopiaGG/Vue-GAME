<template>
	<div class="questions">
		<transition enter-active-class='animated bounceInLeft'>
			<div id="img" v-show="show">
				<div>
					<span>{{title}}</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	
	export default{
		name:'questions',
		data(){
			return{
				title:'',
				show:false
			}
		},
		props:['toData'],
		mounted(){
			this.show = true;
			this.title = this.toData;
		}
	}
	
</script>

<style scoped>
	#img{
		width: 6.91rem;
		height: 2.64rem;
		margin: 0 auto;
		background: url('http://test2.lawyer-says.cn/images/23.png') no-repeat;
		background-size: cover;
		margin-top: 0.21rem;
		color: #0a71a8;
		font-size: 0.3rem;
		margin-bottom: 0.21rem;
	}
	#img div{
		width: 5.91rem;
		height: 2.14rem;
		margin: 0 auto ;
		padding-top: 0.25rem;
	}
	.bounceInLeft{}
</style>