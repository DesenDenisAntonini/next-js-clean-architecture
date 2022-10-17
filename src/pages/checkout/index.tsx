import { NextPage } from "next";
import { FormEvent } from "react";

type Props = {};
export const CheckoutPage: NextPage = (props: Props) => {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div>
      <h3>Meu Carrinho</h3>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Cartão crédito</label>
          <input
            type="text"
            name="credit_card_number"
          />
        </div>
        <div>
          <button type="submit">Comprar</button>
        </div>
      </form>
    </div>
  );
};