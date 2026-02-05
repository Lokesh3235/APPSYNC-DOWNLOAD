export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Email: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Phone: { input: any; output: any; }
  Time: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export enum ActionEnum {
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type CreditsHistoryInput = {
  history_type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type EditOrganizationInput = {
  is_exam_time_based_on_questions?: InputMaybe<Scalars['Boolean']['input']>;
  marks_awarded_for_correct_answer?: InputMaybe<Scalars['Float']['input']>;
  organization_id: Scalars['String']['input'];
  organization_logo_url?: InputMaybe<Scalars['String']['input']>;
  organization_prefix?: InputMaybe<Scalars['String']['input']>;
  pass_percentage: Scalars['Float']['input'];
  payment_details?: InputMaybe<PaymentDetailsInput>;
  time_allocated_per_question?: InputMaybe<Scalars['Float']['input']>;
};

export type GenerateExcelReportInput = {
  CreditsHistory?: InputMaybe<CreditsHistoryInput>;
  ListSignUpUsers?: InputMaybe<LsInput>;
  Questions?: InputMaybe<QuestionsInput>;
  QuizActivities?: InputMaybe<QuizActivitiesInput>;
  QuizrunActivities?: InputMaybe<QuizrunActivitiesInput>;
  Userleveldashboard?: InputMaybe<UserleveldashboardInput>;
  module: Scalars['String']['input'];
  organization_id?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  EditOrganization?: Maybe<Scalars['JSON']['output']>;
  GenerateExcelReport?: Maybe<Scalars['JSON']['output']>;
  UserApprovals?: Maybe<Scalars['JSON']['output']>;
  addCreditsToUser?: Maybe<Scalars['JSON']['output']>;
  addOrRemoveQuestionToQuiz?: Maybe<Scalars['JSON']['output']>;
  clearErrorLogs?: Maybe<Scalars['JSON']['output']>;
  createCategory?: Maybe<Scalars['JSON']['output']>;
  createQuestion?: Maybe<Scalars['JSON']['output']>;
  createQuiz?: Maybe<Scalars['JSON']['output']>;
  createQuizarreQuizRun?: Maybe<Scalars['JSON']['output']>;
  createTeam?: Maybe<Scalars['JSON']['output']>;
  createUser?: Maybe<Scalars['JSON']['output']>;
  deductCreditsFromUser?: Maybe<Scalars['JSON']['output']>;
  editCategory?: Maybe<Scalars['JSON']['output']>;
  editPendingReviewQuestions?: Maybe<Scalars['JSON']['output']>;
  editQuestion?: Maybe<Scalars['JSON']['output']>;
  editQuiz?: Maybe<Scalars['JSON']['output']>;
  editQuizRunLeaderboard?: Maybe<Scalars['JSON']['output']>;
  editQuizarreQuizRun?: Maybe<Scalars['JSON']['output']>;
  editTeam?: Maybe<Scalars['JSON']['output']>;
  editTeamUsers?: Maybe<Scalars['JSON']['output']>;
  editUser?: Maybe<Scalars['JSON']['output']>;
  generateBulkUploadUrl?: Maybe<Scalars['JSON']['output']>;
  generateS3UploadURL?: Maybe<Scalars['JSON']['output']>;
  publishQuizarreQuizRun?: Maybe<Scalars['JSON']['output']>;
  reorderQuizQuestions?: Maybe<Scalars['JSON']['output']>;
  resetDashboardAndReports?: Maybe<Scalars['JSON']['output']>;
  terminateLiveQuizRun?: Maybe<Scalars['JSON']['output']>;
  updateBmsSettings?: Maybe<Scalars['JSON']['output']>;
};


export type MutationEditOrganizationArgs = {
  input?: InputMaybe<EditOrganizationInput>;
};


export type MutationGenerateExcelReportArgs = {
  input?: InputMaybe<GenerateExcelReportInput>;
};


export type MutationUserApprovalsArgs = {
  input?: InputMaybe<UserApprovalsInput>;
};


export type MutationAddCreditsToUserArgs = {
  input?: InputMaybe<AddCreditsToUserInput>;
};


export type MutationAddOrRemoveQuestionToQuizArgs = {
  input?: InputMaybe<AddQuestionToQuizInput>;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};


export type MutationCreateQuestionArgs = {
  input?: InputMaybe<CreateQuestionInput>;
};


export type MutationCreateQuizArgs = {
  input?: InputMaybe<CreateQuizInput>;
};


export type MutationCreateQuizarreQuizRunArgs = {
  input?: InputMaybe<CreateQuizarreQuizRunInput>;
};


export type MutationCreateTeamArgs = {
  input?: InputMaybe<CreateTeamInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeductCreditsFromUserArgs = {
  input?: InputMaybe<DeductCreditsFromUserInput>;
};


export type MutationEditCategoryArgs = {
  input?: InputMaybe<EditCategoryInput>;
};


export type MutationEditPendingReviewQuestionsArgs = {
  input?: InputMaybe<EditQuestionInput>;
};


export type MutationEditQuestionArgs = {
  input?: InputMaybe<EditQuestionInput>;
};


export type MutationEditQuizArgs = {
  input?: InputMaybe<EditQuizInput>;
};


export type MutationEditQuizRunLeaderboardArgs = {
  input?: InputMaybe<EditQuizRunLeaderboardInput>;
};


export type MutationEditQuizarreQuizRunArgs = {
  input?: InputMaybe<EditQuizarreQuizRunInput>;
};


export type MutationEditTeamArgs = {
  input?: InputMaybe<EditTeamInput>;
};


export type MutationEditTeamUsersArgs = {
  input?: InputMaybe<EditTeamUsersInput>;
};


export type MutationEditUserArgs = {
  input?: InputMaybe<EditUserInput>;
};


export type MutationGenerateBulkUploadUrlArgs = {
  input?: InputMaybe<Commons3Input>;
};


export type MutationGenerateS3UploadUrlArgs = {
  input?: InputMaybe<Commons3Input>;
};


export type MutationPublishQuizarreQuizRunArgs = {
  input?: InputMaybe<PublishQuizarreQuizRunInput>;
};


export type MutationReorderQuizQuestionsArgs = {
  input?: InputMaybe<ReorderQuizQuestionsInput>;
};


export type MutationResetDashboardAndReportsArgs = {
  input?: InputMaybe<ResetDashboardAndReportsInput>;
};


export type MutationTerminateLiveQuizRunArgs = {
  quiz_run_id: Scalars['String']['input'];
};


export type MutationUpdateBmsSettingsArgs = {
  input?: InputMaybe<UpdateBmsSettingsInput>;
};

export type Query = {
  __typename?: 'Query';
  getCurrentUserDetails?: Maybe<Scalars['JSON']['output']>;
  getDocumentPresignedURL?: Maybe<Scalars['JSON']['output']>;
  getOrganizationDetails?: Maybe<Scalars['JSON']['output']>;
  listApprovals?: Maybe<Scalars['JSON']['output']>;
  listBmsSettings?: Maybe<Scalars['JSON']['output']>;
  listBulkUploadErrors?: Maybe<Scalars['JSON']['output']>;
  listCategories?: Maybe<Scalars['JSON']['output']>;
  listCategoryReports?: Maybe<Scalars['JSON']['output']>;
  listCreditsHistory?: Maybe<Scalars['JSON']['output']>;
  listDeviceBrowserReports?: Maybe<Scalars['JSON']['output']>;
  listLocationReports?: Maybe<Scalars['JSON']['output']>;
  listPendingReviewQuestions?: Maybe<Scalars['JSON']['output']>;
  listQuestionReports?: Maybe<Scalars['JSON']['output']>;
  listQuestions?: Maybe<Scalars['JSON']['output']>;
  listQuizQuestions?: Maybe<Scalars['JSON']['output']>;
  listQuizQuestions2?: Maybe<Scalars['JSON']['output']>;
  listQuizRunLeaderboard?: Maybe<Scalars['JSON']['output']>;
  listQuizRunReports?: Maybe<Scalars['JSON']['output']>;
  listQuizRunValidationErrors?: Maybe<Scalars['JSON']['output']>;
  listQuizStats?: Maybe<Scalars['JSON']['output']>;
  listQuizarreQuizRuns?: Maybe<Scalars['JSON']['output']>;
  listQuizzes?: Maybe<Scalars['JSON']['output']>;
  listSignUpUsers?: Maybe<Scalars['JSON']['output']>;
  listTeamLeaderboard?: Maybe<Scalars['JSON']['output']>;
  listTeamUsers?: Maybe<Scalars['JSON']['output']>;
  listTeams?: Maybe<Scalars['JSON']['output']>;
  listUserActivities?: Maybe<Scalars['JSON']['output']>;
  listUserQuizAttemptQuestions?: Maybe<Scalars['JSON']['output']>;
  listUserQuizAttempts?: Maybe<Scalars['JSON']['output']>;
  listUsers?: Maybe<Scalars['JSON']['output']>;
  searchUser?: Maybe<Scalars['JSON']['output']>;
};


export type QueryGetCurrentUserDetailsArgs = {
  input?: InputMaybe<GetCurrentUserDetailsInput>;
};


export type QueryGetDocumentPresignedUrlArgs = {
  input?: InputMaybe<Commons3Input>;
};


export type QueryGetOrganizationDetailsArgs = {
  input?: InputMaybe<GetOrganizationDetailsInput>;
};


export type QueryListApprovalsArgs = {
  input?: InputMaybe<ListApprovalsInput>;
};


export type QueryListBulkUploadErrorsArgs = {
  input?: InputMaybe<ListBulkUploadErrorsInput>;
};


export type QueryListCategoriesArgs = {
  input?: InputMaybe<ListCategoriesInput>;
};


export type QueryListCategoryReportsArgs = {
  input?: InputMaybe<ListCategoryReportsInput>;
};


export type QueryListCreditsHistoryArgs = {
  input?: InputMaybe<ListCreditsHistoryInput>;
};


export type QueryListDeviceBrowserReportsArgs = {
  input?: InputMaybe<ListDeviceBrowserReportsInput>;
};


export type QueryListLocationReportsArgs = {
  input?: InputMaybe<ListLocationReportsInput>;
};


export type QueryListPendingReviewQuestionsArgs = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  question_review_status: QuestionReviewStatusEnum;
};


export type QueryListQuestionReportsArgs = {
  input?: InputMaybe<ListQuestionReportsInput>;
};


export type QueryListQuestionsArgs = {
  input?: InputMaybe<ListQuestionsInput2>;
};


export type QueryListQuizQuestionsArgs = {
  quiz_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListQuizQuestions2Args = {
  input?: InputMaybe<ListQuizQuestions2Input>;
};


export type QueryListQuizRunLeaderboardArgs = {
  input?: InputMaybe<ListQuizRunLeaderboardInput>;
};


export type QueryListQuizRunReportsArgs = {
  input?: InputMaybe<ListQuizRunReportsInput>;
};


export type QueryListQuizRunValidationErrorsArgs = {
  input?: InputMaybe<ListQuizRunValidationErrorsInput>;
};


export type QueryListQuizStatsArgs = {
  input?: InputMaybe<ListQuizStatsInput>;
};


export type QueryListQuizarreQuizRunsArgs = {
  input?: InputMaybe<ListQuizarreQuizRunsInput>;
};


export type QueryListQuizzesArgs = {
  input?: InputMaybe<ListQuizzesInput>;
};


export type QueryListSignUpUsersArgs = {
  input?: InputMaybe<ListSignUpUsersInput>;
};


export type QueryListTeamLeaderboardArgs = {
  input?: InputMaybe<ListTeamLeaderboardInput>;
};


export type QueryListTeamUsersArgs = {
  input?: InputMaybe<ListTeamUsersInput>;
};


export type QueryListTeamsArgs = {
  input?: InputMaybe<ListTeamsInput>;
};


export type QueryListUserActivitiesArgs = {
  input?: InputMaybe<ListUserActivitiesInput>;
};


export type QueryListUserQuizAttemptQuestionsArgs = {
  input?: InputMaybe<ListUserQuizAttemptQuestionsInput>;
};


export type QueryListUserQuizAttemptsArgs = {
  input?: InputMaybe<ListUserQuizAttemptsInput>;
};


export type QueryListUsersArgs = {
  input?: InputMaybe<ListUserInput>;
};


export type QuerySearchUserArgs = {
  input?: InputMaybe<SearchUserInput>;
};

export type QuestionsInput = {
  child_category_name?: InputMaybe<Scalars['String']['input']>;
  from_date?: InputMaybe<Scalars['Float']['input']>;
  parent_category_name?: InputMaybe<Scalars['String']['input']>;
  question_text?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  to_date?: InputMaybe<Scalars['Float']['input']>;
};

export type QuizActivitiesInput = {
  quiz_id?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type QuizrunActivitiesInput = {
  from_date?: InputMaybe<Scalars['Float']['input']>;
  quiz_id?: InputMaybe<Scalars['String']['input']>;
  quiz_run_id?: InputMaybe<Scalars['String']['input']>;
  quiz_run_name?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  team_name?: InputMaybe<Scalars['String']['input']>;
  to_date?: InputMaybe<Scalars['Float']['input']>;
};

export enum ScopeTypeEnum {
  Global = 'GLOBAL',
  Team = 'TEAM',
  User = 'USER'
}

export enum StatusEnum {
  Active = 'ACTIVE',
  All = 'ALL',
  Inactive = 'INACTIVE'
}

export type UserApprovalsInput = {
  approval_type: ApprovalTypeEnum;
  organization_id: Scalars['String']['input'];
  payment_paid_details?: InputMaybe<PaymentPayedDetailsInput>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};

export type UserleveldashboardInput = {
  end_date?: InputMaybe<Scalars['Float']['input']>;
  from_date?: InputMaybe<Scalars['Float']['input']>;
  scope_id: Scalars['String']['input'];
  scope_type: ScopeTypeEnum;
  start_date?: InputMaybe<Scalars['Float']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  to_date?: InputMaybe<Scalars['Float']['input']>;
  user_email_id?: InputMaybe<Scalars['String']['input']>;
  user_location?: InputMaybe<Scalars['String']['input']>;
};

export type AddCreditsToUserInput = {
  amount: Scalars['Float']['input'];
  organization_id?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};

export enum AddOrRemoveEnum {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type AddQuestionToQuizInput = {
  action?: InputMaybe<AddOrRemoveEnum>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quiz_id: Scalars['String']['input'];
};

export enum ApprovalTypeEnum {
  Approve = 'APPROVE',
  Reject = 'REJECT'
}

export type Commons3Input = {
  key: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCategoryInput = {
  category_name: Scalars['String']['input'];
  organization_id?: InputMaybe<Scalars['String']['input']>;
  parent_category_id?: InputMaybe<Scalars['String']['input']>;
};

export type CreateQuestionInput = {
  answer_explaination?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  question_alternative_topic?: InputMaybe<Scalars['String']['input']>;
  question_answer: Scalars['String']['input'];
  question_category_id: Scalars['String']['input'];
  question_comments?: InputMaybe<Scalars['String']['input']>;
  question_description?: InputMaybe<Scalars['String']['input']>;
  question_difficulty_level: DifficultyLevelEnum;
  question_format: QuestionFormatEnum;
  question_geography: Scalars['String']['input'];
  question_has_image?: InputMaybe<Scalars['Boolean']['input']>;
  question_image_url?: InputMaybe<Scalars['String']['input']>;
  question_is_time_neutral?: InputMaybe<Scalars['Boolean']['input']>;
  question_options: Array<InputMaybe<Scalars['String']['input']>>;
  question_review_schedule_type?: InputMaybe<ScheduleTypeEnum>;
  question_sub_category_id: Scalars['String']['input'];
  question_text: Scalars['String']['input'];
  question_type: QuestionTypeEnum;
  question_year_of_relevance?: InputMaybe<Scalars['String']['input']>;
};

export type CreateQuizInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_description?: InputMaybe<Scalars['String']['input']>;
  quiz_image_url?: InputMaybe<Scalars['String']['input']>;
  quiz_name: Scalars['String']['input'];
};

export enum CreateQuizarreQuizRunEnum {
  NewCreation = 'NEW_CREATION',
  ReValidation = 'RE_VALIDATION'
}

export type CreateQuizarreQuizRunInput = {
  background_sound_key?: InputMaybe<Scalars['String']['input']>;
  deduct_credits_per_play?: InputMaybe<Scalars['Boolean']['input']>;
  enable_extrnal_registration_form?: InputMaybe<Scalars['Boolean']['input']>;
  enable_negative_marking?: InputMaybe<Scalars['Boolean']['input']>;
  how_much_credits_to_deduct?: InputMaybe<Scalars['Float']['input']>;
  marks_awarded_for_correct_answer: Scalars['Float']['input'];
  mute_sound?: InputMaybe<Scalars['Boolean']['input']>;
  negative_marks_to_be_deducted?: InputMaybe<Scalars['Float']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  pass_percentage?: InputMaybe<Scalars['Float']['input']>;
  quiz_id: Scalars['String']['input'];
  quiz_run_auto_publish_leaderboard: Scalars['Boolean']['input'];
  quiz_run_end_date: Scalars['String']['input'];
  quiz_run_end_time: Scalars['String']['input'];
  quiz_run_name: Scalars['String']['input'];
  quiz_run_question_timeout?: InputMaybe<Scalars['Int']['input']>;
  quiz_run_setting_for_changing_answer_after_going_back_to_previous_question: Scalars['Boolean']['input'];
  quiz_run_setting_for_changing_answer_before_moving_to_the_next_question: Scalars['Boolean']['input'];
  quiz_run_setting_for_going_back_to_previous_question: Scalars['Boolean']['input'];
  quiz_run_setting_for_is_answer_visible_after_quiz_completion: Scalars['Boolean']['input'];
  quiz_run_setting_for_reattempting_after_completion: Scalars['Boolean']['input'];
  quiz_run_setting_for_showing_answer_on_every_attempt: Scalars['Boolean']['input'];
  quiz_run_setting_for_whether_quiz_background_sound_is_enabled: Scalars['Boolean']['input'];
  quiz_run_setting_for_whether_quiz_has_timeout: Scalars['Boolean']['input'];
  quiz_run_setting_for_whether_the_quiz_questions_has_timeout: Scalars['Boolean']['input'];
  quiz_run_settings_for_enable_full_screen_mode: Scalars['Boolean']['input'];
  quiz_run_start_date: Scalars['String']['input'];
  quiz_run_start_time: Scalars['String']['input'];
  quiz_run_timeout?: InputMaybe<Scalars['Int']['input']>;
  reattempt_deduction?: InputMaybe<Scalars['Boolean']['input']>;
  show_answer_user_level?: InputMaybe<Scalars['Boolean']['input']>;
  team_id: Scalars['String']['input'];
};

export type CreateTeamInput = {
  allowed_email_domains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  is_team_user_restricted?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_code: Scalars['String']['input'];
  team_contact_person_contact_number: Scalars['String']['input'];
  team_contact_person_country_code: Scalars['String']['input'];
  team_contact_person_email_id: Scalars['String']['input'];
  team_contact_person_name: Scalars['String']['input'];
  team_members: Scalars['String']['input'];
  team_name: Scalars['String']['input'];
};

export type CreateUserInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  user_email_id: Scalars['String']['input'];
};

export type DeductCreditsFromUserInput = {
  amount: Scalars['Float']['input'];
  user_id: Scalars['String']['input'];
};

export enum DifficultyLevelEnum {
  Easy = 'EASY',
  Hard = 'HARD',
  Medium = 'MEDIUM'
}

export enum DraftedPublishedStatusEnum {
  Drafted = 'DRAFTED',
  Published = 'PUBLISHED'
}

export type EditCategoryInput = {
  action: ActionEnum;
  category_id: Scalars['String']['input'];
  category_name?: InputMaybe<Scalars['String']['input']>;
  category_status?: InputMaybe<StatusEnum>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
};

export type EditQuestionInput = {
  action: ActionEnum;
  answer_explaination?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  question_alternative_topic?: InputMaybe<Scalars['String']['input']>;
  question_answer?: InputMaybe<Scalars['String']['input']>;
  question_category_id?: InputMaybe<Scalars['String']['input']>;
  question_comments?: InputMaybe<Scalars['String']['input']>;
  question_description?: InputMaybe<Scalars['String']['input']>;
  question_difficulty_level?: InputMaybe<Scalars['String']['input']>;
  question_format?: InputMaybe<QuestionFormatEnum>;
  question_geography?: InputMaybe<Scalars['String']['input']>;
  question_has_image?: InputMaybe<Scalars['Boolean']['input']>;
  question_id: Scalars['String']['input'];
  question_image_url?: InputMaybe<Scalars['String']['input']>;
  question_is_time_neutral?: InputMaybe<Scalars['Boolean']['input']>;
  question_options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question_review_schedule_type?: InputMaybe<ScheduleTypeEnum>;
  question_status?: InputMaybe<StatusEnum>;
  question_sub_category_id?: InputMaybe<Scalars['String']['input']>;
  question_text?: InputMaybe<Scalars['String']['input']>;
  question_type?: InputMaybe<QuestionTypeEnum>;
  question_year_of_relevance?: InputMaybe<Scalars['String']['input']>;
};

export type EditQuizInput = {
  action: ActionEnum;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_description?: InputMaybe<Scalars['String']['input']>;
  quiz_id: Scalars['String']['input'];
  quiz_image_url?: InputMaybe<Scalars['String']['input']>;
  quiz_name?: InputMaybe<Scalars['String']['input']>;
  quiz_status?: InputMaybe<DraftedPublishedStatusEnum>;
};

export type EditQuizRunLeaderboardInput = {
  attempt_id: Scalars['String']['input'];
  leaderboard_rank: Scalars['Int']['input'];
  organization_id?: InputMaybe<Scalars['String']['input']>;
};

export enum EditQuizarreActionEnum {
  Delete = 'DELETE',
  ReValidate = 'RE_VALIDATE',
  Update = 'UPDATE'
}

export type EditQuizarreQuizRunInput = {
  action?: InputMaybe<EditQuizarreActionEnum>;
  background_sound_key?: InputMaybe<Scalars['String']['input']>;
  deduct_credits_per_play?: InputMaybe<Scalars['Boolean']['input']>;
  how_much_credits_to_deduct?: InputMaybe<Scalars['Float']['input']>;
  mute_sound?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_id?: InputMaybe<Scalars['String']['input']>;
  quiz_run_auto_publish_leaderboard?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_end_date?: InputMaybe<Scalars['String']['input']>;
  quiz_run_end_time?: InputMaybe<Scalars['String']['input']>;
  quiz_run_id: Scalars['String']['input'];
  quiz_run_name?: InputMaybe<Scalars['String']['input']>;
  quiz_run_question_timeout?: InputMaybe<Scalars['Int']['input']>;
  quiz_run_setting_for_changing_answer_after_going_back_to_previous_question?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_setting_for_changing_answer_before_moving_to_the_next_question?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_setting_for_going_back_to_previous_question?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_setting_for_is_answer_visible_after_quiz_completion?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_setting_for_reattempting_after_completion?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_setting_for_showing_answer_on_every_attempt?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_setting_for_whether_quiz_background_sound_is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_setting_for_whether_quiz_has_timeout?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_setting_for_whether_the_quiz_questions_has_timeout?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_settings_for_enable_full_screen_mode?: InputMaybe<Scalars['Boolean']['input']>;
  quiz_run_start_date?: InputMaybe<Scalars['String']['input']>;
  quiz_run_start_time?: InputMaybe<Scalars['String']['input']>;
  quiz_run_timeout?: InputMaybe<Scalars['Int']['input']>;
  reattempt_deduction?: InputMaybe<Scalars['Boolean']['input']>;
  show_answer_user_level?: InputMaybe<Scalars['Boolean']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type EditTeamInput = {
  action: ActionEnum;
  allowed_email_domains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  is_team_user_restricted?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_code?: InputMaybe<Scalars['String']['input']>;
  team_contact_person_contact_number?: InputMaybe<Scalars['String']['input']>;
  team_contact_person_country_code?: InputMaybe<Scalars['String']['input']>;
  team_contact_person_email_id?: InputMaybe<Scalars['String']['input']>;
  team_contact_person_name?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  team_members?: InputMaybe<Scalars['String']['input']>;
  team_name?: InputMaybe<Scalars['String']['input']>;
  team_status?: InputMaybe<StatusEnum>;
};

export type EditTeamUsersInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  user_status: Scalars['String']['input'];
};

export type EditUserInput = {
  action: ActionEnum;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  user_email_id: Scalars['String']['input'];
  user_status?: InputMaybe<StatusEnum>;
};

export type GetCurrentUserDetailsInput = {
  user_email_id: Scalars['String']['input'];
};

export type GetOrganizationDetailsInput = {
  organization_id: Scalars['String']['input'];
};

export enum LeaderboardTypeEnum {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Overall = 'OVERALL',
  Yearly = 'YEARLY'
}

export type ListApprovalsInput = {
  approval_status: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};

export type ListBulkUploadErrorsInput = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListCategoriesInput = {
  category_status: StatusEnum;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  parent_category_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListCategoryReportsInput = {
  category_name?: InputMaybe<Scalars['String']['input']>;
  category_type?: InputMaybe<Scalars['String']['input']>;
  from_date?: InputMaybe<Scalars['Float']['input']>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  parent_category_name?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  to_date?: InputMaybe<Scalars['Float']['input']>;
};

export type ListCreditsHistoryInput = {
  history_type?: InputMaybe<Scalars['String']['input']>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListDeviceBrowserReportsInput = {
  end_date?: InputMaybe<Scalars['Float']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  scope_id?: InputMaybe<Scalars['String']['input']>;
  scope_type?: InputMaybe<ScopeTypeEnum>;
  start_date?: InputMaybe<Scalars['Float']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListLocationReportsInput = {
  end_date?: InputMaybe<Scalars['Float']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  scope_id?: InputMaybe<Scalars['String']['input']>;
  scope_type?: InputMaybe<ScopeTypeEnum>;
  start_date?: InputMaybe<Scalars['Float']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListQuestionReportsInput = {
  category_name?: InputMaybe<Scalars['String']['input']>;
  from_date?: InputMaybe<Scalars['Float']['input']>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  question_text?: InputMaybe<Scalars['String']['input']>;
  sub_category_name?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  to_date?: InputMaybe<Scalars['Float']['input']>;
};

export type ListQuestionsInput = {
  question_category_id: Scalars['String']['input'];
  question_status: StatusEnum;
  question_sub_category_id: Scalars['String']['input'];
};

export type ListQuestionsInput2 = {
  invalid_questions?: InputMaybe<Scalars['Boolean']['input']>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  question_alternative_topic?: InputMaybe<Scalars['String']['input']>;
  question_category_id?: InputMaybe<Scalars['String']['input']>;
  question_difficulty_level?: InputMaybe<DifficultyLevelEnum>;
  question_format?: InputMaybe<Scalars['String']['input']>;
  question_geography?: InputMaybe<Scalars['String']['input']>;
  question_sub_category_id?: InputMaybe<Scalars['String']['input']>;
  question_type?: InputMaybe<Scalars['String']['input']>;
  quiz_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListQuizQuestions2Input = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListQuizRunLeaderboardInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_run_id: Scalars['String']['input'];
};

export type ListQuizRunReportsInput = {
  from_date?: InputMaybe<Scalars['Float']['input']>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_id?: InputMaybe<Scalars['String']['input']>;
  quiz_run_id?: InputMaybe<Scalars['String']['input']>;
  quiz_run_name?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  team_name?: InputMaybe<Scalars['String']['input']>;
  to_date?: InputMaybe<Scalars['Float']['input']>;
};

export type ListQuizRunValidationErrorsInput = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  question_review_schedule_type?: InputMaybe<QuestionReviewScheduleTypeEnum>;
  team_id: Scalars['String']['input'];
};

export type ListQuizStatsInput = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_id?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListQuizarreQuizRunsInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_run_status: QuizRunStatusEnum;
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListQuizzesInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_status: DraftedPublishedStatusEnum;
};

export type ListSignUpUsersInput = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  user_status?: InputMaybe<Scalars['String']['input']>;
};

export type ListTeamLeaderboardInput = {
  leaderboard_date: Scalars['String']['input'];
  leaderboard_month: Scalars['String']['input'];
  leaderboard_type?: InputMaybe<LeaderboardTypeEnum>;
  leaderboard_year: Scalars['String']['input'];
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_id: Scalars['String']['input'];
};

export type ListTeamUsersInput = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_id: Scalars['String']['input'];
  user_status: StatusEnum;
};

export type ListTeamsInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_status: StatusEnum;
};

export type ListUserActivitiesInput = {
  from_date?: InputMaybe<Scalars['Float']['input']>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  to_date?: InputMaybe<Scalars['Float']['input']>;
  user_email_id?: InputMaybe<Scalars['String']['input']>;
  user_location?: InputMaybe<Scalars['String']['input']>;
};

export type ListUserInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  user_status: StatusEnum;
};

export type ListUserQuizAttemptQuestionsInput = {
  attempt_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
};

export type ListUserQuizAttemptsInput = {
  end_time?: InputMaybe<Scalars['Float']['input']>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['Float']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type LsInput = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentDetailsInput = {
  banking_name?: InputMaybe<Scalars['String']['input']>;
  qr_code_s3_key: Scalars['String']['input'];
  upi_id?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentPayedDetailsInput = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  comments?: InputMaybe<Scalars['String']['input']>;
  paid_on?: InputMaybe<Scalars['String']['input']>;
  payment_amount?: InputMaybe<Scalars['Float']['input']>;
  utr_number?: InputMaybe<Scalars['String']['input']>;
};

export type PublishQuizarreQuizRunInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  quiz_run_id: Scalars['String']['input'];
};

export enum QuestionFormatEnum {
  Audio = 'AUDIO',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export enum QuestionReviewScheduleTypeEnum {
  MonthlyReview = 'MONTHLY_REVIEW',
  YearlyReview = 'YEARLY_REVIEW'
}

export enum QuestionReviewStatusEnum {
  PendingMonthlyReview = 'PENDING_MONTHLY_REVIEW',
  PendingYearlyReview = 'PENDING_YEARLY_REVIEW'
}

export enum QuestionStatusEnum {
  Active = 'ACTIVE',
  All = 'ALL',
  Inactive = 'INACTIVE',
  PendingMonthlyReview = 'PENDING_MONTHLY_REVIEW',
  PendingYearlyReview = 'PENDING_YEARLY_REVIEW'
}

export enum QuestionTypeEnum {
  FreeText = 'FREE_TEXT',
  Mcq = 'MCQ',
  TrueOrFalse = 'TRUE_OR_FALSE'
}

export enum QuizRunStatusEnum {
  Completed = 'COMPLETED',
  Live = 'LIVE',
  Scheduled = 'SCHEDULED',
  Terminated = 'TERMINATED',
  ValidationPending = 'VALIDATION_PENDING'
}

export type ReorderQuizQuestionsInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  question_ids?: InputMaybe<Scalars['JSON']['input']>;
  quiz_id?: InputMaybe<Scalars['String']['input']>;
};

export type ResetDashboardAndReportsInput = {
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_id: Scalars['String']['input'];
};

export enum ScheduleTypeEnum {
  Monthly = 'MONTHLY',
  Yearly = 'YEARLY'
}

export type SearchUserInput = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  user_email_id?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBmsSettingsInput = {
  credits_plan?: InputMaybe<Scalars['JSON']['input']>;
  user_onboard_credits?: InputMaybe<Scalars['Float']['input']>;
};
