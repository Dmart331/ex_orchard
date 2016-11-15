"use strict";

let height = 0;
let output = document.getElementById('output');
function Plant() {
	this.height = 0;

}

Plant.prototype.increaseHeight = function(growth) {
	this.height = this.height + growth ;
};


Plant.prototype.decreaseHeight = function (growth) {
	this.height = this.height - growth;
};

function Tree(){
	this.branches = 0;
}

Tree.prototype = new Plant();

Tree.prototype.grow = function(amount){
	this.branches += amount;
};

Tree.prototype.trim = function(amount){
	if(amount){
		 this.branches = this.branches - amount;
	}

	else 
		this.branches = this.branches - 1;

	};

let pearTree = new Tree();
let oakTree = new Tree();

let newSet = setInterval(growTree , 1000);

function growTree(){
pearTree.increaseHeight(2);
oakTree.increaseHeight(5);

height ++;
if(oakTree.height % 10 === 0){
	oakTree.branches += 1;
}

if(height % 10 === 0){
	oakTree.trim(2);
}

if(height % 10 === 0){
	pearTree.trim(1);
}

if(pearTree.height % 10 === 0){
	pearTree.branches += 2;
}

if (height === 30){
	clearInterval(newSet);
}

output.innerHTML += `<p> Your Pear Tree is ${pearTree.height} ft tall and has
						${pearTree.branches} branches</p>
						Your Oak Tree is ${oakTree.height}ft tall and has ${oakTree.branches} branches</p>
						${height}<br>`;



}






console.log(pearTree);
















