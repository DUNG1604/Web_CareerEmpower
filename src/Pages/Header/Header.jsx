import "./Header.css"
// import { useRef } from "react";
const Header = () => {
    // const aboutSection = useRef(null);
    return (
        <div className="Header">
            <div className="Main_header">
                <div className="Main_headerIn">
                    <div className="Header_icon">
                    </div>
                    <ul className="Header_item">
                        <li>VỀ CHÚNG TÔI</li>
                        <li>ĐỊNH HƯỚNG</li>
                        <li>ĐÀO TẠO</li>
                        <li>VIỆC LÀM</li>
                        <li>DU HỌC</li>
                        <li>TIN TỨC</li>
                    </ul>
                    <div className="Header_item1">
                        <i class="bi bi-list"></i>
                    </div>
                </div>
                <div className="Header_Under">
                    <div className="Header_logo1"></div>
                    <div className="Header_underLogo1">
                        VỀ CHÚNG TÔI
                    </div>
                </div>
                <div className="Header_Under_Line1"></div>
            </div>
        </div>

    );
}
export default Header;