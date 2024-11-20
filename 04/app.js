import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    handleFileChange = (event) => {
        const files = event.target.files;
        const filesArray = Array.from(files).map(file => {
            const reader = new FileReader();
            return new Promise((resolve) => {
                reader.onload = () => {
                    resolve({
                        id: uuidv4(),
                        name: file.name,
                        size: file.size,
                        content: reader.result,
                    });
                };
                reader.readAsText(file);
            });
        });


        Promise.all(filesArray).then((newFiles) => {
            this.setState(prevState => ({
                filesList: [...prevState.filesList, ...newFiles],
            }));
        });
    }

    render() {
        return (
            <section>
                <File onFileChange={this.handleFileChange} />
                <List files={this.state.filesList} />
            </section>
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
