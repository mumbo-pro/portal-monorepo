import create from 'zustand';
import { uid } from 'react-uid';

// import {Job} from './interface'
// import {User} from './interface'
import { Job, UserRegister } from './interface';
// import {UserLogin} from './interface'
import { AppState } from './interface';
/**
 * login
 * logout
 * fetch
 * addonejob
 * deleteonejob
 * deletealljobs
 * applyjob
 */
export const useAppStore = create((set) => ({
  //
  jobs: [],

  //
  user: {},

  //

  setJobs: (jobs: Job[]) =>
    set((state: AppState) => ({
      jobs: jobs,
    })),

  addJob: (jobText: string) =>
    set((state: AppState) => ({
      jobs: [
        ...state.jobs,
        { text: jobText, id: uid(`${jobText}-${state.jobs.length}`) },
      ],
    })),

  //
  deleteJob: (jobId: number) =>
    set((state: AppState) => ({
      jobs: state.jobs.filter((job) => job.id !== jobId),
    })),

  // Auth
  // register: (by: UserRegister) => void;
  setUser: (newUser: UserRegister) =>
    set((state: AppState) => ({
      user: newUser,
    })),

  // login: (by: UserLogin) => void;
  logout: () =>
    set((state: AppState) => ({
      user: {},
    })),
}));
