import { getGithubStars } from '$lib/utils';
import { describe, it, expect } from 'vitest';

describe('getGithubStars', () => {
	it('returns the number of stars for a GitHub repository', async () => {
		const stars = await getGithubStars('Tsuzat', 'tsuzat.com');
		expect(stars);
	});
});
