import axios from "axios";

interface settingsType {
  apiKey: string;
  modelName: string;
  calledMethod: string;
  methodProperties: MethodPropertiesTypes;
}

export interface MethodPropertiesTypes {
  CityName: string;
  Language: string;
  Page?: number;
  Limit?: number;
}

const getWarehousesSettings = (
  props: MethodPropertiesTypes
): settingsType => ({
  apiKey: "79184968e14862a87de386e39ffed8f1",
  modelName: "Address",
  calledMethod: "getWarehouses",
  methodProperties: {
    CityName: props.CityName,
    Language: props.Language,
    Page: props.Page,
    Limit: props.Limit,
  },
});

export const getWarehouses = async (props: MethodPropertiesTypes) => {
  try {
    const warehouses = await axios
      .post(
        `https://api.novaposhta.ua/v2.0/json/`,
        JSON.stringify(getWarehousesSettings(props))
      )
      .then((response) => response.data);

    return warehouses.data;
  } catch (error: any) {
    throw Error(error.message);
  }
};
