import React from 'react';
import './Renyuan.scss';
import {Tag, Input, Tooltip, Button, Icon} from 'antd';

class Renyuan extends React.PureComponent {
    static defaultProps = {
        'tags': ['张三', '李四', '王五']
    };

    constructor(props) {
        super(props);
        this.state = {
            'tags': this.props.tags,
            'inputVisible': false,
            'inputValue': ''
        };
    }

    showInput() {
        this.setState({ 'inputVisible': true }, () => this.input.focus());
    }

    handleInputChange(e) {
        this.setState({ 'inputValue': e.target.value });
    }

    handleInputConfirm() {
        const state = this.state, inputValue = state.inputValue;
        let tags = state.tags;

        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.setState({
            tags,
            'inputVisible': false,
            'inputValue': ''
        });
    }

    saveInputRef(input) {
        this.input = input;
    }

    render() {
        const {tags, inputVisible, inputValue} = this.state;

        return <div className="renyuan">
            {tags.map((tag) => {
                return <div key={tag}>
                    <Tag key={tag}>
                        <Icon type="user"/>
                        {tag}
                    </Tag>
                </div>;
            })}
            {inputVisible &&
            <Input
                ref={this.saveInputRef.bind(this)}
                type="text"
                size="small"
                style={{'width': 78}}
                value={inputValue}
                onChange={this.handleInputChange.bind(this)}
                onBlur={this.handleInputConfirm.bind(this)}
                onPressEnter={this.handleInputConfirm.bind(this)}
            />
            }
            {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput.bind(this)}>+ New Tag</Button>}
        </div>;
    }
}

export default Renyuan;