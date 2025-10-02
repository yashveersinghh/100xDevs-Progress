import { atom, selector } from "recoil";

export const todosAtom = atom({
    key: "todosAtom",
    default: [""],
})
export const filtersAtom = atom({
    key: "filtersAtom",
    default: [""],
})

export const filteredTodos = selector({
    key: "filteredTodos",
    get: ({get}) => {
        const todos = get(todosAtom);
        const filter = get(filtersAtom);
        return todos.filter(todo => todo.includes(filter) || todo.description.includes(filter));
    }
})