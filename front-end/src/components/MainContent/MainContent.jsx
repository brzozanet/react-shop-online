import css from "./MainContent.module.css";

export function MainContent({ children }) {
  return (
    <>
      <div className={css.mainContent}>{children}</div>
    </>
  );
}
