import * as Yup from "yup";

export const INITIAL_VALUES = {
  brand: "",
  trademarkOwner: "",
};

export const validationSchema = Yup.object().shape({
  brand: Yup.string().required("El nombre de la marca es obligatorio"),
  trademarkOwner: Yup.string().required(
    "El titular de la marca es obligatorio"
  ),
});
