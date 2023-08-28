import styles from "./NotfoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <>
      <h1 className={styles.root}>
        <span>&#128532;</span>
        <br />
        Ничего не найдено
        <br />
        <p className={styles.description}>
          К сожелению данная страница отсутствует в нашем интерент магазине
        </p>
      </h1>
    </>
  );
};
