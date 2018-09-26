/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  app.on('pull_request.opened', async context => {
    const issueComment = context.issue({ body: 'Hi there! Thank you for your pull request. This repository is a mirror of the [build repository](https://build.trac.wordpress.org/browser/trunk) and pull requests cannot be merged. If you would like to contribute code to WordPress, please check out our documentation on [contributing with Git](https://make.wordpress.org/core/handbook/contribute/git/) and join us over on [our bug tracker](https://core.trac.wordpress.org/).' })

    context.github.issues.createComment(issueComment)
    return context.github.issues.edit(context.issue({
		  state: 'closed'
		}))
  })
}
