export interface Task {
  title: string;
  description?: string;
  date: string;
  completed: boolean;
  people: People[];
}

export interface People {
  name: string;
  age: number;
  skills: string[];
}
