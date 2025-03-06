export default function healthIndicator(player) {
	if (player.health > 50) {
		return 'healthy';
	} else if (player.health < 15) {
		return 'critical';
	} else {
		return 'wounded';
	}
}
