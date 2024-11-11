class AppConfig {
  public SHEET_SIGNUP = process.env.SHEET_SIGNUP;
  public SHEET_QUESTIONAIRE = process.env.SHEET_QUESTIONAIRE;
  public SHEET_CALCULATOR = process.env.SHEET_CALCULATOR;
}

export const appConfig = new AppConfig();
