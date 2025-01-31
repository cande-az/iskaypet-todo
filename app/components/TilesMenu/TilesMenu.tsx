"use client";
import React, { useEffect, useRef } from "react";
import Tile from "./Tile/Tile";
import styles from "./TilesMenu.module.scss";
import { usePathname } from "next/navigation";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import { tilesMenu } from "./constants";

interface SwiperReference {
  swiper: SwiperClass;
}

const TilesMenu = () => {
  const swiperRef = useRef<SwiperReference | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!swiperRef.current) return;

    tilesMenu.forEach((tile, index) => {
      if (pathname.includes(tile.href)) {
        swiperRef.current?.swiper.slideTo(index);
      }
    });
  }, [pathname]);

  return (
    <nav className={styles.tiles__menu}>
      <ul className={styles.swiper__container}>
        <SwiperComponent
          ref={swiperRef}
          slidesPerView="auto"
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          className={styles.swiper__container}
        >
          {
            tilesMenu.map((tile, index) => (
              <SwiperSlide key={index}
              className={styles["swiper-slide"]}
              >
                <Tile
                  title={tile.title}
                  url={tile.href}
                  isActive={pathname.includes(tile.href)}
                />
              </SwiperSlide>
            ))
          }
        </SwiperComponent>
      </ul>
    </nav>
  );
};

export default TilesMenu;
