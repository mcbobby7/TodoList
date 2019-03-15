import Layouts from '../components/layouts';
import Todos from '../components/todos';
import Add_todos from '../components/addTodo';
import uuid from 'uuid';


class index extends React.Component {

  state = {
    todos: [
               {
                   id: uuid.v4(),
                   title: 'Complete ENYE todo list', 
                   completed: false
               },
               {
                   id: uuid.v4(),
                   title: 'Refracture my code',
                   completed: false
               },
               {
                   id: uuid.v4(),
                   title: 'Minify my code',
                   completed: false
               }
     ]
 }

 markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
  return todo;
  })});
}

 delTodo = (id) => {
   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
 }

 addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title,
        completed:false
      }
      this.setState({ todos: [...this.state.todos, newTodo]});
 }

  render() {
    return (
      <div>
          <Layouts>
            <div style={{ padding: '0 1rem'}}>
              <p style={{ color: 'red', float: 'right', paddingRight: '20px'}} >To complete a task click the check box</p>
              <Add_todos addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
            </div>
          </Layouts>
      </div>
      
    );
  }
}

export default index;
