import Todolist from './todolist';
import proptypes from 'prop-types';

class todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
      <Todolist key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete} />
    ));
  }
}

todos.proptypes= {
  todos: proptypes.array.isRequired
}

export default todos;
