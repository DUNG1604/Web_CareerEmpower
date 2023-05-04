import "./About.css"
import { useRef } from "react";
const About = () => {
    const Sumenh = useRef(null);
    const Tamnhin = useRef(null);
    const giatricotloi = useRef(null);
    const trietly = useRef(null);
    const connguoi = useRef(null);

    const scrollDown = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <div className="About_Main">
            <div className="Header_Under1">
                <ul className="Header_Underitem">
                    <li onClick={() => scrollDown(Sumenh)}>SỨ MỆNH</li>
                    <li onClick={() => scrollDown(Tamnhin)}>TẦM NHÌN</li>
                    <li onClick={() => scrollDown(giatricotloi)}>GIÁ TRỊ CỐT LÕI</li>
                    <li onClick={() => scrollDown(trietly)}>TRIẾT LÝ THƯƠNG HIỆU</li>
                    <li onClick={() => scrollDown(connguoi)}>CON NGƯỜI</li>
                </ul>
            </div>
            <div className="Header_Under_Line"></div>
            <div className="SuMenh" ref={Sumenh}>
                <div className="SuMenh_Title">
                    SỨ MỆNH
                </div>
                <div className="SuMenh_Content">
                    CareerEmpower cam kết tối ưu quá trình phát triển cho sinh viên Đại học Kinh tế Quốc dân, từ khi gia nhập trường đến khi tốt nghiệp, thông qua các sản phẩm cá nhân hóa và sự đồng hành xuyên suốt.
                </div>
            </div>
            <div className="TamNhin" ref={Tamnhin}>
                <div className="TamNhin1">
                    <div className="TamNhin_Title">
                        TẦM NHÌN
                    </div>
                    <div className="TamNhin_Content">
                        CareerEmpower sẽ là công ty dẫn đầu về hỗ trợ, đồng hành cùng sinh viên Đại học Kinh tế Quốc dân trên quá trình tối đa hóa sự nghiệp đến năm 2025
                    </div>
                </div>
                <div className="TamNhin_Opacity">
                </div>
                <div className="TamNhin2">
                    <div className="TamNhin_Title">
                        TẦM NHÌN
                    </div>
                    <div className="TamNhin_Content">
                        CareerEmpower sẽ là công ty dẫn đầu về hỗ trợ, đồng hành cùng sinh viên Đại học Kinh tế Quốc dân trên quá trình tối đa hóa sự nghiệp đến năm 2025
                    </div>
                </div>
            </div>
            <div className="GTCL" ref={giatricotloi}>
                <div className="GTCL_Title">
                    GIÁ TRỊ CỐT LÕI
                </div>
                <div className="GTCL_noibo">
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">ĐÀO TẠO</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Tôn trọng và đề cao giá trị của đào tạo và phát triển năng lực cho nhân viên.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">PHÁT TRIỂN</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Hỗ trợ nhân viên trong việc xây dựng một kế hoạch phát triển sự nghiệp để họ có thể đạt được mục tiêu của mình.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">SÁNG TẠO</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Khuyến khích sự sáng tạo và động lực của nhân viên bằng cách đưa ra những dự án thực tế và những thử thách thú vị.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">CÂN BẰNG</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Chú trọng về sự cân bằng trong cuộc sống với tinh thần "Làm hết mình, chơi hết sức".
                        </div>
                    </div>
                    <div className="GTCL_noibo_opacity"></div>
                    <div className="GTCL_noibo2">
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">ĐÀO TẠO</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Tôn trọng và đề cao giá trị của đào tạo và phát triển năng lực cho nhân viên.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">PHÁT TRIỂN</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Hỗ trợ nhân viên trong việc xây dựng một kế hoạch phát triển sự nghiệp để họ có thể đạt được mục tiêu của mình.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">SÁNG TẠO</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Khuyến khích sự sáng tạo và động lực của nhân viên bằng cách đưa ra những dự án thực tế và những thử thách thú vị.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">CÂN BẰNG</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Chú trọng về sự cân bằng trong cuộc sống với tinh thần "Làm hết mình, chơi hết sức".
                            </div>
                        </div>
                    </div>
                    <div className="noibo_daotao1">
                        GIÁ TRỊ CHO NỘI BỘ
                    </div>
                </div>
                <div className="GTCL_khachhang">
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">CÁ NHÂN HÓA</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Thấu hiểu sâu sắc về khách hàng và đưa ra các sản phẩm cá nhân hóa phù hợp với nhu cầu của họ.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">ĐỒNG HÀNH</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Tối đa hóa đầu ra bằng việc xây dựng lộ trình và đồng hành xuyên xuyên suốt quá trình.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">TIẾT KIỆM</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Tiết kiện thời gian và chi phí bằng cách sử dụng công nghệ và mạng lưới đối tác sâu rộng.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">CHẤT LƯỢNG</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Cam kết chất lượng hàng đầu có tính thực tiễn cao cho từng sản phẩm và dịch vụ cung cấp.
                        </div>
                    </div>
                    <div className="GTCL_noibo_opacity"></div>
                    <div className="GTCL_noibo2">
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">CÁ NHÂN HÓA</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Thấu hiểu sâu sắc về khách hàng và đưa ra các sản phẩm cá nhân hóa phù hợp với nhu cầu của họ.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">ĐỒNG HÀNH</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Tối đa hóa đầu ra bằng việc xây dựng lộ trình và đồng hành xuyên xuyên suốt quá trình.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">TIẾT KIỆM</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Tiết kiện thời gian và chi phí bằng cách sử dụng công nghệ và mạng lưới đối tác sâu rộng.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">CHẤT LƯỢNG</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Cam kết chất lượng hàng đầu có tính thực tiễn cao cho từng sản phẩm và dịch vụ cung cấp.
                            </div>
                        </div>
                    </div>
                    <div className="noibo_daotao1">
                        GIÁ TRỊ CHO KHÁCH HÀNG
                    </div>
                </div>
                <div className="GTCL_doitac">
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">UY TÍN</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Luôn giữ uy tín và đảm bảo thực hiện cam kết đối với đối tác.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">SÁNG TẠO</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Sáng tạo và đổi mới trong việc cung cấp sản phẩm và dịch vụ  cho đối tác.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">CHẤT LƯỢNG</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Cung cấp các sản phẩm và dịch vụ chất lượng và đáp ứng được các tiêu chuẩn chất lượng của đối tác.
                        </div>
                    </div>
                    <div className="noibo_daotao">
                        <div className="noibo_daotao_title">
                            <span className="noibo_daotao_title1">CHUYÊN NGHIỆP</span>
                        </div>
                        <div className="noibo_daotao_content">
                            Luôn giữ một tinh thần chuyên nghiệp trong mọi giao dịch và tương tác.
                        </div>
                    </div>
                    <div className="GTCL_noibo_opacity"></div>
                    <div className="GTCL_noibo2">
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">UY TÍN</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Luôn giữ uy tín và đảm bảo thực hiện cam kết đối với đối tác.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">SÁNG TẠO</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Sáng tạo và đổi mới trong việc cung cấp sản phẩm và dịch vụ  cho đối tác.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">CHẤT LƯỢNG</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Cung cấp các sản phẩm và dịch vụ chất lượng và đáp ứng được các tiêu chuẩn chất lượng của đối tác.
                            </div>
                        </div>
                        <div className="noibo_daotao">
                            <div className="noibo_daotao_title">
                                <span className="noibo_daotao_title1">CHUYÊN NGHIỆP</span>
                            </div>
                            <div className="noibo_daotao_content">
                                Luôn giữ một tinh thần chuyên nghiệp trong mọi giao dịch và tương tác.
                            </div>
                        </div>
                    </div>
                    <div className="noibo_daotao1">
                        GIÁ TRỊ CHO ĐỐI TÁC
                    </div>
                </div>
            </div>
            <div className="TrietLy" ref={trietly}>
                <div className="TrietLy_Title">
                    TRIẾT LÝ THƯƠNG HIỆU
                </div>
                <div className="TrietLy_Content">
                    Tại CareerEmpower, nếu bạn cảm thấy phù hợp, đây sẽ là sự nghiệp của bạn. Nếu Không, CareerEmpower sẽ là bệ phóng của bạn trên con đường sự nghiệp của bạn.
                </div>
                <div className="TrietLy_Opacity">
                </div>
                <div className="TrietLy1">
                    <div className="TrietLy_Title">
                        TRIẾT LÝ THƯƠNG HIỆU
                    </div>
                    <div className="TrietLy_Content">
                        Tại CareerEmpower, nếu bạn cảm thấy phù hợp, đây sẽ là sự nghiệp của bạn. Nếu Không, CareerEmpower sẽ là bệ phóng của bạn trên con đường sự nghiệp của bạn.
                    </div>
                </div>
            </div>
            <div className="ConNguoi" ref={connguoi}>
                <div className="ConNguoi_top">
                    <div className="ConNguoi_Titlee">
                        CON NGƯỜI
                    </div>
                    <div className="ConNguoi_Title22">
                        ĐỘI NGŨ CAREEREMPOWER LÀ NHỮNG CON NGƯỜI ĐAM MÊ, TÀI NĂNG VÀ KHÔNG NGẠI THỬ THÁCH
                    </div>
                    <div className="ConNguoi_bot-opacity">
                        <div className="ConNguoi_bot-content1">
                            Chúng tôi không ngừng học hỏi và khám phá những điều mới mẻ để nâng cao kỹ năng và phục vụ khách hàng tốt nhất. Đến với CareerEmpower, bạn sẽ được gặp gỡ những chuyên gia hàng đầu về nghề nghiệp, cũng như những người bạn thân thiết và tin cậy, sẵn sàng đồng hành cùng bạn trong hành trình thay đổi và phát triển nghề nghiệp của bạn.
                        </div>
                    </div>
                </div>
                <div className="ConNguoi_top-opacity">
                    <div className="ConNguoi_Titlee">
                        CON NGƯỜI
                    </div>
                    <div className="ConNguoi_Title22">
                        ĐỘI NGŨ CAREEREMPOWER LÀ NHỮNG CON NGƯỜI ĐAM MÊ, TÀI NĂNG VÀ KHÔNG NGẠI THỬ THÁCH
                    </div>
                </div>
                <div className="ConNguoi_bot">
                    <div className="ConNguoi_bot-content">
                        Chúng tôi không ngừng học hỏi và khám phá những điều mới mẻ để nâng cao kỹ năng và phục vụ khách hàng tốt nhất. Đến với CareerEmpower, bạn sẽ được gặp gỡ những chuyên gia hàng đầu về nghề nghiệp, cũng như những người bạn thân thiết và tin cậy, sẵn sàng đồng hành cùng bạn trong hành trình thay đổi và phát triển nghề nghiệp của bạn.
                    </div>
                </div>
            </div>
            <div className="ConNguoi_top1">
                <div className="ConNguoi_Titlee">
                    CON NGƯỜI
                </div>
                <div className="ConNguoi_Title22">
                    ĐỘI NGŨ CAREEREMPOWER LÀ NHỮNG CON NGƯỜI ĐAM MÊ, TÀI NĂNG VÀ KHÔNG NGẠI THỬ THÁCH
                </div>
            </div>
            <div className="ConNguoi_img">

            </div>
            <div className="ConNguoi_bot1">
                <div className="ConNguoi_bot-content2">
                    Chúng tôi không ngừng học hỏi và khám phá những điều mới mẻ để nâng cao kỹ năng và phục vụ khách hàng tốt nhất. Đến với CareerEmpower, bạn sẽ được gặp gỡ những chuyên gia hàng đầu về nghề nghiệp, cũng như những người bạn thân thiết và tin cậy, sẵn sàng đồng hành cùng bạn trong hành trình thay đổi và phát triển nghề nghiệp của bạn.
                </div>
            </div>
        </div>
    )
}
export default About;