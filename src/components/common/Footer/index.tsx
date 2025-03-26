"use client";

import { Col, Image, Row } from "antd";
import "./style.scss";
import { TbWorld } from "react-icons/tb";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Footer() {
  return (
    <section className="footer">
      <Row className="footer__up">
        <Col className="footer__up--content" span={24}>
          <h4>Powered by</h4>
          <Image preview={false} className="img" src="./LogoNext.png" />
          <Image preview={false} className="img" src="./logoNest.png" />
          <Image preview={false} className="img" src="./postgree.png" />
        </Col>
      </Row>
      <Row className="footer__down">
        <Col className="footer__down--content A" span={12}>
          <div className="up">
            <Image preview={false} className="img" src="./logoWhite.png" />
            <h5>F-Learn – Learn fast, remember long</h5>
          </div>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </Col>
        <Col className="footer__down--content B" span={12}>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </Col>
      </Row>
      <Row className="footer__last">
        <Col span={18} order={1} className="footer__last--content left">
          <h4>© 2025 P-Learn</h4>
        </Col>
        <Col span={6} order={2} className="footer__last--content right">
            <span>English</span>
            <span className="icon">
              <LanguageSwitcher/>
            </span>
          
        </Col>
      </Row>
    </section>
  );
}
