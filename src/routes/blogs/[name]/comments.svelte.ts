import type { Comment } from '$lib/server/db/schema';

export default class Comments {
	#comments = $state<Comment[]>([]);
	getComments() {
		return this.#comments;
	}
	setComments(comments: Comment[]) {
		this.#comments = comments;
	}
	async fetchComments(id: string) {
		const res = await fetch(`/api/blog/${id}/comments`);
		if (res.ok) {
			const body = await res.json();
			this.setComments(body.comments);
		} else {
			console.log(res.status);
		}
	}
	async addComment(content: string, blogId: string, userId: string) {
		const res = await fetch(`/api/blog/${blogId}/comments`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ content, userId, blogId })
		});
		if (res.ok) {
			const body: Comment = await res.json();
			this.setComments([...this.getComments(), body]);
		} else {
			console.log(res.status);
		}
	}
}
