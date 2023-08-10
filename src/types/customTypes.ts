export type User = {
  username?: string | null;
  email: string | null;
};

export type AuthContextType = {
  user: User | null;
  error: string | null;
  setError: (error: string | null) => void;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<boolean>;
  signupWithEmailAndPassword: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type Club = {
  id: number;
  name: string;
  logo: string;
};

export type ClubApiResponse = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
};

export type TailwindProps = {
  tailwindClasses?: string;
};
