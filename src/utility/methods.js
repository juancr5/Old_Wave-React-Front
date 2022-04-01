
//Metodo para convertir el numero del precio en formato de dinero
export const formatNumberToPrice = (price) => {
    const aux = Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
    return aux;
  };