export const prerender = true;
export const ssr = true;

export const load = async () => {
	const expirences = [
		{
			company: 'Accenture',
			position: 'Software Engineer',
			startDate: '08-08-2023',
			endDate: 'Present',
			location: 'Hybrid',
			roles: [
				{
					title: 'API Dev',
					project: 'Think Beyond #Royal London',
					summary: [
						'Developed and maintained the APIs for the Accenture platform.',
						'Implemented new features and enhanced existing functionality.',
						'Collaborated with cross-functional teams to deliver high-quality software.',
						'Ensured the security and reliability of the APIs.',
						'Performed code reviews and provided feedback to improve code quality.'
					]
				},
				{
					title: 'AI Dev',
					project: 'GenAI PoC #Royal London',
					summary: [
						'Developed and maintained the AI models for the Accenture platform.',
						'Implemented new features and enhanced existing functionality.',
						'Collaborated with cross-functional teams to deliver high-quality software.',
						'Ensured the security and reliability of the AI models.',
						'Performed code reviews and provided feedback to improve code quality.'
					]
				}
			]
		}
	];

	return {
		expirences
	};
};
