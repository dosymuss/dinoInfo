import { getDinoById } from "@/api";

import DinoInfoBtns from "@/components/dinoProject/dinoInfoBtns/DinoInfoBtns";
import DinoInfoSlider from "@/components/dinoProject/dinoInfoSlider/DinoInfoSlider";
import DinoInfoText from "@/components/dinoProject/DinoInfoText/DinoInfoText";
import NameCategoryDiv from "@/ui/dinoProject/nameCategoryDiv/NameCategoryDiv";

import styles from "./dinoInfo.module.scss";
import NoData from "@/ui/dinoProject/noData/NoData";

type Props = {
  params: {
    id: string;
  };
};

export default async function DinosPage({ params }: Props) {
  const { id } = params;

  const dinoById = await getDinoById(id);

  if (!dinoById) {
    return <NoData />;
  }

  return (
    <div className={styles.main}>
      <NameCategoryDiv name={dinoById?.name} category={dinoById?.category} />
      <div className={styles.imageText}>
        <DinoInfoSlider images={dinoById?.images} />
        <div className={styles.textDiv}>
          <p>{dinoById?.main_text}</p>
          <DinoInfoBtns />
        </div>
      </div>
      <p className={styles.infoTitle}>All the information you need:</p>
      <div className={styles.textBlockDiv}>
        <DinoInfoText text={dinoById?.description} title="Description" />
        <DinoInfoText title="Features" text={dinoById?.features} />
        <DinoInfoText text={dinoById?.diet} title="Diet" />
        <DinoInfoText title="Behavor" text={dinoById?.behavor} />
        <DinoInfoText title="Research" text={dinoById?.research} />
        <DinoInfoText title="Myths" text={dinoById?.myths} />
        <DinoInfoText title="Facts" text={dinoById?.facts} />
      </div>
    </div>
  );
}
