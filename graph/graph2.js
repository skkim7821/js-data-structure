function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	this.vertexList = [];
	for (var i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
		this.adj[i].push('');
	}
	this.edgeTo = [];
	this.marked = [];
	for (var i = 0; i < this.vertices; i++) {
		this.marked[i] = false;
	}
};

Graph.of = function(v) {
	return new Graph(v);
}

Graph.prototype = { 
	addEdge: function(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	},
	showGraph: function() {
		for (var i = 0; i < this.vertices; i++) {
			var str = i + ' -> ';
			for (var j = 0; j < this.vertices; j++) {
				if (this.adj[i][j] != undefined) str += this.adj[i][j] + ' ';
			}
			console.log(str);
		}
	},
	showGraph2: function() {
		var visited = [];
		var str = '';
		for (var i = 0; i < this.vertices; i++) {
			str += this.vertexList[i] + ' -> ';
			visited.push(this.vertexList[i]);
			for (var j = 0; j < this.vertices; j++) {
				if (this.adj[i][j] != undefined) {
					if (visited.indexOf(this.vertexList[j]) < 0) {
						str += this.vertexList[j] + ' ';
					}
				}
			}
			console.log(str);
			visited.pop();
		}
	},
	dfs: function(v) {
		this.marked[v] = true;
		if (this.adj[v] != undefined) console.log('Visited vertex: ' + v);
		for (var w in this.adj[v]) {
			if (w != 0) {
				var val = this.adj[v][w];
				if (!this.marked[val]) this.dfs(val);
			}
		}
	},
	bfs: function(s) {
		var queue = [];
		this.marked[s] = true;
		queue.push(s);

		while (queue.length > 0) {
			var v = queue.shift();
			if (v != undefined) console.log('Visited vertex: ' + v);

			for (var w in this.adj[v]) {
				if (w != 0) {
					var val = this.adj[v][w];
					if (!this.marked[val]) {
						this.edgeTo[val] = v;
						this.marked[val] = true;
						queue.push(val);
					}
				}
			}
		}
	},
	pathTo: function(start, end) {
		this.bfs(start);
		var source = start;
		if (!this.hasPathTo(end)) return undefined;

		var path = [];
		for (var i = end; i != source; i = this.edgeTo[i]) {
			path.push(i);
		}
		path.push(start);
		return path;
	},
	hasPathTo: function(v) {
		return this.marked[v]
	},
	topSort: function() {
		var stack = [];
		var visited = [];
		for (var i = 0; i < this.vertices; i++) {
			visited[i] = false;
		}
		for (var i = 0; i < this.vertices; i++) {
			if (visited[i] == false) this.topSortHelper(i, visited, stack);
		}
		for (var i = 0; i < stack.length; i++) {
			if (stack[i] != undefined && stack[i] != false) {
				console.log(this.vertexList[stack[i]]);
			}
		}
	},
	topSortHelper: function(v, visited, stack) {
		visited[v] = true;
		for(var w in this.adj[v]) {
			if (w != 0) {
				var val = this.adj[v][w];
				if (!visited[val]) this.topSortHelper(visited[val], visited, stack);
			}
		}
		stack.push(v);
	}
}

// var g = Graph.of(5);
// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(1,3);
// g.addEdge(2,4);
// var vertex = 3;
// var paths = g.pathTo(0,vertex);
// var str = '';
// while ( paths.length > 0) {
// 	if (paths.length > 1) str += paths.pop() + '-';
// 	else str += paths.pop();
// }
// console.log(str);


var g = Graph.of(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ['CS1', 'CS2', 'Data Structure', 
'Assembly Language', 'Operation Systems', 'Algorithms'];
g.showGraph2();
g.topSort();
