import React,{useState} from 'react'
import { Anchor,Drawer,Button } from 'antd';
const { Link } = Anchor;
const AppHeader = () => {
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <i className="fas fa-chalkboard-teacher"></i>
                    <a href="http://localhost:3000/" style={{ paddingLeft: 20 }}>ONY DUANGMALA</a>
                </div>
                <div className="mobileVisible">
                        <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                        </Button>
                        <Drawer title="ONY DUANGMALA" placement="right" onClose={onClose} visible={visible}>
                            <Anchor targetOffset="65">
                                <Link href="#hero" title="Home" />
                                <Link href="#Experience" title="Experience" />
                                <Link href="#Education" title="Education" />
                                <Link href="#Skills" title="Skills" />
                                <Link href="#Hobby" title="Hobby" />
                                <Link href="#Language" title="Language" />
                                <Link href="#Contact" title="Contact" />
                            </Anchor>
                        </Drawer>
                    </div>
                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#Experience" title="Experience" />
                        <Link href="#Education" title="Education" />
                        <Link href="#Skills" title="Skills" />
                        <Link href="#Hobby" title="Hobby" />
                        <Link href="#Language" title="Language" />
                        <Link href="#Contact" title="Contact" />
                    </Anchor>
                </div>             
            </div>
        </div>
    )
}

export default AppHeader