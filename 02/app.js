import React from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Form';
import List from './List';

class App extends React.Component {
    state = {
        usersList: [],  // Lista użytkowników
    }

    // Funkcja do dodawania użytkownika do listy
    addUser = (name) => {
        this.setState(prevState => ({
            usersList: [...prevState.usersList, name]
        }));
    }

    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form addUser={this.addUser} />
                <List items={usersList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);