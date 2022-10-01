interface ISigninInput {
  username: string
  password: string
}

interface ISignupInput {
  first_name: string
  last_name: string
  email: string
  country: string
  username: string
  password: string
}

interface IConfirmationInput {
  email: string
  code: string
}
