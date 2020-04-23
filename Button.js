function button(x,y,w,h,linkClass) {
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.linkClass = linkClass
	
	this.disp = function()
	{
		if (intersect(this.x,this.y,this.w,this.h)){
			stroke('red')
		}
		else {
			noStroke()
		}
		fill('grey')
		rect(this.x,this.y,this.w,this.h)
		noStroke()
	}
	
	this.update = function(){
		if (intersect(this.x,this.y,this.w,this.h)){
			this.linkClass.update()
		}
	}
}
function newFrame(){
	this.update = function(){
		objects = clone(nodes)
		frames.push(objects)
	}
}
function FPSPlus(){
	this.update = function(){
		FPS ++
	}
}
function FPSMinus(){
	this.update = function(){
		FPS --
	}
}
function modePlayback(){
	this.update = function(){
		mode = 'playback'
	}
}
function modeAnimate(){
	this.update = function(){
		mode = 'animate'
	}
}
function modeDraw(){
	this.update = function(){
		mode = 'draw'
	}
}
function reset(){
	this.update = function(){
		frames = []
		frame = 0
	}
}
function nodePlace(){
	this.update = function(){
		nodePlaced = false
	}
}