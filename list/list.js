import daggy from 'daggy';
require('../lib/import-ramda')();

const List = daggy.tagged();

List.of = () => new List;

List.prototype = {
	dataStore: [],
	pos: 0,
	clear() {
		this.setStore([]);
	},
	find(el) {
		return this.dataStore.indexOf(el);
	},
	insert(findEl, inputEl) {
		const idx = this.find(nextEl);
		if (idx > -1) {
			this.setStore([ 
				...this.dataStore.slice(0, idx), 
				inputEl, 
				...this.dataStore.slice(idx + 1)
			]);
			return true;
		}

		return false;
	},
	append(el) {
		this.setStore([...this.dataStore, el]);
	},
	remove(el) {
		const idx = this.find(el);
		if (idx > -1) {
			this.setStore([
				...this.dataStore.slice(0, idx), 
				...this.dataStore.slice(idx + 1)
			]);			
			return true;
		} 
		return false;
	},
	setStore(newDatastore) {
		this.dataStore = newDatastore;
	},
	front() {
		this.pos = 0;
	},
	end() {
		this.pos = this.dataStore.length - 1;
	},
	prev() {
		if (this.pos > 0) {
			--this.pos;
		}
	},
	next() {
		if (this.pos < this.length()) {
			++this.pos;
		}
	},
	length() {
		return this.dataStore.length;
	},
	toString() {
		return this.dataStore;
	},
	currPos() {
		return this.pos;
	},
	moveTo(position) {
		this.pos = position;
	},
	getElement() {
		console.log(this.dataStore[this.pos]);
		return this.dataStore[this.pos];
	},
	contains(el) {
		if (this.find(el) > -1) {
			return true;
		}
		return false;
	}
};

let names = List.of();
names.append('sk');
names.append('what?');
names.append('bembo');
names.append('WTF');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');

console.log(names.length());

for (names.front(); names.currPos() < names.length(); names.next()) {
	names.getElement();
}


