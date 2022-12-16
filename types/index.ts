export type TPost = {
  id: string;
  date: string;
  title: string;
  content:string;
  desc: string;
  labels: string[];
};

export type TError = {
    code: number,
    message: string,
    details:any[]
}