import { SubTask } from './subtask';

export type Task = {
  id: string;
  name: string;
  description: string;
  statusId: string;
  userId: string;
  boardId: string;
  subtasks?: SubTask[];
  createdAt: string | Date;
  updateAt: string | Date;
};
