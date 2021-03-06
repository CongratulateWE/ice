import React, { Component } from 'react';
import { Grid, Input, Button } from '@icedesign/base';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import './JoinUs.scss';

const { Row, Col } = Grid;
const telPattern = /^(1[\d]{1}[\d]{9})|(((400)-(\d{3})-(\d{4}))|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$|^([ ]?)$/;

export default class JoinUs extends Component {
  static displayName = 'JoinUs';

  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        username: '',
        email: '',
        phone: '',
        jobtitle: '',
        content: '',
      },
    };
  }

  formChange = (newValue) => {
    this.setState({
      formValue: newValue,
    });
  };

  handleSubmit = () => {
    this.form.validateAll((error, value) => {
      console.log(value);
    });
  };

  render() {
    return (
      <div
        className="join-us"
        style={{
          ...styles.container,
          ...styles.joinUs,
        }}
      >
        <div style={styles.content}>
          <div style={styles.head}>
            <h2 style={styles.title}>我们的团队</h2>
            <p style={styles.intro}>
              我们是一支充满激情、志向远大、怀揣梦想的团队，<br />也是一个思维活跃、朝气蓬勃、团结互助的大家庭
            </p>
          </div>
          <FormBinderWrapper
            ref={(form) => {
              this.form = form;
            }}
            value={this.state.formValue}
            onChange={this.formChange}
          >
            <div style={styles.formContent}>
              <Row className="hoz-form-item" style={styles.hozFormItem}>
                <Col span={8}>
                  <FormBinder required message="必填项">
                    <Input name="username" placeholder="姓名" />
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="username" style={styles.errorText} />
                  </div>
                </Col>
                <Col span={8}>
                  <FormBinder type="email" required message="邮箱不合法">
                    <Input name="email" placeholder="邮箱" />
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="email" style={styles.errorText} />
                  </div>
                </Col>
                <Col span={8}>
                  <FormBinder
                    required
                    message="请输入合法的电话号码"
                    pattern={telPattern}
                    triggerType="onBlur"
                  >
                    <Input name="phone" placeholder="电话" />
                  </FormBinder>
                  <div style={styles.formErrorWrapper}>
                    <FormError name="phone" style={styles.errorText} />
                  </div>
                </Col>
              </Row>

              <Row className="ver-form-item" style={styles.verFormItem}>
                <FormBinder>
                  <Input name="jobtitle" placeholder="职位" />
                </FormBinder>
              </Row>

              <Row className="ver-form-item" style={styles.verFormItem}>
                <FormBinder>
                  <Input multiple name="content" placeholder="一些自我介绍" />
                </FormBinder>
              </Row>

              <Row>
                <Col>
                  <Button
                    onClick={this.handleSubmit}
                    type="primary"
                    style={styles.submitBtn}
                  >
                    提交
                  </Button>
                </Col>
              </Row>
            </div>
          </FormBinderWrapper>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    background:
      'url(https://img.alicdn.com/tfs/TB1JGoDi3vD8KJjy0FlXXagBFXa-5040-2811.png)',
    backgroundSize: 'cover',
  },
  content: {
    width: '1080px',
    margin: '0 auto',
    padding: '80px 0',
  },
  head: { width: '50%', margin: '0 auto' },
  title: { margin: '0', textAlign: 'center', fontSize: '28px', color: '#fff' },
  intro: { textAlign: 'center', color: '#fff' },
  formContent: { width: '640px', margin: '60px auto' },
  errorText: { color: '#fff' },
  submitBtn: { color: '#2977f3', background: '#fff', borderRadius: '6px' },
  joinUs: {},
  hozFormItem: {},
  verFormItem: {},
};
