function primaryNode(x,y,id) {
	this.id = id
	this.type = 'primaryNode'
	this.x = x;
	this.y = y;
	this.angle = 0;
	
	this.dispJoint = function() {
		stroke('green')
		strokeWeight(7)
		point(this.x,this.y)
	}
	this.dispLine = function(){}
	this.dispShadow = function(){}
	this.update = function(){}
}

//rootNode is meant to be a Node, cirlceNode or primaryNode
function Node(rootNode,length,angle,id) {
	this.id = id
	this.type = 'Node'
	this.length = length;
	this.rootNode = rootNode;
	this.angle = angle;
	this.dispAngle = this.angle + this.rootNode.angle;
	this.x = this.rootNode.x + this.length * cos(this.dispAngle);
	this.y = this.rootNode.y + this.length * sin(this.dispAngle);
		
	this.update = function() {
		this.dispAngle = this.angle + this.rootNode.angle;
		this.x = this.rootNode.x + this.length * cos(this.dispAngle);
		this.y = this.rootNode.y + this.length * sin(this.dispAngle);
	}
	
	this.dispJoint = function() {
		stroke('red')
		strokeWeight(7)
		point(this.x,this.y)
	}
	this.dispLine = function() {
		stroke('black')
		strokeWeight(10);
		line(this.rootNode.x,this.rootNode.y,this.x,this.y)
	}
	this.dispShadow = function() {
		stroke('grey')
		strokeWeight(10);
		line(this.rootNode.x,this.rootNode.y,this.x,this.y)
	}
	
}
function circleNode(rootNode,length,angle,id) {
	this.id = id
	this.type = 'circleNode'
	this.length = length;
	this.rootNode = rootNode;
	this.angle = angle;
	this.dispAngle = this.angle + this.rootNode.angle;
	this.x = this.rootNode.x + this.length * cos(this.dispAngle);
	this.y = this.rootNode.y + this.length * sin(this.dispAngle);
		
	this.update = function() {
		this.dispAngle = this.angle + this.rootNode.angle;
		this.x = this.rootNode.x + this.length * cos(this.dispAngle);
		this.y = this.rootNode.y + this.length * sin(this.dispAngle);
	}
	
	this.dispJoint = function() {
		stroke('red')
		strokeWeight(7)
		point(this.x,this.y)
	}
	this.dispLine = function() {
		stroke('black')
		fill('black')
		strokeWeight(10);
		x = (this.x + this.rootNode.x)/2
		y = (this.y + this.rootNode.y)/2
		circle(x,y,this.length)
	}
	this.dispShadow = function() {
		stroke('grey')
		fill('grey')
		strokeWeight(10);
		x = (this.x + this.rootNode.x)/2
		y = (this.y + this.rootNode.y)/2
		circle(x,y,this.length)
	}
}