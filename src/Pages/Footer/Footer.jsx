import "./Footer.css"
import { useRef } from "react";
const scrollToBottom = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    console.log("HELLO")
};
const Footer = () => {
    const aboutSection = useRef(null);
    return (
        <div className="Footer">
            <div className="Footer_logo">
            </div>
            <div className="Footer_content">
                <div className="Footer_left">
                    <div className="Footer_left_std">
                        Số điện thoại: 19001008
                    </div>
                    <div className="Footer_left_diachi">
                        Địa chỉ: Noitinhyeubatdau
                    </div>
                </div>
                <div className="Footer_right">
                    <div className="Footer_right_title">
                        Kết Nối với chúng tôi
                    </div>
                    <a href="https://www.facebook.com/CareerEmpower" target="_blank" className="Footer_FB">
                        <i class="bi bi-facebook iconfb"></i>
                    </a>
                    <div className="demo" onClick={scrollToBottom}>
                        click
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Footer;