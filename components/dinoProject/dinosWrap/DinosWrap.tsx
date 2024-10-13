"use client";

import { useDinos } from "@/store";
import NoData from "@/ui/dinoProject/noData/NoData";
import { useEffect } from "react";
import DinoCard from "../dinoCard/DinoCard";
import DinoSpinner from "@/ui/dinoProject/dinoSpinner/DinoSpinner";

import styles from "./DinosWrap.module.scss";

const DinosWrap = () => {
  const state = useDinos((state) => state.state);
  const getDinos = useDinos((state) => state.getDinos);
  const fetchDinosByCategory = useDinos((state) => state.fetchDinosByCategory);
  const fetchDinosLiked = useDinos((state) => state.fetchDinosLiked);
  const fetchDinosSaved = useDinos((state) => state.fetchDinosSaved);

  const { dinos, err, status, category } = state;

  useEffect(() => {
    getDinos();
  }, [getDinos]); // Добавляем getDinos в зависимости

  useEffect(() => {
    if (category === "Сохраненные") {
      fetchDinosSaved();
    } else if (category === "Понравившиеся") {
      fetchDinosLiked();
    } else {
      fetchDinosByCategory(category);
    }
  }, [category]);

  if (status === "loading") {
    return (
      <div className={styles.spinnerWrap}>
        <DinoSpinner />
      </div>
    );
  } else {
    return (
      <div className={styles.dinosWrap}>
        {dinos && dinos.length > 0 ? (
          dinos.map((item) => <DinoCard key={item.id} dino={item} />) // Добавляем key
        ) : (
          <NoData />
        )}
      </div>
    );
  }
};

export default DinosWrap;
