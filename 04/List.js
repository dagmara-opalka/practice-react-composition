import React from 'react';

class List extends React.Component {
    render() {
        const { files } = this.props;

        return (
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <strong>{file.name}</strong> - {file.size} bytes
                        <pre>{file.content}</pre>
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;
