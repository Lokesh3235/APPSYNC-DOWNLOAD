/* AUTO-GENERATED — do not edit manually */

export const GetCurrentUserDetails = /* GraphQL */`
query GetCurrentUserDetails($input: getCurrentUserDetailsInput) {
  getCurrentUserDetails(input: $input)
}
`;

export const GetDocumentPresignedURL = /* GraphQL */`
query GetDocumentPresignedURL($input: commons3Input) {
  getDocumentPresignedURL(input: $input)
}
`;

export const GetOrganizationDetails = /* GraphQL */`
query GetOrganizationDetails($input: getOrganizationDetailsInput) {
  getOrganizationDetails(input: $input)
}
`;

export const ListApprovals = /* GraphQL */`
query ListApprovals($input: listApprovalsInput) {
  listApprovals(input: $input)
}
`;

export const ListBmsSettings = /* GraphQL */`
query ListBmsSettings {
  listBmsSettings
}
`;

export const ListBulkUploadErrors = /* GraphQL */`
query ListBulkUploadErrors($input: listBulkUploadErrorsInput) {
  listBulkUploadErrors(input: $input)
}
`;

export const ListCategories = /* GraphQL */`
query ListCategories($input: listCategoriesInput) {
  listCategories(input: $input)
}
`;

export const ListCategoryReports = /* GraphQL */`
query ListCategoryReports($input: listCategoryReportsInput) {
  listCategoryReports(input: $input)
}
`;

export const ListCreditsHistory = /* GraphQL */`
query ListCreditsHistory($input: listCreditsHistoryInput) {
  listCreditsHistory(input: $input)
}
`;

export const ListDeviceBrowserReports = /* GraphQL */`
query ListDeviceBrowserReports($input: listDeviceBrowserReportsInput) {
  listDeviceBrowserReports(input: $input)
}
`;

export const ListLocationReports = /* GraphQL */`
query ListLocationReports($input: listLocationReportsInput) {
  listLocationReports(input: $input)
}
`;

export const ListPendingReviewQuestions = /* GraphQL */`
query ListPendingReviewQuestions($next_token: String, $organization_id: String, $question_review_status: questionReviewStatusEnum!) {
  listPendingReviewQuestions(next_token: $next_token, organization_id: $organization_id, question_review_status: $question_review_status)
}
`;

export const ListQuestionReports = /* GraphQL */`
query ListQuestionReports($input: listQuestionReportsInput) {
  listQuestionReports(input: $input)
}
`;

export const ListQuestions = /* GraphQL */`
query ListQuestions($input: listQuestionsInput2) {
  listQuestions(input: $input)
}
`;

export const ListQuizQuestions = /* GraphQL */`
query ListQuizQuestions($quiz_id: String) {
  listQuizQuestions(quiz_id: $quiz_id)
}
`;

export const ListQuizQuestions2 = /* GraphQL */`
query ListQuizQuestions2($input: listQuizQuestions2Input) {
  listQuizQuestions2(input: $input)
}
`;

export const ListQuizRunLeaderboard = /* GraphQL */`
query ListQuizRunLeaderboard($input: listQuizRunLeaderboardInput) {
  listQuizRunLeaderboard(input: $input)
}
`;

export const ListQuizRunReports = /* GraphQL */`
query ListQuizRunReports($input: listQuizRunReportsInput) {
  listQuizRunReports(input: $input)
}
`;

export const ListQuizRunValidationErrors = /* GraphQL */`
query ListQuizRunValidationErrors($input: listQuizRunValidationErrorsInput) {
  listQuizRunValidationErrors(input: $input)
}
`;

export const ListQuizStats = /* GraphQL */`
query ListQuizStats($input: listQuizStatsInput) {
  listQuizStats(input: $input)
}
`;

export const ListQuizarreQuizRuns = /* GraphQL */`
query ListQuizarreQuizRuns($input: listQuizarreQuizRunsInput) {
  listQuizarreQuizRuns(input: $input)
}
`;

export const ListQuizzes = /* GraphQL */`
query ListQuizzes($input: listQuizzesInput) {
  listQuizzes(input: $input)
}
`;

export const ListSignUpUsers = /* GraphQL */`
query ListSignUpUsers($input: listSignUpUsersInput) {
  listSignUpUsers(input: $input)
}
`;

export const ListTeamLeaderboard = /* GraphQL */`
query ListTeamLeaderboard($input: listTeamLeaderboardInput) {
  listTeamLeaderboard(input: $input)
}
`;

export const ListTeamUsers = /* GraphQL */`
query ListTeamUsers($input: listTeamUsersInput) {
  listTeamUsers(input: $input)
}
`;

export const ListTeams = /* GraphQL */`
query ListTeams($input: listTeamsInput) {
  listTeams(input: $input)
}
`;

export const ListUserActivities = /* GraphQL */`
query ListUserActivities($input: listUserActivitiesInput) {
  listUserActivities(input: $input)
}
`;

export const ListUserQuizAttemptQuestions = /* GraphQL */`
query ListUserQuizAttemptQuestions($input: listUserQuizAttemptQuestionsInput) {
  listUserQuizAttemptQuestions(input: $input)
}
`;

export const ListUserQuizAttempts = /* GraphQL */`
query ListUserQuizAttempts($input: listUserQuizAttemptsInput) {
  listUserQuizAttempts(input: $input)
}
`;

export const ListUsers = /* GraphQL */`
query ListUsers($input: listUserInput) {
  listUsers(input: $input)
}
`;

export const SearchUser = /* GraphQL */`
query SearchUser($input: searchUserInput) {
  searchUser(input: $input)
}
`;
