export const currency = (amount: number) => {
  return  amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
};
