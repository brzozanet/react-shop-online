import { nanoid } from "nanoid";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import { PageTitle } from "../PageTitle/PageTitle";
import css from "./Bestsellers.module.css";

export const Bestsellers = ({ bestsellersData }) => {
  return (
    <>
      <div className={css.bestsellers}>
        <CenteredContent>
          <PageTitle>Sprawdź nasze bestellery</PageTitle>
          <div className={css.bestsellersList}>
            {bestsellersData.map((product) => {
              return (
                <Product
                  id={product.id}
                  name={product.name}
                  price={product.pricePLN}
                  photo={product.photos[0]}
                  gender={product.gender}
                  category={product.category}
                  subcategory={product.subcategory}
                  key={nanoid()}
                />
              );
            })}
          </div>
        </CenteredContent>
      </div>
    </>
  );
};
