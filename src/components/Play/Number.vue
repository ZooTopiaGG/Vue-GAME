<template>
	<div class="number">
		<div></div>
		<ul class="list flex flex-1 flex-pack-justify">
			<li v-for="(val,i) in nums" :class="{isChecked:i==index}">
				<i>{{val}}</i>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	var vm = new Vue();
	export default{
		name:'number',
		data(){
			return{
				nums:[1,2,3,4,5,6,7,8,9,10],
				index:''
			}
		},
		props:['toData'],
		created(){
//			vm.$on('change',function(idx){
//				alert(idx);
//				this.index = this.toData;
//			});
		},
		mounted(){
			this.index = this.toData;
		}
	}
	
</script>

<style scoped>
	.list{
		text-align: center;
		line-height: 0.48rem;
		padding:0 0.3rem;
		margin-bottom: 0.2rem;
	}
	.list li{
		color: #FFA837;
	}
	.list li i{
		display: block;
		width: 0.48rem;
		height: 0.48rem;
		background: url('http://test2.lawyer-says.cn/images/06.png') no-repeat;
		background-size: cover;
		margin: 0 auto;
	}
	.list li.isChecked{
		color: #fff;
	}
	.list li.isChecked i{
		background: url('http://test2.lawyer-says.cn/images/05.png') no-repeat;
		background-size: cover;
	}
</style>