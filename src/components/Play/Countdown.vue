<template>
	<div class="countDown">
		<div id="img">
			<img src="../../common/images/07.png"/>
			<div class="progress-bar" :class="{width0:isW}" :style="progress"></div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'countDown',
		data(){
			return{
				isW:false,
				progress:{
					width:'6.48rem',
					height: '0.14rem'
				},
				n:''
			}
		},
		watch:{
			progress:{
				handler(val){
					if(parseFloat(val.width)<=0){
						if(this.n>9){
							location.href = './end.html';
							return
						}
						location.href = './play'+this.n+'.html'
					}else{}
				},
				deep:true
			}
		},
		mounted(){
			var _this = this;
			var that = this.$el.children[0].children[1];
			var _width = parseFloat(that.style.width)*100;
			console.log(_width);
			var time = setInterval(function(){
				_width -= 64.8;
				that.style.width = _width;
				_this.progress.width = parseFloat(_width/100).toFixed(2)+'rem';
				if(_width <= 0){
					_width = 0;
					clearInterval(time);
				}else{
					_width = _width;
				}
				console.log(_width)
			},1000,'linear')
			var a = location.href.split('/play')[1].split('.')[0];
			console.log(a);
			_this.n = parseInt(a)+1;
		}
	}
	
</script>

<style scoped>
	#img,#img img{
		width: 6.68rem;
		height: 0.28rem;
		position: relative;
	}
	.progress-bar{
		position: absolute;
		/*width: 6.48rem;*/
		/*height: 0.14rem;*/
		top: 50%;
		margin-top: -0.07rem;
		left: 0;
		margin-left: 0.1rem;
		border-radius:0.6rem;
		background: #FFA837;
		transition: all 1s linear;
	}
	/*.progress-bar.width0{
		width:0;
	}*/
	
	@-webkit-keyframes width0 {
	  from {
	    width: 6.48rem;
	  }
	  to {
	   width: 0;
	  }
	}
	
	@keyframes width0 {
	  from {
	    width: 6.48rem;
	  }
	  to {
	    width: 0;
	  }
	}
	.width0 {
	  -webkit-animation-name: width0;
	  animation-name: width0;
	  -webkit-animation-duration: 20s;
	  animation-duration: 20s;
	  -webkit-animation-fill-mode: both;
	  animation-fill-mode: both;
	}
	
</style>