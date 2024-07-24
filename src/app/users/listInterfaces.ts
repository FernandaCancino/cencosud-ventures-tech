import { IUser } from "../lib/definitions";

export interface IListUSers {
  query: string;
};

export interface IUserItem {
  user: IUser;
  index: number;
};

export interface IMessageListFooter {
  withData: string;
  withoutData: string;
}