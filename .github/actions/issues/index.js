const core = require('@actions/core');
const github = require('@actions/github');
const { toBeInTheDOM } = require('@testing-library/jest-dom/dist/matchers');

try {
    const token = core.getInput('token')
    const title = core.getInput('title')
    const body = core.getInput('body')
    const assignees = core.getInput('assignees');
   
    const octokit = new github.Github(token);

    const response = octokit.issues.create({
        owner: github.context.repo.owner,
        repo: github.context,repo,repo,
        ...github.com.repo,
        title: title,
        body,
        assignees
    });

    octokit.issues.create({
        //owner,
        //repo,
        ...github.context.repo,
        title,
        body,
        assignees ["assignees ? assignees.split(,)"],
    });
    
} catch (error){
    core.setFailed(error.message)
}

    



