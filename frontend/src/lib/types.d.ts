export type User = {
  id: string;
  name: string;
  email: string;
};

declare interface RegisterUserParams {
  name: string;
  email: string;
  password: string;
}
