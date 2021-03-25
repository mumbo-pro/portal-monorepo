
export interface Job {
  id: number;
  text: string;
}
export interface User {
  name: string;
  email: string;
}
export interface UserRegister {
  name: string;
  email: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export type AppState = {
  jobs: Job[];
  user: User;

  setJobs: (jobs: Job[]) => void;
  addJob: (by: string) => void;
  deleteJob: (by: string) => void;

  setUser: (by: UserLogin) => void;
  logout: () => void;
};
