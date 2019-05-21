/*
用来指定商品详情的富文本编辑器组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {EditorState, convertToRaw, ContentState} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


export default class RichTextEditor extends Component {
  
  static propTypes = {
    detail: PropTypes.string
  }
  
  state = {
    editorState: EditorState.createEmpty(), // 创建一个没有内容的编辑对象
  }

  constructor(props) {
    super(props);
    const html = this.props.detail
    if (html) { // 如果有值, 根据html格式字符串创建一个对应的编辑对象
      const contentBlock = htmlToDraft(html)
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const editorState = EditorState.createWithContent(contentState)
      this.state = {
        editorState,
      }
    } else {
      this.state = {
        editorState: EditorState.createEmpty(), // 创建一个没有内容的编辑对象
      }
    }

  }

  /*
  输入过程中实时的回调
   */
  onEditorStateChange = (editorState) => {
    console.log('onEditorStateChange()')
    this.setState({
      editorState,
    })
  }

  getDetail = () => {
    // 返回输入数据对应的html格式的文本
    return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
  }

  render() {
    const {editorState} = this.state
    return (
      <Editor
        editorState={editorState}
        editorStyle={{border: '1px solid black', minHeight: 200, paddingLeft: 10}}
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}