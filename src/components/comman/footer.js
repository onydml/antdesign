import React from 'react';
import { BackTop, Layout } from 'antd';

const {Footer} = Layout
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
function AppFooter() {
  return (
    <div>
        <Footer>
          <div className="footer">
            <div className="logo" >
                    <i className="fas fa-chalkboard-teacher"></i>
                    <a href="http://localhost:3000/" style={{ paddingLeft: 20 }}>ONY DUANGMALA</a>
            </div>
            <ul className="socials">
              <li><a href="https://www.facebook.com/onyduangmala"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.instagram.com/ony_dml/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.tiktok.com/@malacover?lang=en"><i className="fab fa-tiktok"></i></a></li>
              <li><a href="https://www.pinterest.com/"><i className="fab fa-weixin"></i></a></li>
            </ul>
          </div>
          <div className="copyright">Copyright &copy; 2021 ONY DUANGMALA</div>
        </Footer>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up" style={style}></i></div>
        </BackTop>
    </div>
  );
}

export default AppFooter;