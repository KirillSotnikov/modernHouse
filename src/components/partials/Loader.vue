<template>
  <div class="loader_container">
    <div class="container">
      <div class="wrapper">
        <div class="cube"></div>
      </div>
      <div class="wrapper">
        <div class="cube"></div>
      </div>
      <div class="wrapper">
        <div class="cube"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$size: 3em;
$colors: #3d3d3d, #910e0e, #fdf4f5;

@mixin center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  @include center;
  left: 10%;
  transform-style: preserve-3d;
  perspective: 2000px;
	transform: rotateZ(0) rotateX(-30deg) rotateY(-45deg);
  //animation: AnimateContainer 3s infinite;
}

.wrapper {
  @include center;
  transform-style: preserve-3d;
  transform: translate3d(0em, $size, $size*.5);
  
  &:last-child{
		transform: rotateY(-90deg) rotateX(90deg) translate3d(0, $size, $size*.5);
	}
	&:first-child{
		transform: rotateZ(-90deg) rotateX(-90deg) translate3d(0, $size, $size*.5);
	}
  
  @for $i from 1 through 3{
		$color: nth($colors,$i);
		&:nth-child(#{$i}){
			.cube{
				background-color: $color;
				&:before{
					background-color: darken($color,20);
				}
				&:after{
					background-color: darken($color,10);
				}
			}
		}
	}
}

.cube {
  @include center;
  transform-style: preserve-3d;
  width: $size;
  height: $size;
  transform: translate3d(-$size*.5, -$size, 0) scaleY(0.01);
  animation: AnimateCube 3s infinite;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  &:before {
    left: 100%;
    bottom: 0;
    transform: rotateY(90deg);
    transform-origin: 0 50%;
  }
  
  &:after {
    left: 0;
		bottom: 100%;
		transform: rotateX(90deg);
    transform-origin: 0 100%;
  }
}

@keyframes AnimateContainer {
  100% {
    transform: rotateZ(360deg) rotateX(-30deg) rotateY(-45deg);
  } 
}

@keyframes AnimateCube {
  12.5% {
    transform: translate3d(-50%, -50%, 0) scaleY(1);
  }
  25% {
    transform: translate3d(-50%, -50%, 0) scaleZ(2)
  }
  37.5% {
    transform: translate3d(-50%, -50%, 0) scaleZ(1);
  }
  50% {
    transform: translate3d(0, -50%, 0) scaleX(2);
  }
  62.5% {
    transform: translate3d(-50%, -50%, 0) scaleX(1);
  }
  75% {
    transform: translate3d(-50%, 0, 0) scaleY(2);
  }
  87.5% {
    transform: translate3d(-$size*.5, -$size, 0) scaleY(0.01);
  }
  100% {
    transform: translate3d(-$size*.5, -$size, 0) scaleY(0.01);
  }
}

@media screen and (min-width: 768px){
  .container{
    left: 0;
  }
}
@media screen and (min-width: 1200px){
  .container{
    left: 10%;
  }
}
@media screen and (min-width: 1600px) {
  .container{
    left: 20%;
  }
}
@media screen and (max-width: 575px) {
  .container{
    left: -5%;
  }
}
</style>
