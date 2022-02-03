import { React, Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Input from "../base/input";

const TextEditor = ({ button, label, require, handleChange, value, name }) => {
  function handleEditorChange(content, editor) {
    // const { handleChange, name } = this.props;
    const currentTarget = {
      value: content,
      name: name
    }
    handleChange({currentTarget})
    // this.setState({ test:'+++++++++' });
    // this.setState({ content });
  }
  return (<form >
    <Input
      label={label}
      require={require}
      onlyLable={true}
      button={button}
    />
    {/* <h2>Introduction to Software Engineering</h2> */}
    {/* <h3>Provide a course overview</h3> */}
    <Editor
      value={value}
      name={name}
      init={{
        height: 500,
        menubar: false,
        directionality : 'rtl'
      }}
      onEditorChange={handleEditorChange}
    />
    <br />
    {/* <input type="submit" value="Submit" /> */}
  </form>);
}

export default TextEditor;


// class TextEditor extends Component {
//   state = {
//     content: '',
//     test: ''
//   };
//   handleEditorChange(content, editor) {
//     debugger
//     const { handleChange, name } = this.props;
//     const input = {
//       value: content,
//       name: name
//     }
//     handleChange(input)
//     // this.setState({ test:'+++++++++' });
//     // this.setState({ content });
//   }
//   render() {
//     const { button, label, require, handleChange, value, name } = this.props;
//     return (

//     );
//   }
// }

// export default TextEditor;
