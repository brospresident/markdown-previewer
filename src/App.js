import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './App.css';
import marked from 'marked';
import { Box } from '@material-ui/core';


marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdownText: textAreaInput,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    return (
      this.setState({
        markdownText: e.target.value
      })
    );
  }
  render() {
    return (
      <div className = "main-conatiner">
          <h1>Markdown previewer</h1>
          <TextareaAutosize id = "editor" minRows={15} maxRows={15} className="input-text" defaultValue={this.state.markdownText} onChange={this.handleChange}></TextareaAutosize>
          <Box m={30} border={1} color="text.primary">
            <div
              dangerouslySetInnerHTML={{
              __html: marked(this.state.markdownText, { renderer: renderer })
              }}
              id='preview'
            />
          </Box>
          <p className = "footer"><a className = "footer" href = "https://github.com/brospresident">Made by Andrei Radu</a></p>
      </div>
    )
  };
}

let textAreaInput = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;

export default App;
