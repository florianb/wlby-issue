import test from 'ava'
import sinon from 'sinon'

import git from 'nodegit'

import Repository from '../src/repo'

test('can be created with a custom working directory', async t => {
	const stub = sinon.stub(git.Repository, 'open')
		.callsFake(dir => dir)

	const r = new Repository()

	await r.init()
	t.is(r.repo, process.cwd())

	await r.init('1/2/3')
	t.is(r.repo, '1/2/3')

	stub.reset()
})

test('get reference for given branch name', async t => {
	const r = new Repository()

	await r.init()

	debugger
	const ref = r.getReference('test.normal')

	t.truthy(ref)
	t.is(ref.name(), 'test.normal')
})
