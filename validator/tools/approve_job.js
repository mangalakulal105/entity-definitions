const githubHelper = require('./ghHelper');

githubHelper.createReviewPR('🤖: Everything looks correct ✅', githubHelper.GH_PR_EVENT_APPROVE)
  .error(error => console.error(`Error sending the request to Github ${error}`));
