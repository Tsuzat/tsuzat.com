export class Views {
	#views = $state<number>(0);
	getViews() {
		return this.#views;
	}
	setViews(views: number) {
		this.#views = views;
	}
	async fetchViews(id: string) {
		const res = await fetch(`/api/blog/${id}`);
		if (res.ok) {
			const body = await res.json();
			this.setViews(body.views);
		} else {
			console.log(res.status);
		}
	}

	async updateViews(id: string) {
		this.setViews(this.getViews() + 1);
		await fetch(`/api/blog/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ views: this.getViews() })
		});
	}
}
