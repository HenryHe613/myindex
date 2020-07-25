import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import Digit from '../utils/digit';
import index from '../static/index.css';

const Index = ({ dispatch }) => {

  var render = Digit();
  render();
  return (
    <div className={index.box}>
      <div className={index.logo}></div>


      <div className={index.left}>

      </div>
      <div className={index.menu}>

        <div className={index.menuitem + ' ' + index.menuactive}>
          主页
          </div>
        <div className={index.menuitem}>
          <a target='_blank' href='https://gitee.com/dissucc' >Gitee</a>
        </div>
        <div className={index.menuitem}>
          <a target='_blank' href='http://www.cnblogs.com/Ambre/' >博客</a>
        </div>
      </div>
      <div className={index.menuinfo}>

        Hour Xu
        <br />
        <e className={index.email}>412014702@qq.com</e>
        <br />

      </div>

      <div className={index.context}>
        <div className={index.card}>
          <div style={{ width: '90%', margin: '5%' }}>
            示例1：
          <br />
            脚手架项目(点击进入)： <a className={index.tag} target='_blank' href='http://test.hourxu.com'>Scaffold</a>
            <br />
            账号/密码：test/test,test2/test2,test3/test3,gw/gw
            <br />
            码云(gitee):<a className={index.tag} target='_blank' href='https://gitee.com/teambp/ScaffoldClient'>Gitee</a>
          </div>
        </div>
        <div className={index.card}>
          <div style={{ width: '90%', margin: '5%' }}>
            示例2：
          <br />
            云课堂项目(点击进入)： <a className={index.tag} target='_blank' href='http://www.bp668.com'>云课堂</a>
          </div>
        </div>
        <div className={index.card}>
          <div style={{ width: '90%', margin: '5%' }}>
            语言栈：
          <br />
            <a className={index.tag}>Javascript</a>
            <a className={index.tag}>C#</a>
            <a className={index.tag}>SQL</a>
            <a className={index.tag}>Html</a>
            <a className={index.tag}>CSS</a>
          </div>
        </div>
        <div className={index.card}>
          <div style={{ width: '90%', margin: '5%' }}>
            前端技术栈：
          <br />
            <a className={index.tag}>TypeScript</a>
            <a className={index.tag}>React</a>
            <a className={index.tag}>Node</a>
            <br />
          </div>
        </div>
        <div className={index.card}>
          <div style={{ width: '90%', margin: '5%' }}>
            后端技术栈：
          <br />
            <a className={index.tag}>ASP.NET</a>
            <a className={index.tag}>ASP.NET Core 2.0</a>
            <a className={index.tag}>MVC</a>
            <a className={index.tag}>MVC API</a>
            <a className={index.tag}>Mapping</a>
            <a className={index.tag}>Unity(DI容器)</a>
            <a className={index.tag}>EF/EF Core</a>
            <a className={index.tag}>SOA</a>
            <a className={index.tag}>...</a>
          </div>
        </div>

      </div>
    </div>
  );
};

Index.propTypes = {
  dispatch: PropTypes.func.isRequired
};


export default connect()(Index);
