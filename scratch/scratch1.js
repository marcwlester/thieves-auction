var Card = function(name)
{
	this.name = name;
}

var Deck = function(cards)
{
	this.cards = cards;
};

var PileShuffle = function(deck, num)
{
	var piles = [];
	var cards = [];
	var p = 0;
	for (var i = 0; i < num; i++) {
		piles[i] = [];
	}
	for (var i = 0; i < deck.cards.length; i++) {
		piles[p].unshift(deck.cards[i]);
		p = (p + 1) == num ? 0 : p + 1;
	}

	for (var i = 0; i < piles.length; i++) {
		cards = cards.concat(piles[i]);
	}

	deck.cards = cards;
}

Card.prototype.constructor = Card;
Card.prototype.toString = function() {
	return this.name;
};

Deck.prototype.constructor = Deck;
Deck.prototype.pileShuffle = function(num) {
	PileShuffle(this, num);
}
Deck.prototype.toString = function() {
	var buf = '';
	for (var i = 0; i < this.cards.length; i++) {
		buf = buf + this.cards[i].toString() + "\n";
	}
	return buf;
};

var cards = [];
for (var i = 1; i <= 10; i++) {
	for (var j = 0; j < 4; j++) {
		cards.push(new Card(i));
	}
}

for (var i = 1; i <= 5; i++) {
	for (var j = 0; j < 4; j++) {
		cards.push(new Card('L' + i));
	}
}

var deck = new Deck(cards);