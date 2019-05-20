import React, {Component} from 'react'
import {
  Card,
  Icon,
  Form,
  Input,
  Cascader,
  Upload,
  Button
} from 'antd'

import LinkButton from '../../components/link-button'
import {reqCategorys} from '../../api'

const {Item} = Form
const { TextArea } = Input

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
  {
    value: 'jiangsu2',
    label: 'Jiangsu2',
    isLeaf: true,
  },
]

/*
Product的添加和更新的子路由组件
 */
class ProductAddUpdate extends Component {

  state = {
    options: [],
  }

  initOptions = (categorys) => {
    // 根据categorys生成options数组
    const options = categorys.map(c => ({
      value: c._id,
      label: c.name,
      isLeaf: false, // 不是叶子
    }))

    // 更新options状态
    this.setState({
      options
    })
  }

  /*
  异步获取一级/二级分类列表, 并显示
  async函数的返回值是一个新的promise对象, promise的结果和值由async的结果来决定
   */
  getCategorys = async (parentId) => {
    const result = await reqCategorys(parentId)   // {status: 0, data: categorys}
    if (result.status===0) {
      const categorys = result.data
      // 如果是一级分类列表
      if (parentId==='0') {
        this.initOptions(categorys)
      } else { // 二级列表
        return categorys  // 返回二级列表 ==> 当前async函数返回的promsie就会成功且value为categorys
      }
    }
  }


  /*
  验证价格的自定义验证函数
   */
  validatePrice = (rule, value, callback) => {
    console.log(value, typeof value)
    if (value*1 > 0) {
      callback() // 验证通过
    } else {
      callback('价格必须大于0') // 验证没通过
    }
  }

  /*
  用加载下一级列表的回调函数
   */
  loadData = async selectedOptions => {
    // 得到选择的option对象
    const targetOption = selectedOptions[0]
    // 显示loading
    targetOption.loading = true

    // 根据选中的分类, 请求获取二级分类列表
    const subCategorys = await this.getCategorys(targetOption.value)
    // 隐藏loading
    targetOption.loading = false
    // 二级分类数组有数据
    if (subCategorys && subCategorys.length>0) {
      // 生成一个二级列表的options
      const childOptions = subCategorys.map(c => ({
        value: c._id,
        label: c.name,
        isLeaf: true
      }))
      // 关联到当前option上
      targetOption.children = childOptions
    } else { // 当前选中的分类没有二级分类
      targetOption.isLeaf = true
    }

    // 更新options状态
    this.setState({
      options: [...this.state.options],
    })
  }

  submit = () => {
    // 进行表单验证, 如果通过了, 才发送请求
    this.props.form.validateFields((error, values) => {
      if (!error) {
        alert('发送ajax请求')
      }
    })
  }

  componentDidMount () {
    this.getCategorys('0')
  }

  render() {

    // 指定Item布局的配置对象
    const formItemLayout = {
      labelCol: { span: 2 },  // 左侧label的宽度
      wrapperCol: { span: 8 }, // 右侧包裹的宽度
    }

    // 头部左侧标题
    const title = (
      <span>
        <LinkButton>
          <Icon type='arrow-left' style={{fontSize: 20}}/>
        </LinkButton>
        <span>添加商品</span>
      </span>
    )

    const {getFieldDecorator} = this.props.form

    return (
      <Card title={title}>
        <Form {...formItemLayout}>
          <Item label="商品名称">
            {
              getFieldDecorator('name', {
                initialValue: '',
                rules: [
                  {required: true, message: '必须输入商品名称'}
                ]
              })(<Input placeholder='请输入商品名称'/>)
            }
          </Item>
          <Item label="商品描述">
            {
              getFieldDecorator('desc', {
                initialValue: '',
                rules: [
                  {required: true, message: '必须输入商品描述'}
                ]
              })(<TextArea placeholder="请输入商品描述" autosize={{ minRows: 2, maxRows: 6 }} />)
            }

          </Item>
          <Item label="商品价格">

            {
              getFieldDecorator('price', {
                initialValue: '',
                rules: [
                  {required: true, message: '必须输入商品价格'},
                  {validator: this.validatePrice}
                ]
              })(<Input type='number' placeholder='请输入商品价格' addonAfter='元'/>)
            }
          </Item>
          <Item label="商品分类">
            <Cascader
              options={this.state.options}  /*需要显示的列表数据数组*/
              loadData={this.loadData} /*当选择某个列表项, 加载下一级列表的监听回调*/
            />
          </Item>
          <Item label="商品图片">
            <div>商品图片</div>
          </Item>
          <Item label="商品详情">
            <div>商品详情</div>
          </Item>
          <Item>
            <Button type='primary' onClick={this.submit}>提交</Button>
          </Item>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(ProductAddUpdate)