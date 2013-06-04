var Card = function(name)
{
	this.name = name;
}

var Deck = function()
{
	this.cards = [];
};

var PileShuffle = function(deck, num)
{
	var piles = [];
	var cards = [];
	var p = 0;
	for (var i = 0; i < deck.cards.length; i++) {
		piles[p].push(deck.cards[i]);
		p = p == num ? 0 : p + 1;
	}

	for (var i = 0; i < piles.length; i++) {
		cards = cards.concat(piles[i]);
	}
}

Card.prototype.constructor = Card;

Deck.prototype.constructor = Deck;
Deck.prototype.pileShuffle = PileShuffle;