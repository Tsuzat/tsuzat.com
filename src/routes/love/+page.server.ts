import { DATE, NICKNAME } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { list } from '@vercel/blob';
export const prerender = false;

export const actions = {
	getpic: async ({ request }) => {
		const form = await request.formData();
		const date = form.get('date') as string;
		if (!date) {
			return { message: 'No date provided.' };
		}
		const nickname = form.get('nickname') as string;
		if (!nickname) {
			return { message: 'No nickname provided.' };
		}
		let number = parseInt(form.get('number') as string);
		if (!number) {
			return { message: 'No picture no provided.' };
		}
		number--;
		if (date !== DATE || nickname !== NICKNAME) {
			return { message: 'Invalid date or nickname.' };
		}
		const data = await list();
		const files = data.blobs.map((blob) => blob.url);
		if (files.length <= number) {
			number = number % files.length;
		}
		return redirect(302, files[number]);
	}
};
