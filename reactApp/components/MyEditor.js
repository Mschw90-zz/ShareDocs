import React from 'react';
import {Editor, EditorState, RichUtils } from 'draft-js';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    console.log('in my Editor');
    return (

      <div>
      <div class="container-fluid" style ={{display: 'flex'}}>
     <div class="row">
       <div class="col-sm-3 col-md-1 sidebar sidebar-shadow">
         <ul class="nav nav-sidebar ">
           <li class="disabled"><a href="#"><i class="fa fa-floppy-o"></i> Save</a></li>
           <li><a href="#"><i class="fa fa-floppy-o"></i> Save As</a></li>
           <li><a href="#"><i class="fa fa-file-pdf-o"></i> Save As Adobe PDF</a></li>
           <li><a href="#"><i class="fa fa-folder-open"></i> Open</a></li>
           <li><a href="#"><i class="fa fa-folder"></i> Close</a></li>
         </ul>
         <ul class="nav nav-sidebar">
           <li><a href="#">Info</a></li>
           <li class="active"><a href="">Recent</a></li>
           <li><a href="">New</a></li>
           <li><a href="">Print</a></li>
           <li><a href="">Save & Send</a></li>
           <li><a href="">Help</a></li>
           <li><a href=""><i class="fa fa-question-circle"></i> Options</a></li>
           <li><a href=""><i class="fa fa-times"></i> Exit</a></li>
         </ul>
       </div>
       <div class="col-sm-9 col-sm-offset-3 col-md-11 col-md-offset-1 main">
         <h1 class="page-header">Recent Documents</h1>

         <h2 class="sub-header">Section title</h2>
       </div>
     </div>
   </div>
      <button onClick={this._onBoldClick.bind(this)}>Bold</button>
      <div style={{border: '1px solid black'}}>
        <Editor editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
        />
        </div>
        </div>



    );
  }
}

export default MyEditor;
