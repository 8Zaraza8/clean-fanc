import healthIndicator from '../healthIndicator';

test('Character with health 90 should be healthy', () => {
	expect(healthIndicator({ name: 'Pasha', health: 80 })).toBe('healthy');
});

test('Character with health 50 should be wounded', () => {
	expect(healthIndicator({ name: 'Sasha', health: 50 })).toBe('wounded');
});

test('Character with health 15 should be wounded', () => {
	expect(healthIndicator({ name: 'Boris', health: 15 })).toBe('wounded');
});

test('Character with health 10 should be critical', () => {
	expect(healthIndicator({ name: 'Nastya', health: 13 })).toBe('critical');
});