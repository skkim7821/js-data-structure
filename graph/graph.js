import daggy from 'daggy';
require('../lib/import-ramda')();

function Vertex(label) {
	this.label = label;
}

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
	}
	this.marked = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.marked[i] = false; 
	}

	this.edgeTo = [];
}

Graph.of = (v) => {
	return new Graph(v);
};

Graph.prototype = {
	addEdge(v,w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	},
	showGraph() {
		for (var i = 0; i < this.vertices; ++i) {
			console.log(i + " -> ");
			for (var j = 0; j < this.vertices; ++j) {
				if (this.adj[i][j] != undefined) console.log(this.adj[i][j] + ' ');
			}
		}
	},
	dfs(v) {
		this.marked[v] = true;
		this.edgeTo.push(v);

		if (this.adj[v] !=  undefined) console.log('Visited vertex: ' + v);
		for (let w in this.adj[v] ) {
			let val = this.adj[v][w];
			if (!this.marked[val]) {
				this.dfs(val)
			}
		}
	},
	bfs(s) {
		let queue = [];
		this.marked[s] = true;
		queue.push(s);
		while ( queue.length > 0) {
			let v = queue.shift();
			if (v != undefined) console.log('Visited vertex: ' + v);

			for (let w in this.adj[v]) {
				let val = this.adj[v][w];
				if (!this.marked[val]) {
					this.edgeTo[val] = v;
					this.marked[val] = true;
					queue.push(val);
				}
			}
		}
	},
	pathTo(v) {
		this.dfs(v);
		let source = 0;

		// if (!this.hasPathTo(v)) {
		// 	return undefined;
		// }

		let path = [];

		let i = 0;
		while(true) {
			path.push(this.edgeTo[i]);
			if (source == this.edgeTo[i]) break;
			i++;
		}

		return path;
	},
	hasPathTo(v) {
		return this.marked[v];
	},
	topSort() {
		let stack = [];
		let visited = [];
		for (let i =0; i < this.vertices; i++) {
			visited[i] = false;
		}

		for (let i = 0; i < this.vertices; i++) {
			if (visited[i] == false) {
				this.topSortHelper(i, visited, stack);
			}
		}

		for (let i = 0; i < stack.length; i++) {
			if (stack[i] != undefined && stack[i] != false) {
				console.log(this.vertexList[stack[i]]);
			}
		}
	},
	topSortHelper(v, visited, stack) {
		visited[v] = true;
		for (let w in this.adj[v]) {
			let val = this.adj[v][w];
			if (!visited[val]) {
				this.topSortHelper(visited[val], visited, stack);
			}
		}
		stack.push(v);
	}
}


// let g = Graph.of(5);
// g.addEdge(0,1);
// g.addEdge(0,2); 
// g.addEdge(1,3); 
// g.addEdge(2,4); 
// g.showGraph();



// let g = Graph.of(10);
// g.addEdge(0, 3);
// g.addEdge(3, 1);
// g.addEdge(3, 2);
// g.addEdge(3, 8);
// g.addEdge(8, 6);
// g.addEdge(8, 7);
// g.addEdge(8, 9);
// g.addEdge(9, 4);
// g.addEdge(9, 5);
// const vertex = 1;
// let paths = g.pathTo(vertex);
// console.log('paths: ', paths.join('-'));

// let g = Graph.of(14);
// g.addEdge(0,1);
// g.addEdge(1,4);
// g.addEdge(4,5);
// g.addEdge(5,13);
// g.addEdge(0,2);
// g.addEdge(2,6);
// g.addEdge(6,7);
// g.addEdge(7,8);
// g.addEdge(0,3);
// g.addEdge(3,9);
// g.addEdge(9,10);
// g.addEdge(10,11);
// g.addEdge(11,12);
// const vertex = 12;
// let paths = g.pathTo(vertex);
// console.log('paths: ', paths.join('-'));


// let g = Graph.of(31);
// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(0,3);
// g.addEdge(2,4);
// g.addEdge(4,6);
// g.addEdge(4,14);
// g.addEdge(4,9);
// g.addEdge(6,5);
// g.addEdge(6,7);
// g.addEdge(6,8);
// g.addEdge(14,13);
// g.addEdge(14,15);
// g.addEdge(14,16);
// g.addEdge(9,10);
// g.addEdge(9,11);
// g.addEdge(9,12);
// g.addEdge(15,17);
// g.addEdge(17,18);
// g.addEdge(17,19);
// g.addEdge(17,20);
// g.addEdge(18,24);
// g.addEdge(18,25);
// g.addEdge(18,26);
// g.addEdge(20,23);
// g.addEdge(20,22);
// g.addEdge(20,21);
// g.addEdge(26,27);
// g.addEdge(27,30);
// g.addEdge(27,29);
// g.addEdge(27,28);
// const vertex = 21;
// let paths = g.pathTo(vertex);
// console.log('paths: ', paths.join('-'));

console.time('graph');
let g = Graph.of(6);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(2,5);

let paths = g.pathTo(5);
console.log('paths: ', paths.join('-'));
g.vertexList = ['CS1', 'CS2', 'Data Structure', 'Assembly Language', 'Operation Systems', 'Algorithm'];
const list = paths.reduce((acc, a) => {
	acc.push(g.vertexList[a]);
	return acc
}, []);

console.log(list.reverse().join('--'));
console.timeEnd('graph');
// g.showGraph();
// g.topSort();



// var vertex = 4;
// var paths = g.pathTo(vertex);

// while (paths.length > 0) {
// 	if (paths.length > 1) { 
// 		console.log(paths.pop() + '-');
// 	} else {
// 		console.log(paths.pop());
// 	}
// }
