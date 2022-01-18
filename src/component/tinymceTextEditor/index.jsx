import { React, Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class TextEditor extends Component {
  state = {
    content: {},
  };
  handleChange(content, editor) {
    this.setState({ content });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
