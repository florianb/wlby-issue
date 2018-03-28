const git = require('nodegit')

module.exports = class Repository {
	async init(dir) {
		if (!dir)
			dir = process.cwd()

		this.repo = await git.Repository.open(dir)
	}

	async getReference(branch) {
		const repo = this.repo
		const refs = (await repo.getReferences(
			git.Reference.TYPE.LISTALL
		))
		.filter(ref => ref.name().endsWith(branch))


		let localRef = undefined
		let remoteRef = undefined
		for (let ref of refs) {
			if (ref.isRemote()) {
				remoteRef = ref
			} else {
				localRef = ref
			}
		}

		if (localRef)
			return localRef

		if (remoteRef)
			return remoteRef

		return null
	}
}
