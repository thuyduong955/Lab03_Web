import UserProfile from './UserProfile';
import Counter from './Counter';
import Login from './Login';
import Card from './Card';
import Accordion from './Accordion';
import TodoApp from './TodoApp';
import './App.css';

function App() {
  // Two user objects for Exercise 4
  const user1 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.imgur.com/tlyCcum.jpg',
    imageSize: 90,
  };

  const user2 = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOS.jpg',
    imageSize: 90,
  };

  return (
    <div className="app-container">
      <h1>React Basics Exercise Lab</h1>

      {/* Exercise 3 & 4: UserProfile with Props */}
      <section>
        <h2>Exercise 3 & 4: User Profiles with Props</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Card title="User Profile 1">
            <UserProfile userData={user1} theme="dark" />
          </Card>
          <Card title="User Profile 2">
            <UserProfile userData={user2} theme="dark" />
          </Card>
        </div>
      </section>

      {/* Exercise 5: Counter */}
      <section>
        <h2>Exercise 5: Counter with State</h2>
        <Counter />
      </section>

      {/* Exercise 6: Login Form */}
      <section>
        <h2>Exercise 6: Login Form with Controlled Inputs</h2>
        <Login />
      </section>

      {/* Exercise 7: Accordion */}
      <section>
        <h2>Exercise 7: Accordion with Lifted State</h2>
        <Accordion />
      </section>

      {/* Capstone: Todo App */}
      <section>
        <h2>Capstone: Todo List Application</h2>
        <TodoApp />
      </section>
    </div>
  );
}

export default App;
