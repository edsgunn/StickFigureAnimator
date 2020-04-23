
function getNodePos(node) {
	radius = ((node.rootNode.x-mouseX)^2+(node.rootNode.y-mouseY)^2)^0.5
	x = (node.length/radius)*(mouseX-node.rootNode.x)
	y = (node.length/radius)*(mouseY-node.rootNode.y)
	return [x,y]
}

function findAngle(xLength,yLength) {
	x = false
	y = false
	if (xLength >= 0) {
		x = true
	}
	if (yLength >= 0) {
		y = true
	}
	if (x && y) {
		return atan(yLength/xLength)
	}
	else if (!x && y) {
		return atan(yLength/xLength) + 180
	}
	else if (x && !y) {
		return atan(yLength/xLength)
	}
	else {
		return atan(yLength/xLength) + 180
	}
}

function clone(nodes){
	objects = []
	for (let node of nodes){
		if (node.type == 'Node') {
			object = new Node(objects[node.rootNode.id],node.length,node.angle,node.id)
			objects.push(object)
		} else if (node.type == 'primaryNode') {
			object = new primaryNode(node.x,node.y,node.id)
			objects.push(object)
		} else {
			object = new circleNode(objects[node.rootNode.id],node.length,node.angle,node.id)
			objects.push(object)
		}
	}
	return objects
}

function intersect(x,y,w,h) {
	if (mouseX >= x && mouseX <= x+w && mouseY >= y && mouseY <= y+h){
		return true
	} 
	else {
		return false
	}
}