import { React, Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Input from "../base/input";
class TextEditor extends Component {
  state = {
    content: {},
  };
  handleChange(content, editor) {
    this.setState({ content });
  }
  render() {
    const { button, label ,require} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label={label}
          require={require}
          onlyLable={true}
          button={button}
        />
        {/* <h2>Introduction to Software Engineering</h2> */}
        {/* <h3>Provide a course overview</h3> */}
        <Editor
          value={this.state.content}
          init={{
            height: 500,
            menubar: false,
          }}
          onEditorChange={this.handleChange}
        />
        <br />
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}

export default TextEditor;
