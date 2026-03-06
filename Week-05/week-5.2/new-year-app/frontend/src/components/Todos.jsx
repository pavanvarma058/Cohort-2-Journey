export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button
              className="mark-btn"
              onClick={() => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
              }}
            >
              {todo.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
