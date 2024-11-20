import React from 'react';

class Form extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();  

        const name = this.nameInput.value;
        if (name) {

            this.props.addUser(name);
            this.nameInput.value = '';
        }
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Imię i nazwisko" 
                        ref={(input) => this.nameInput = input}
                    />
                    <input type="submit" value="Dodaj użytkownika" />
                </form>
            </section>
        );
    }
}

export default Form;