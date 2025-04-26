"use client";

import { Col, Image, Row } from "antd";
import "./style.scss";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslations } from "next-intl";

export default function Footer() {
  const {language} = useLanguage();
  const t = useTranslations("homepage");
  const t2 = useTranslations("navigation");
  return (
    <section className="footer">
      <Row className="footer__up">
        <Col className="footer__up--content" span={24}>
          <h4>Powered by</h4>
          <Image preview={false} className="img" src="/images/Next.png" />
          <Image preview={false} className="img" src="/images/logoNest.png" />
          <Image preview={false} className="img" src="/images/postgree.png" />
        </Col>
      </Row>
      
        <Row className="footer__logo">
          <div className="up">
            <Image preview={false} className="img" src="/images/logoWhite.png" />
            <h5>P-Learn – Learn fast, remember long</h5>
          </div>
        </Row>
        <Row className="footer__down">
        <Col className="footer__down--content A" span={12}>
          <ul>
            <li>{t2("pages")}</li>
            <li>{t2("homepage")}</li>
            <li>{t2("about")}</li>
            <li>{t2("blog")}</li>
          </ul>
        </Col>
        <Col className="footer__down--content B" span={12}>
          <ul>
            <li>{t2("contact")}</li>
            <li>{t2("github")} :</li>
            <li>{t2("email")} :</li>
          </ul>
        </Col>
      </Row>
      <Row className="footer__last">
        <Col span={18} order={1} className="footer__last--content left">
          <h4>© 2025 P-Learn. All rights reserved.</h4>
        </Col>
        <Col span={6} order={2} className="footer__last--content right">
            <span>{t(`language.${language}`)}</span>
            <span className="icon">
              <LanguageSwitcher/>
            </span>
          
        </Col>
      </Row>
    </section>
  );
}
