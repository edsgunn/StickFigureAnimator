function setup() {
	angleMode(DEGREES)
	FPS = 5
	createCanvas(windowWidth, windowHeight);
	sensitivity = 8
	background(255);
	currentNode = -1
	
	//Nodes for stickfigure
	mainNode =  new primaryNode(width/2,2*height/3,0)
	Node1 =  new Node(mainNode,height/6,45,1)
	Node2 = new Node(Node1,height/6,45,2)
	Node3 = new Node(mainNode,height/6,135,3)
	Node4 = new Node(Node3,height/6,-45,4)
	Node5 = new Node(mainNode,height/6,270,5)
	Node6 = new Node(Node5,height/10,135,6)
	Node7 = new Node(Node5,height/10,225,7)
	Node8 = new Node(Node6,height/10,-45,8)
	Node9 = new Node(Node7,height/10,-135,9)
	Node10 = new circleNode(Node5,height/10,0,10)
	nodes = [mainNode,Node1,Node2,Node3,Node4,Node5,Node6,Node7,Node8,Node9,Node10]
	
	
	frames = []
	mode = 'animate'
	frame = 0
	
	//Functions for buttons
	frameObj = new newFrame()
	FPSPlusObj = new FPSPlus()
	FPSMinusObbj = new FPSMinus()
	modePlaybackObj = new modePlayback()
	modeDrawObj = new modeDraw()
	modeAnimateObj = new modeAnimate()
	resetObj = new reset()
	nodePlaceObj = new nodePlace()
	
	//Buttons
	frameButton = new button(10,10,50,50,frameObj)
	playButton = new button(70,10,50,50,modePlaybackObj)
	fpsMinusButton = new button(10,70,32,32,FPSMinusObbj)
	fpsPlusButton = new button(88,70,32,32,FPSPlusObj)
	resetButton = new button(10,110,110,40,resetObj)
	drawButton = new button(10,160,110,40,modeDrawObj)
	buttons = [frameButton,playButton,fpsMinusButton,fpsPlusButton,resetButton,drawButton]
	animateButton = new button(10,160,110,40,modeAnimateObj)
	mainNodeButton = new button(10,10,50,65,nodePlaceObj)
	nodeButton= new button(70,10,50,65,modeAnimateObj)
	circleNodeButton = new button(10,85,50,65,modeAnimateObj)
	removeButton = new button(70,85,50,65,modeAnimateObj)
	drawButtons =[animateButton,mainNodeButton,nodeButton,circleNodeButton,removeButton]
	
}

function draw() {
	switch (mode) {
		default:
			noStroke()
			frameRate(60)
			background(255)
			for (let b of buttons) {
				b.disp()
			}
			fill('grey')
			square(49,70,32)
			fill('white')
			triangle(75,15,75,55,115,35)
			textSize(32);
			textAlign(CENTER,CENTER)
			text('RESET',65,130)
			text('DRAW',65,180)
			text(frames.length, 35, 35);
			textSize(16);
			text(FPS,65,86)
			textSize(20);
			text('+',104,86)
			text('-',26,86)
			if (frames.length != 0) {
				for(let node of frames[frames.length-1]) {
					node.dispShadow()
				}
			}
			for (let node of nodes) {
				node.dispLine()
			}
			for (let node of nodes) {
				node.dispJoint()
			}
			if (currentNode > 0) {
				xLength = mouseX-nodes[currentNode].rootNode.x 
				yLength = mouseY-nodes[currentNode].rootNode.y 
				nodes[currentNode].angle = findAngle(xLength,yLength) - nodes[currentNode].rootNode.angle
			}
			else if (currentNode == 0) {
				nodes[currentNode].x = mouseX
				nodes[currentNode].y = mouseY
			}
			for (let node of nodes) {
					node.update()
			}
			break;
		case 'playback':
			if (frames.length != 0){
				background(255)
				frameRate(FPS)
				for (let node of frames[frame]) {
					node.dispLine()
				}
				for (let node of frames[frame]) {
					node.dispJoint()
				}
				frame ++
				if (frame >= frames.length) {
					mode = 'animate'
					frame = 0
				}
			} 
			else {
				mode = 'animate'
			}
			break;
		case 'draw':
			noStroke()
			frameRate(60)
			background(255)
			for (let b of drawButtons) {
				b.disp()
			}
			fill('white')
			textSize(24);
			textAlign(CENTER,CENTER)
			text('ANIMATE',65,180)
			for (let node of nodes) {
				node.dispLine()
			}
			for (let node of nodes) {
				node.dispJoint()
			}
			if (currentNode > 0) {
				xLength = mouseX-nodes[currentNode].rootNode.x 
				yLength = mouseY-nodes[currentNode].rootNode.y 
				nodes[currentNode].angle = findAngle(xLength,yLength) - nodes[currentNode].rootNode.angle
			}
			else if (currentNode == 0) {
				nodes[currentNode].x = mouseX
				nodes[currentNode].y = mouseY
			}
			for (let node of nodes) {
					node.update()
			}
			break;
	}
}

function mousePressed() {
	for(i = 0; i < nodes.length; i++) {
		// if (mode == 'animate') {
			if ((mouseX >= nodes[i].x - sensitivity) && (mouseX <= nodes[i].x + sensitivity) && (mouseY >= nodes[i].y - sensitivity) && (mouseY <= nodes[i].y + sensitivity)) {
				currentNode = i
			}
		// }
	}
}

function mouseReleased() {
	currentNode = -1
	if (mode == 'draw'){
	}
}

function mouseClicked() {
	if (mode == 'animate') {
		for (let b of buttons) {
			b.update()
		}
	}
	else if (mode == 'draw') {
		for (let b of drawButtons) {
			b.update()
		}
	}
}
function keyTyped() {
  if (key === 'f' && mode == 'animate') {
		frameObj.update()
	}
	return false;
}