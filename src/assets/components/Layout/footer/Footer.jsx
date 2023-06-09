import React from 'react'
import FooterStyle from './FooterStyle.scss'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrFacebook, GrInstagram, GrYoutube } from 'react-icons/gr'


const Footer = () => {
  return (
    <div className='main-footer'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="block-content">
              <h4 className="footer-title">
                CÔNG TY CỔ PHẦN THỜI TRANG H2T VIỆT NAM
              </h4>
              <div className="footer-content">
                <p>Địa chỉ: Số 1, ngõ 40, tổ 14 phố Nguyễn Thị Định, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội
                  <br /> Người đại diện: NGÔ TRÍ TÙNG
                  <br /> Mã số thuế: 0106533311, ngày cấp ĐKKD 08/05/2014. Nơi cấp: Sở kế hoạch và đầu tư Hà Nội.
                </p>
                <div className="footer-logo">
                  <a href="">
                    <img src="https://file.hstatic.net/1000300454/file/logo_bct_019590229b4c4dfda690236b67f7aff4.png"
                      alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="block-content">
              <h4>Policy</h4>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="">Chinh sach doi tra</a>
                  </li>
                  <li>
                    <a href="">KT don hang</a>
                  </li>
                  <li>
                    <a href="">Membership</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="block-content">
              <h4>Shop Address</h4>
              <div className="footer-content">
                <ul>
                  <li><a href="">Hanoi</a></li>
                  <li><a href="">Nam Dinh</a></li>
                  <li><a href="">Thanh Hoa</a></li>
                  <li><a href="">Ca Mau</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="block-content">
              <h4>Consultant </h4>
              <div className="footer-content">
                <p className="phone">
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <a href=""> 0327.006.255</a>
                </p>
                <p className="moreinfo">
                  All weekdays are available
                </p>
                <div className="social">
                  <h4>Contact us</h4>
                  <ul>
                    <li><a href=""><GrFacebook /></a></li>
                    <li><a href=""><GrInstagram /></a></li>
                    <li><a href=""><GrYoutube /></a></li>
                    <li><a href=""><GrYoutube /></a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="block-content">
              <h4>Customer Service</h4>
              <div className="footer-content">
                <p className="phone">
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <a href=""> 0327.006.255</a>
                </p>
                <p className="moreinfo">
                  All weekdays are available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer