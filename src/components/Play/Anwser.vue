<template>
	<div class="answer">
		<div class="bg" v-show="show">
			<div class="prompt">{{msg}}</div>
		</div>
		<ul class="lists">
			<transition-group enter-active-class='animated zoomInRight'>
				<li v-for='(val,index) in list' :class='{right:val.isRight,wrong:val.isWrong}' @click="choiceIt(val,index)" v-model="idx" :key='index'>
					{{val.ans}} <span></span>
				</li>
			</transition-group>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	var vm = new Vue();
	export default{
		name:'answer',
		data(){
			return{
				list:[],
				isRight:'',
				isWrong:'',
				idx:'',
				show:false,
				msg:'正在跳转到下一题...',
				arrs:[]
			}
		},
		props:['toData'],
		methods:{
			choiceIt(val,index){
				if(val.state){
					Vue.set(val,'isRight',true);
					this.arrs[this.idx] = 'T';
					window.localStorage.setItem('arr',this.arrs);
				}else{
					Vue.set(val,'isWrong',true)
					this.arrs[this.idx] = 'F';
					window.localStorage.setItem('arr',this.arrs);
				}
				this.show = true;
				var n = this.idx+1;
				if(n==10){
					this.msg = '回答完了，然后呢...';
					setTimeout(function(){
						location.href = './end.html'
					},1000)
					return;
				}
				//this.$emit('child-tell-me-something',n);
				setTimeout(function(){
					location.href = './play'+n+'.html'
				},1000)
			}
		},
		mounted(){
			var _this = this;
			_this.list = _this.toData.anwser;
			_this.idx = _this.toData.index;
			var arr = window.localStorage.getItem('arr');
			_this.arrs = arr.split(',');
			_this.$emit('siblings',_this.idx+1);
		}
	}
	
</script>

<style scoped>
	.lists li{
		width: 6.92rem;
		height: 1.19rem;
		background: url('http://test2.lawyer-says.cn/images/24.png') no-repeat;
		background-size: cover;
		margin-bottom: 0.15rem;
		text-align: center;
		line-height: 1.19rem;
		color: #0A71A8;
		font-size: 0.3rem;
		position: relative;
	}
	.lists li span{
		position:absolute;
		right: 0.31rem;
		top: 50%;
		width: 0.6rem;
		height: 0.6rem;
		margin-top: -0.3rem;
		
	}
	.lists li.right{
		color: #fff;
		background: url('http://test2.lawyer-says.cn/images/36.png') no-repeat;
		background-size: cover;
	}
	.lists li.wrong{
		color: #fff;
		background: url('http://test2.lawyer-says.cn/images/35.png') no-repeat;
		background-size: cover;
	}
	.lists li.right span{
		background: url('http://test2.lawyer-says.cn/images/33.png') no-repeat;
		background-size: cover;
	}
	.lists li.wrong span{
		background: url('http://test2.lawyer-says.cn/images/34.png') no-repeat;
		background-size: cover;
	}
	.bg{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,0);
		z-index: 99;
	}
	.prompt{
		width: 6.9rem;
		height: 0.6rem;
		font-size: 0.28rem;
		line-height: 0.6rem;
		border-radius: 0.6rem;
		text-align: center;
		position: absolute;
		bottom: 0.4rem;
		left: 50%;
		margin-left: -3.45rem;
		background: #EFEFEF;
	}
	.zoomInRight{
		animation-delay: 0.5s;
		-webkit-animation-delay: 0.5s;
	}
</style>