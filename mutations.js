/* AUTO-GENERATED — do not edit manually */

export const EditOrganization = /* GraphQL */`
mutation EditOrganization($input: EditOrganizationInput) {
  EditOrganization(input: $input)
}
`;

export const GenerateExcelReport = /* GraphQL */`
mutation GenerateExcelReport($input: GenerateExcelReportInput) {
  GenerateExcelReport(input: $input)
}
`;

export const UserApprovals = /* GraphQL */`
mutation UserApprovals($input: UserApprovalsInput) {
  UserApprovals(input: $input)
}
`;

export const AddCreditsToUser = /* GraphQL */`
mutation AddCreditsToUser($input: addCreditsToUserInput) {
  addCreditsToUser(input: $input)
}
`;

export const AddOrRemoveQuestionToQuiz = /* GraphQL */`
mutation AddOrRemoveQuestionToQuiz($input: addQuestionToQuizInput) {
  addOrRemoveQuestionToQuiz(input: $input)
}
`;

export const ClearErrorLogs = /* GraphQL */`
mutation ClearErrorLogs {
  clearErrorLogs
}
`;

export const CreateCategory = /* GraphQL */`
mutation CreateCategory($input: createCategoryInput) {
  createCategory(input: $input)
}
`;

export const CreateQuestion = /* GraphQL */`
mutation CreateQuestion($input: createQuestionInput) {
  createQuestion(input: $input)
}
`;

export const CreateQuiz = /* GraphQL */`
mutation CreateQuiz($input: createQuizInput) {
  createQuiz(input: $input)
}
`;

export const CreateQuizarreQuizRun = /* GraphQL */`
mutation CreateQuizarreQuizRun($input: createQuizarreQuizRunInput) {
  createQuizarreQuizRun(input: $input)
}
`;

export const CreateTeam = /* GraphQL */`
mutation CreateTeam($input: createTeamInput) {
  createTeam(input: $input)
}
`;

export const CreateUser = /* GraphQL */`
mutation CreateUser($input: createUserInput) {
  createUser(input: $input)
}
`;

export const DeductCreditsFromUser = /* GraphQL */`
mutation DeductCreditsFromUser($input: deductCreditsFromUserInput) {
  deductCreditsFromUser(input: $input)
}
`;

export const EditCategory = /* GraphQL */`
mutation EditCategory($input: editCategoryInput) {
  editCategory(input: $input)
}
`;

export const EditPendingReviewQuestions = /* GraphQL */`
mutation EditPendingReviewQuestions($input: editQuestionInput) {
  editPendingReviewQuestions(input: $input)
}
`;

export const EditQuestion = /* GraphQL */`
mutation EditQuestion($input: editQuestionInput) {
  editQuestion(input: $input)
}
`;

export const EditQuiz = /* GraphQL */`
mutation EditQuiz($input: editQuizInput) {
  editQuiz(input: $input)
}
`;

export const EditQuizRunLeaderboard = /* GraphQL */`
mutation EditQuizRunLeaderboard($input: editQuizRunLeaderboardInput) {
  editQuizRunLeaderboard(input: $input)
}
`;

export const EditQuizarreQuizRun = /* GraphQL */`
mutation EditQuizarreQuizRun($input: editQuizarreQuizRunInput) {
  editQuizarreQuizRun(input: $input)
}
`;

export const EditTeam = /* GraphQL */`
mutation EditTeam($input: editTeamInput) {
  editTeam(input: $input)
}
`;

export const EditTeamUsers = /* GraphQL */`
mutation EditTeamUsers($input: editTeamUsersInput) {
  editTeamUsers(input: $input)
}
`;

export const EditUser = /* GraphQL */`
mutation EditUser($input: editUserInput) {
  editUser(input: $input)
}
`;

export const GenerateBulkUploadUrl = /* GraphQL */`
mutation GenerateBulkUploadUrl($input: commons3Input) {
  generateBulkUploadUrl(input: $input)
}
`;

export const GenerateS3UploadURL = /* GraphQL */`
mutation GenerateS3UploadURL($input: commons3Input) {
  generateS3UploadURL(input: $input)
}
`;

export const PublishQuizarreQuizRun = /* GraphQL */`
mutation PublishQuizarreQuizRun($input: publishQuizarreQuizRunInput) {
  publishQuizarreQuizRun(input: $input)
}
`;

export const ReorderQuizQuestions = /* GraphQL */`
mutation ReorderQuizQuestions($input: reorderQuizQuestionsInput) {
  reorderQuizQuestions(input: $input)
}
`;

export const ResetDashboardAndReports = /* GraphQL */`
mutation ResetDashboardAndReports($input: resetDashboardAndReportsInput) {
  resetDashboardAndReports(input: $input)
}
`;

export const TerminateLiveQuizRun = /* GraphQL */`
mutation TerminateLiveQuizRun($quiz_run_id: String!) {
  terminateLiveQuizRun(quiz_run_id: $quiz_run_id)
}
`;

export const UpdateBmsSettings = /* GraphQL */`
mutation UpdateBmsSettings($input: updateBmsSettingsInput) {
  updateBmsSettings(input: $input)
}
`;
