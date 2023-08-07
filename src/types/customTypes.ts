export type Club = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
};

export type Leagues = {
  [key: string]: Club[];
};
