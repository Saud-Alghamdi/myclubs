import { User } from "firebase/auth";

//---- Auth ----//

export type AuthContextType = {
  currentUser: User | null;
  error: string | null;
  setError: (error: string | null) => void;
  loginWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<boolean>;
  signupWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => Promise<boolean>;
  loading: boolean;
  firebaseIsCheckingAuth: boolean;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

//---- Clubs & Matches ----//

export type Club = {
  id: number;
  name: string;
  logo: string;
};

export type ClubsApiResponse = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
};

export type ClubsQueryType = {
  isSuccess: boolean;
  msg: string;
  data?: Club[];
};

export type FavoriteClubsMatchesReturnType = {
  isSuccess: boolean;
  msg: string;
  data?: FavoriteClubMatch[];
};

export type FavoriteClubMatch = {
  club1Id: number;
  club1Name: string;
  club1Logo: string;
  club2Id: number;
  club2Name: string;
  club2Logo: string;
  matchId: number;
  date: string;
  time: string;
};

export type FavoriteClubMatchAPIResponse = {
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
    };
    away: {
      id: number;
      name: string;
      logo: string;
    };
  };
  fixture: {
    id: number;
    timestamp: string;
  };
};

export type MatchesQueryType = {
  isSuccess: boolean;
  msg: string;
  data?: FavoriteClubMatch[];
};

export type MatchCardProps = {
  match: FavoriteClubMatch;
};

//---- Styles & Images ----//

export type TailwindProps = {
  tailwindClasses?: string;
};

export type svgProps = {
  twStyles?: string;
};

export type imageComponentProps = {
  src: string;
  blurHash: string;
  blurTwStyles: string;
  originalTwStyles: string;
  alt: string;
};
