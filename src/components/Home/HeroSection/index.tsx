"use client"

import { Button, Carousel, Image } from "antd";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "./style.scss";
import { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const carouselRef = useRef<CarouselRef>(null);
  const t = useTranslations("carousel");
  return (
    <section className="heroSection">
        <MdNavigateBefore
          className="icon left"
          fontSize={30}
          onClick={() => carouselRef.current?.prev()}
        />
        <Carousel ref={carouselRef} swipeToSlide autoplay dots={true}>
        <div className="banner my-custom-row banner1">
              <div className="banner__wrapper"> 
              <div className="banner__wrapper--content">
                <div className="banner__wrapper--content--Upper">
                  <h1>{t("banner1.title")}</h1>
                  <p>{t("banner1.content")}</p>
                </div>
                <Button className="button">{t("banner1.button")}</Button>
              </div>
              <div className="banner__wrapper--image">
                <Image preview={false} width={500} height={300} src="/images/heroBanner1.png"/>
              </div>
              </div>
          </div>
           <div className="banner my-custom-row banner2">
              <div className="banner__wrapper"> 
              <div className="banner__wrapper--content">
              <div className="banner__wrapper--content--Upper">
                <h1>{t("banner2.title")}</h1>
                <p>{t("banner2.content")}</p>
                </div>
                <Button className="button">{t("banner2.button")}</Button>
              </div>
              <div className="banner__wrapper--image">
                <Image preview={false} width={500} height={300} src="/images/heroBanner2.png"/>
              </div>
              </div>
          </div>
          <div className="banner my-custom-row banner3">
              <div className="banner__wrapper"> 
              <div className="banner__wrapper--content">
              <div className="banner__wrapper--content--Upper">
                <h1>{t("banner3.title")}</h1>
                <p>{t("banner3.content")}</p>
                </div>
                <Button className="button">{t("banner3.button")}</Button>
              </div>
              <div className="banner__wrapper--image">
                <Image preview={false} width={500} height={300} src="/images/heroBanner3.png"/>
              </div>
              </div>
          </div>
           </Carousel>
           <MdNavigateNext
              className="icon right"
              fontSize={30}
              onClick={() => carouselRef.current?.next()}
            />
    </section>
  );
}
