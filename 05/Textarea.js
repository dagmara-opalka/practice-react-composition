import React from 'react';

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        const textarea = this.textareaRef.current;
        if (textarea.scrollHeight > textarea.offsetHeight) {
            return { resize: true };
        }
        return null;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const textarea = this.textareaRef.current;
        if (snapshot && snapshot.resize) {

            const newHeight = Math.min(textarea.scrollHeight, 100);
            textarea.style.height = `${newHeight}px`;
        }
    }

    handleInputChange = (event) => {

        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    render() {
        const { content } = this.props;

        return (
            <textarea
                ref={this.textareaRef}
                value={content}
                onChange={this.handleInputChange}
                style={{ height: 'auto', minHeight: '20px', overflow: 'hidden' }} // Początkowa wysokość
            />
        );
    }
}

export default Textarea;
