export interface Task {
  title: string;
  date: string;
  completed: boolean;
  people: People[];
}

export interface People {
  name: string;
  age: number;
  skills: string[];
}
