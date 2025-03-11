export default function sortHeroes(player) {
	return player.sort((a, b) => b.health - a.health);
}