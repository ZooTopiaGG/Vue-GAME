<template>
	<div class="start">
		<transition enter-active-class='animated zoomInLeft' leave-active-class='animated zoomOutRight'>
	  		<div class="_t1" v-show='t1'>开始啦！开始啦！</div>
	  	</transition>
	  	<transition enter-active-class='animated zoomInRight' leave-active-class='animated zoomOutRight'>
	  		<div class="_t2" v-show='t1'>不要跟我谈智商，有本事你就来呀！</div>
	  	</transition>
	  	<transition enter-active-class='animated bounceInUp' leave-active-class='animated zoomOutRight'>
	  		<div id="img1" v-show='t1'>
		  		<img src="../../common/images/43.png"/>
		  	</div>
	  	</transition>
	  	<transition enter-active-class='animated fadeInDownBig' leave-active-class='animated zoomOutRight'>
	  		<div class="t3" v-show='t1' :key='1'>
	  			<div class="_t3" >看下面</div>
		  		<div id="img2">
		  			<img src="../../common/images/42.png"/>
		  			<span>这才是重点</span>
		  		</div>
		    </div>
	  	</transition>
	  	<transition enter-active-class='animated fadeInLeftBig' leave-active-class='animated zoomOutRight'>
	  		<div v-show='t1'>
		  		<div class="_t4">律师说APP</div>
		  		<div class="_t5">我们是专业的法律咨询平台</div>
		  	</div>
	  	</transition>
	  	<transition enter-active-class='animated fadeInRightBig' leave-active-class='animated zoomOutRight'>
		  	<div id="img3" v-show='t1'>
		  		<img src="../../common/images/41.png"/>
		  	</div>
	  	</transition>
	</div>
</template>

<script>
	export default{
		name:'start',
		data(){
			return{
				t1:false
			}
		},
		mounted(){
			this.t1 = true
			setTimeout(function(){
	    		location.href='./enter.html'
	    	},5000)
		}
	}
</script>

<style scoped>
	.zoomInRight{
		animation-delay: 0.5s;
		-webkit-animation-delay: 0.5s;
	}
	.bounceInUp{
		animation-delay: 1s;
		-webkit-animation-delay: 1s;
	}
	.fadeInDownBig{
		animation-delay: 1.5s;
		-webkit-animation-delay: 1.5s;
	}
	.fadeInLeftBig{
		animation-delay: 2s;
		-webkit-animation-delay: 2s;
	}
	.animated.fadeInRightBig{
		animation-delay: 2.5s;
		-webkit-animation-delay: 2.5s;
	}
  
  ._t1{
  	padding: 0.35rem;
  	font-size: 0.3rem;
  }
  ._t2{
  	font-size: 0.42rem;
  	margin-bottom: 0.38rem;
  }
  .t3{
  	margin-bottom: 1.5rem;
  }
  ._t4{
  	font-size: 0.57rem;
  	font-weight: bold;
  	margin-bottom: 0.29rem;
  }
  ._t5{
  	font-size: 0.40rem;
  	font-weight: bold;
  	margin-bottom: 0.44rem;
  }
  #box{
  	width: 2.0rem;
  	height: 2.0rem;
  	background: red;
  }
  #img1 img{
  	width: 4.96rem;
  	height: 2.84rem;
  	margin-bottom: 0.6rem;
  }
  #img2 span{
  	display: inline-block;
  	width: 0.24rem;
  	position: relative;
  	top: 0.68rem;
  	margin-left: 0.19rem;
  }
  #img2{
  	margin-left: 0.60rem;
  	height:1.15rem ;
  }
  #img2 img{
  	width: 0.54rem;
  	height: 1.15rem;
  }
  #img3 img{
  	width: 1.84rem;
  	height: 1.80rem;
  }
</style>