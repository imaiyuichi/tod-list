export interface TodoItemType {
  id: string;
  text: string;
}

export interface ToDoFormProps {
  todos: TodoItemType[];
}
export interface TodoProps {
  data: TodoItemType;
}
