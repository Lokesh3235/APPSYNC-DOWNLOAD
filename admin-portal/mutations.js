/* eslint-disable */
// this is an auto generated file. This will be overwritten


export const EditOrganization = /* GraphQL */ `
  mutation EditOrganization($input: EditOrganizationInput) {
    EditOrganization(input: $input)
  }
`;

export const GenerateExcelReport = /* GraphQL */ `
  mutation GenerateExcelReport($input: GenerateExcelReportInput) {
    GenerateExcelReport(input: $input)
  }
`;

export const UserApprovals = /* GraphQL */ `
  mutation UserApprovals($input: UserApprovalsInput) {
    UserApprovals(input: $input)
  }
`;

export const addCreditsToUser = /* GraphQL */ `
  mutation AddCreditsToUser($input: addCreditsToUserInput) {
    addCreditsToUser(input: $input)
  }
`;

export const addOrRemoveQuestionToQuiz = /* GraphQL */ `
  mutation AddOrRemoveQuestionToQuiz($input: addQuestionToQuizInput) {
    addOrRemoveQuestionToQuiz(input: $input)
  }
`;

export const clearErrorLogs = /* GraphQL */ `
  mutation ClearErrorLogs {
    clearErrorLogs
  }
`;

export const createCategory = /* GraphQL */ `
  mutation CreateCategory($input: createCategoryInput) {
    createCategory(input: $input)
  }
`;

export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion($input: createQuestionInput) {
    createQuestion(input: $input)
  }
`;

export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz($input: createQuizInput) {
    createQuiz(input: $input)
  }
`;

export const createQuizarreQuizRun = /* GraphQL */ `
  mutation CreateQuizarreQuizRun($input: createQuizarreQuizRunInput) {
    createQuizarreQuizRun(input: $input)
  }
`;

export const createTeam = /* GraphQL */ `
  mutation CreateTeam($input: createTeamInput) {
    createTeam(input: $input)
  }
`;

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: createUserInput) {
    createUser(input: $input)
  }
`;

export const deductCreditsFromUser = /* GraphQL */ `
  mutation DeductCreditsFromUser($input: deductCreditsFromUserInput) {
    deductCreditsFromUser(input: $input)
  }
`;

export const editCategory = /* GraphQL */ `
  mutation EditCategory($input: editCategoryInput) {
    editCategory(input: $input)
  }
`;

export const editPendingReviewQuestions = /* GraphQL */ `
  mutation EditPendingReviewQuestions($input: editQuestionInput) {
    editPendingReviewQuestions(input: $input)
  }
`;

export const editQuestion = /* GraphQL */ `
  mutation EditQuestion($input: editQuestionInput) {
    editQuestion(input: $input)
  }
`;

export const editQuiz = /* GraphQL */ `
  mutation EditQuiz($input: editQuizInput) {
    editQuiz(input: $input)
  }
`;

export const editQuizRunLeaderboard = /* GraphQL */ `
  mutation EditQuizRunLeaderboard($input: editQuizRunLeaderboardInput) {
    editQuizRunLeaderboard(input: $input)
  }
`;

export const editQuizarreQuizRun = /* GraphQL */ `
  mutation EditQuizarreQuizRun($input: editQuizarreQuizRunInput) {
    editQuizarreQuizRun(input: $input)
  }
`;

export const editTeam = /* GraphQL */ `
  mutation EditTeam($input: editTeamInput) {
    editTeam(input: $input)
  }
`;

export const editTeamUsers = /* GraphQL */ `
  mutation EditTeamUsers($input: editTeamUsersInput) {
    editTeamUsers(input: $input)
  }
`;

export const editUser = /* GraphQL */ `
  mutation EditUser($input: editUserInput) {
    editUser(input: $input)
  }
`;

export const generateBulkUploadUrl = /* GraphQL */ `
  mutation GenerateBulkUploadUrl($input: commons3Input) {
    generateBulkUploadUrl(input: $input)
  }
`;

export const generateS3UploadURL = /* GraphQL */ `
  mutation GenerateS3UploadURL($input: commons3Input) {
    generateS3UploadURL(input: $input)
  }
`;

export const publishQuizarreQuizRun = /* GraphQL */ `
  mutation PublishQuizarreQuizRun($input: publishQuizarreQuizRunInput) {
    publishQuizarreQuizRun(input: $input)
  }
`;

export const reorderQuizQuestions = /* GraphQL */ `
  mutation ReorderQuizQuestions($input: reorderQuizQuestionsInput) {
    reorderQuizQuestions(input: $input)
  }
`;

export const resetDashboardAndReports = /* GraphQL */ `
  mutation ResetDashboardAndReports($input: resetDashboardAndReportsInput) {
    resetDashboardAndReports(input: $input)
  }
`;

export const terminateLiveQuizRun = /* GraphQL */ `
  mutation TerminateLiveQuizRun($quiz_run_id: String!) {
    terminateLiveQuizRun(quiz_run_id: $quiz_run_id)
  }
`;

export const updateBmsSettings = /* GraphQL */ `
  mutation UpdateBmsSettings($input: updateBmsSettingsInput) {
    updateBmsSettings(input: $input)
  }
`;
