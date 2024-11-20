import React from 'react';

class File extends React.Component {
    handleChange = (event) => {

        if (this.props.onFileChange) {
            this.props.onFileChange(event);
        }
    }

    render() {
        return <input type="file" multiple onChange={this.handleChange} />;
    }
}

export default File;
