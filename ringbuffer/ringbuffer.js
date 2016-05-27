function RingBuffer(limit) {
  this._limit = limit;
  this._offset = 0; 
  this._buffer = [];
}

RingBuffer.prototype = {
	get: function getFn(i) {
	    return this._buffer[i]
	},
	push: function pushFn(data) {
	    this._buffer[this._offset] = data, this._offset = (this._limit + this._offset + 1) % this._limit
	},
	peek: function peekFn() {
	    var lastValueOffset = (this._limit + this._offset - 1) % this._limit;
	    return this._buffer[lastValueOffset]
	},
	pop: function popFn() {
	    var lastValueOffset = (this._limit + this._offset - 1) % this._limit,
	        lastValue = this._buffer[lastValueOffset];
	    return lastValue && (this._buffer[lastValueOffset] = void 0, this._offset = lastValueOffset), lastValue
	},
	hasData: function hasDataFn() {
	    return !!this.peek()
	},
	reset: function resetFn() {
	    this._offset = 0, this._buffer = []
	},
	buffer: function bufferFn() {
	    return this._buffer
	},
	limit: function limitFn(limit) {
	    this._limit = limit
	},
	ordered: function orderedFn() {
	    return this._buffer.slice(this._offset).concat(this._buffer.slice(0, this._offset))
	},
	entries: function entriesFn() {
	    for (var arr = this.ordered(), i = 0; i < arr.length; ++i) console.log("---- Entry [" + i + "] ----"), console.log(arr[i])
	}	
}
