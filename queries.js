/* eslint-disable */
// this is an auto generated file. This will be overwritten


export const getCurrentUserDetails = /* GraphQL */ `
  query GetCurrentUserDetails($input: getCurrentUserDetailsInput) {
    getCurrentUserDetails(input: $input)
  }
`;

export const getDocumentPresignedURL = /* GraphQL */ `
  query GetDocumentPresignedURL($input: commons3Input) {
    getDocumentPresignedURL(input: $input)
  }
`;

export const getOrganizationDetails = /* GraphQL */ `
  query GetOrganizationDetails($input: getOrganizationDetailsInput) {
    getOrganizationDetails(input: $input)
  }
`;

export const listApprovals = /* GraphQL */ `
  query ListApprovals($input: listApprovalsInput) {
    listApprovals(input: $input)
  }
`;

export const listBmsSettings = /* GraphQL */ `
  query ListBmsSettings {
    listBmsSettings
  }
`;

export const listBulkUploadErrors = /* GraphQL */ `
  query ListBulkUploadErrors($input: listBulkUploadErrorsInput) {
    listBulkUploadErrors(input: $input)
  }
`;

export const listCategories = /* GraphQL */ `
  query ListCategories($input: listCategoriesInput) {
    listCategories(input: $input)
  }
`;

export const listCategoryReports = /* GraphQL */ `
  query ListCategoryReports($input: listCategoryReportsInput) {
    listCategoryReports(input: $input)
  }
`;

export const listCreditsHistory = /* GraphQL */ `
  query ListCreditsHistory($input: listCreditsHistoryInput) {
    listCreditsHistory(input: $input)
  }
`;

export const listDeviceBrowserReports = /* GraphQL */ `
  query ListDeviceBrowserReports($input: listDeviceBrowserReportsInput) {
    listDeviceBrowserReports(input: $input)
  }
`;

export const listLocationReports = /* GraphQL */ `
  query ListLocationReports($input: listLocationReportsInput) {
    listLocationReports(input: $input)
  }
`;

export const listPendingReviewQuestions = /* GraphQL */ `
  query ListPendingReviewQuestions($next_token: String, $organization_id: String, $question_review_status: questionReviewStatusEnum!) {
    listPendingReviewQuestions(next_token: $next_token, organization_id: $organization_id, question_review_status: $question_review_status)
  }
`;

export const listQuestionReports = /* GraphQL */ `
  query ListQuestionReports($input: listQuestionReportsInput) {
    listQuestionReports(input: $input)
  }
`;

export const listQuestions = /* GraphQL */ `
  query ListQuestions($input: listQuestionsInput2) {
    listQuestions(input: $input)
  }
`;

export const listQuizQuestions = /* GraphQL */ `
  query ListQuizQuestions($quiz_id: String) {
    listQuizQuestions(quiz_id: $quiz_id)
  }
`;

export const listQuizQuestions2 = /* GraphQL */ `
  query ListQuizQuestions2($input: listQuizQuestions2Input) {
    listQuizQuestions2(input: $input)
  }
`;

export const listQuizRunLeaderboard = /* GraphQL */ `
  query ListQuizRunLeaderboard($input: listQuizRunLeaderboardInput) {
    listQuizRunLeaderboard(input: $input)
  }
`;

export const listQuizRunReports = /* GraphQL */ `
  query ListQuizRunReports($input: listQuizRunReportsInput) {
    listQuizRunReports(input: $input)
  }
`;

export const listQuizRunValidationErrors = /* GraphQL */ `
  query ListQuizRunValidationErrors($input: listQuizRunValidationErrorsInput) {
    listQuizRunValidationErrors(input: $input)
  }
`;

export const listQuizStats = /* GraphQL */ `
  query ListQuizStats($input: listQuizStatsInput) {
    listQuizStats(input: $input)
  }
`;

export const listQuizarreQuizRuns = /* GraphQL */ `
  query ListQuizarreQuizRuns($input: listQuizarreQuizRunsInput) {
    listQuizarreQuizRuns(input: $input)
  }
`;

export const listQuizzes = /* GraphQL */ `
  query ListQuizzes($input: listQuizzesInput) {
    listQuizzes(input: $input)
  }
`;

export const listSignUpUsers = /* GraphQL */ `
  query ListSignUpUsers($input: listSignUpUsersInput) {
    listSignUpUsers(input: $input)
  }
`;

export const listTeamLeaderboard = /* GraphQL */ `
  query ListTeamLeaderboard($input: listTeamLeaderboardInput) {
    listTeamLeaderboard(input: $input)
  }
`;

export const listTeamUsers = /* GraphQL */ `
  query ListTeamUsers($input: listTeamUsersInput) {
    listTeamUsers(input: $input)
  }
`;

export const listTeams = /* GraphQL */ `
  query ListTeams($input: listTeamsInput) {
    listTeams(input: $input)
  }
`;

export const listUserActivities = /* GraphQL */ `
  query ListUserActivities($input: listUserActivitiesInput) {
    listUserActivities(input: $input)
  }
`;

export const listUserQuizAttemptQuestions = /* GraphQL */ `
  query ListUserQuizAttemptQuestions($input: listUserQuizAttemptQuestionsInput) {
    listUserQuizAttemptQuestions(input: $input)
  }
`;

export const listUserQuizAttempts = /* GraphQL */ `
  query ListUserQuizAttempts($input: listUserQuizAttemptsInput) {
    listUserQuizAttempts(input: $input)
  }
`;

export const listUsers = /* GraphQL */ `
  query ListUsers($input: listUserInput) {
    listUsers(input: $input)
  }
`;

export const searchUser = /* GraphQL */ `
  query SearchUser($input: searchUserInput) {
    searchUser(input: $input)
  }
`;
